"use client";
import { useGetAllPosts } from "@/hooks/feed/useGetAllPosts";
import { PostCard } from "./PostCard";
import { Post } from "@/app/types/Post";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
export const GeneralPosts = () => {
  const { data, isLoading } = useGetAllPosts();
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
        <PostCard key={index} post={post} />
      ))}
    </section>
  );
};
