"use client";

import { Stack, TextField, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import useLogin from "@/hooks/auth/useLogin";
interface FormValues {
  email: string;
  userName: string;
  name: string;
  password: string;
  role: "Author" | "Commentator";
}
export const LoginForm = () => {
  const signIn = useLogin();
  const [err, setErr] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await signIn(data);
    } catch (error: any) {
      setErr("Wrong password or user does not exist");
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

  const { ref: passwordRef, ...passwordProps } = register("password", {
    required: {
      value: true,
      message: "Please enter your password",
    },
  });

  return (
    <>
      <form
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
          <Typography variant="h5">Login</Typography>
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

          {err && <Typography color="error">{err}</Typography>}
          <Button
            variant="contained"
            sx={{ py: "15px", px: "20px" }}
            type="submit"
          >
            Submit
          </Button>
          <Link href={"/register"} style={{ textDecoration: "none" }}>
            {" "}
            <Typography
              sx={{ textDecoration: "none", fontWeight: "medium" }}
              color={"#a39493"}
            >
              {" "}
              Don`t have account? Sign Up
            </Typography>
          </Link>
        </Stack>
      </form>
    </>
  );
};
