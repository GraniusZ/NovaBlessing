import {useQuery} from "@tanstack/react-query";
import {getPostByAuthor} from "@/queries/getPostsByAuthor";

export const useGetPostsByAuthor = (author: string) => {
    const {data, isLoading, isError} = useQuery(['authorPosts', author], () => getPostByAuthor(author));

    return {data, isLoading, isError};
};