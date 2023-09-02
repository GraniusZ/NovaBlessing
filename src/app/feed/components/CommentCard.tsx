import { Comment } from "@/app/types/Comment";
import { Card, Typography, Stack } from "@mui/material";
export const CommentCard = ({ comment }: { comment: Comment }) => {
  return (
    <Card variant="outlined" sx={{ px: "16px", py: "10px" }}>
      <Stack spacing={1}>
        {" "}
        <Typography sx={{ opacity: "50%" }}>
          {"@" + comment.username}
        </Typography>
        <Typography
          variant="h6"
          style={{ wordWrap: "break-word" }}
          color="initial"
        >
          {comment.content}
        </Typography>
      </Stack>
    </Card>
  );
};
