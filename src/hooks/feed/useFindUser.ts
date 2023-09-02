import { useQuery } from "@tanstack/react-query";
import { findUser } from "@/queries/findUser";

export const useFindUser = (username:string) => {
  const { data, isLoading, isError } = useQuery(['user', username], () => findUser(username));

  return { data, isLoading, isError };
};