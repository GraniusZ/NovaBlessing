"use client";
import {
  Stack,
  TextField,
  Button,
  OutlinedInput,
  Divider,
} from "@mui/material";
import { User } from "@/app/types/User";
import { AddPostForm } from "@/app/types/AddPostForm";
import { useForm } from "react-hook-form";
import useCreatePost from "@/hooks/feed/useCreatePost";

export const CreatePostForm = ({ user }: { user: User | null }) => {
  const { update } = useCreatePost();
  const { register, handleSubmit, reset } = useForm<AddPostForm>({
    mode: "onChange",
  });
  const { ref: titleRef, ...titleProps } = register("title", {
    minLength: 1,
    required: {
      value: true,
      message: "Please enter your title",
    },
  });
  const { ref: contentRef, ...contentProps } = register("content", {
    minLength: 1,
    required: {
      value: true,
      message: "Please enter your text",
    },
  });
  const onSubmit = (data: AddPostForm) => {
    return Promise.all([update({ user: user, formData: data }), reset()]);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1} style={{ padding: "26px 0" }}>
        <TextField
          variant="standard"
          placeholder="Title"
          type="text"
          autoComplete="new-password"
          inputRef={titleRef}
          sx={{ outline: "none", border: 0, px: "8px" }}
          {...titleProps}
          InputProps={{
            disableUnderline: true, // <== added this
          }}
        />

        <OutlinedInput
          maxRows={16}
          inputRef={contentRef}
          {...contentProps}
          multiline
          style={{
            width: "100%",
            minHeight: "56px",
          }}
        />
        <Button
          variant="contained"
          sx={{ py: "3px", px: "4px", fontSize: "12px", maxWidth: "80px" }}
          type="submit"
        >
          Submit
        </Button>
      </Stack>
      <Divider />
    </form>
  );
};
