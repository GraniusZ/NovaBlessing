"use client";
import { useFindUser } from "@/hooks/feed/useFindUser";
import { UserNotFound } from "./UserNotFound";
import { Box } from "@mui/material";
import NotAuthor from "./NotAuthor";
import { Loading } from "./Loading";
import { UserProfileCard } from "./UserProfileCard";
import { UserServer } from "@/app/types/UserServer";
import { UserPosts } from "./UserPosts";
import { User } from "@/app/types/User";
export const SlugMain = ({
  slug,
  watcher,
}: {
  slug: string;
  watcher: User;
}) => {
  const { data, isError, isLoading } = useFindUser(slug);
  const user = data || ({} as UserServer);
  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && (isError || data == undefined)) {
    return <UserNotFound />;
  }
  if (!isLoading && data?.role != "Author") {
    return <NotAuthor />;
  }
  return (
    <Box mt={"16px"}>
      <UserProfileCard user={user} />
      <UserPosts user={user} watcher={watcher} />
    </Box>
  );
};
