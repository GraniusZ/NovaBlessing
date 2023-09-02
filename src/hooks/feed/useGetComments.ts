import { useQuery } from "@tanstack/react-query";
import { getComments } from "@/queries/getComments";

export const useGetComments = (postId:number) => {
  const { data, isLoading, isError } = useQuery(['comments', postId], () => getComments(postId));

  return { data, isLoading, isError };
};