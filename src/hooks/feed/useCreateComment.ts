import {AddCommentForm} from "@/app/types/AddCommentForm";
import {User} from "@/app/types/User";
import {createComment} from "@/queries/createComment";
import {useMutation, useQueryClient} from "@tanstack/react-query";

interface mutate {
    user: User | null,
    formData: AddCommentForm
    postId: number
}

export default function useCreateComment() {
    const queryClient = useQueryClient();

    const {
        isLoading,
        error,
        mutate: update
    } = useMutation({
            mutationFn: (args: mutate) => createComment(args.user, args.formData, args.postId),
            onMutate: async (newComment) => {
                await queryClient.cancelQueries({queryKey: ['comments']})
                const previousComments = queryClient.getQueryData(['comments'])
                queryClient.setQueryData(['comments'], (old: any) => [...(old || []), newComment])
                return {previousComments}
            },
            onError: (err, newTodo, context) => {
                queryClient.setQueryData(['comments'], context?.previousComments)
            },
            onSettled: () => {
                queryClient.invalidateQueries({queryKey: ['comments']})
            },
        }
    );

    return {isLoading, error, update};
}
