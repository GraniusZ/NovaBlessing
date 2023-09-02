import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "@/queries/getAllPosts";

export const useGetAllPosts = () => {
  const { data, isLoading, isError } = useQuery(['posts'], () => getAllPosts());

  return { data, isLoading, isError };
};