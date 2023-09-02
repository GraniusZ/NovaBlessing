"use client";

import { Stack, TextField, Typography, MenuItem, Button } from "@mui/material";
import ReactHookFormSelect from "./FormSelect";
import { useForm } from "react-hook-form";
import useCreateUser from "@/hooks/auth/useCreateUser";
import { useState } from "react";
import Link from "next/link";
interface FormValues {
  email: string;
  userName: string;
  name: string;
  password: string;
  role: "Author" | "Commentator";
}
export const RegisterForm = () => {
  const signUp = useCreateUser();
  const [err, setErr] = useState("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const authErrors = (error: any) => {
    switch (error.message) {
      case `duplicate key value violates unique constraint "profiles_username_key"`:
        return "Username already used";
      case `User already registered`:
        return "User already registered";
      default:
        return "SignUp failed. Please try again.";
    }
  };
  const onSubmit = async (data: FormValues) => {
    try {
      await signUp(data);
    } catch (error: any) {
      setErr(authErrors(error));
    }
  };

  const { ref: emailRef, ...emailProps } = register("email", {
    required: {
      value: true,
      message: "Please enter your email address",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Invalid email address",
    },
  });
  const { ref: nameRef, ...nameProps } = register("name", {
    minLength: 3,
    maxLength: 15,
    required: {
      value: true,
      message: "Please enter your name",
    },
  });
  const { ref: passwordRef, ...passwordProps } = register("password", {
    required: {
      value: true,
      message: "Please enter your password",
    },
  });
  const { ref: usernameRef, ...usernameProps } = register("userName", {
    minLength: 3,
    maxLength: 15,
    required: {
      value: true,
      message: "Please enter your username",
    },
    pattern: {
      value: /^[a-zA-Z0-9]*$/,
      message: "Only letters and numbers are allowed",
    },
  });
  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            maxWidth: "sm",
            width: "100%",
            px: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          <Typography variant="h5">Register</Typography>
          <TextField
            autoComplete="nope"
            label={"Name"}
            type="text"
            error={!!errors.name}
            helperText={errors?.name?.message}
            inputRef={nameRef}
            {...nameProps}
          />
          <TextField
            label={"Username"}
            type="text"
            error={!!errors.userName}
            helperText={errors?.userName?.message}
            inputRef={usernameRef}
            {...usernameProps}
          />
          <TextField
            label={"Email"}
            type="email"
            autoComplete="new-password"
            error={!!errors.email}
            helperText={errors?.email?.message}
            inputRef={emailRef}
            {...emailProps}
          />
          <TextField
            label={"Password"}
            type="password"
            autoComplete="new-password"
            error={!!errors.password}
            helperText={errors?.password?.message}
            inputRef={passwordRef}
            {...passwordProps}
          />
          <ReactHookFormSelect
            name="role"
            control={control}
            defaultValue={"Commentator"}
          >
            <MenuItem value={"Author"}>Author</MenuItem>
            <MenuItem value={"Commentator"}>Commentator</MenuItem>
          </ReactHookFormSelect>
          {err && <Typography color="error">{err}</Typography>}
          <Button
            variant="contained"
            sx={{ py: "15px", px: "20px" }}
            type="submit"
          >
            Submit
          </Button>
          <Link href={"/login"} style={{ textDecoration: "none" }}>
            {" "}
            <Typography
              sx={{ textDecoration: "none", fontWeight: "medium" }}
              color={"#a39493"}
            >
              {" "}
              Have account? Sign in
            </Typography>
          </Link>
        </Stack>
      </form>
    </>
  );
};
