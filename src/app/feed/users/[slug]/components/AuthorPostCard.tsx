"use client";
import { Post } from "@/app/types/Post";
import { timeSince } from "@/helpers/timeSince";
import { Card, Divider, Stack, Typography, Box, Button } from "@mui/material";
import { CommentForm } from "./CommentForm";
import { useState } from "react";
import { Comments } from "@/app/feed/components/Comments";
import { User } from "@/app/types/User";
import Link from "next/link";
export const AuthorPostCard = ({ post, user }: { post: Post; user: User }) => {
  const [openComments, setOpenComments] = useState<boolean>(false);
  const handleButton = () => {
    setOpenComments(!openComments);
  };
  return (
    <Card variant="outlined" sx={{ px: "16px", py: "10px" }}>
      <Stack spacing={1}>
        {" "}
        <Link
          style={{ textDecoration: "none" }}
          href={`/feed/users/${post.username}`}
        >
          {" "}
          <Typography color={"black"} sx={{ opacity: "50%" }}>
            {"@" + post.username}
          </Typography>
        </Link>
        <Typography
          variant="h5"
          style={{ wordWrap: "break-word", fontWeight: "bold" }}
        >
          {post.title}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ wordWrap: "break-word", fontWeight: "bold" }}
        >
          {post.content}
        </Typography>
        <Typography
          sx={{
            opacity: "50%",
            float: "right",
            display: "flex",
            justifyContent: "flex-end",
          }}
          variant="subtitle2"
          style={{ wordWrap: "break-word" }}
          color="initial"
        >
          {timeSince(post.created_at)}
        </Typography>
        <Divider />
        {user.user_metadata.role == "Commentator" && (
          <CommentForm postId={post.id} user={user} setOpen={setOpenComments} />
        )}
        <Button onClick={handleButton}>Comments</Button>
      </Stack>

      {openComments && (
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Comments postId={post.id} />
        </Box>
      )}
    </Card>
  );
};
