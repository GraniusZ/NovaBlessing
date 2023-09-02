
import { Stack, Button, OutlinedInput, Divider } from "@mui/material";
import { User } from "@/app/types/User";
import { useForm } from "react-hook-form";
import useCreateComment from "@/hooks/feed/useCreateComment";
import { AddCommentForm } from "@/app/types/AddCommentForm";
import { SetStateAction, Dispatch } from "react";

export const CommentForm = ({
  postId,
  user,
  setOpen,
}: {
  postId: number;
  user: User;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, handleSubmit, reset } = useForm<AddCommentForm>({
    mode: "onChange",
  });
  const { update } = useCreateComment();
  const { ref: contentRef, ...contentProps } = register("content", {
    minLength: 1,
    required: {
      value: true,
      message: "Please enter your text",
    },
  });
  const onSubmit = (data: AddCommentForm) => {
    return Promise.all([
      update({ user: user, formData: data, postId: postId }),
      reset(),
      setOpen(true),
    ]);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1} style={{ padding: "14px 0" }}>
        <OutlinedInput
          maxRows={4}
          placeholder="Your comment"
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
