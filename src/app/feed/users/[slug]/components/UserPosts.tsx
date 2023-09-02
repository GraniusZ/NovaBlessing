"use client";
import { User } from "@/app/types/User";
import { AuthorPostCard } from "./AuthorPostCard";
import { Post } from "@/app/types/Post";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useGetPostsByAuthor } from "@/hooks/feed/useGetPostsByAuthor";
import { UserServer } from "@/app/types/UserServer";
export const UserPosts = ({
  user,
  watcher,
}: {
  user: UserServer;
  watcher: User;
}) => {
  const { data, isLoading } = useGetPostsByAuthor(user.username);
  const [localPosts, setLocalPosts] = useState<Post[]>([]);
  useEffect(() => {
    const posts = data || [];
    setLocalPosts(posts);
  }, [data]);
  return (
    <section
      style={{
        padding: "16px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "72px",
      }}
    >
      {isLoading && <CircularProgress sx={{ mt: "100px", mx: "auto" }} />}
      {localPosts?.map((post, index) => (
        <AuthorPostCard key={index} post={post} user={watcher} />
      ))}
    </section>
  );
};
