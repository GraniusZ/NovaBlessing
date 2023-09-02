import { AddPostForm } from "@/app/types/AddPostForm";
import { User } from "@/app/types/User";
import { createPost } from "@/queries/createPost";
import { useQueryClient, useMutation } from "@tanstack/react-query";
interface mutate{
    user:User | null,
    formData:AddPostForm
}
export default function useCreatePost() {
  const queryClient = useQueryClient();
  
  const {
    isLoading,
    error,
    mutate: update
  } = useMutation({
      mutationFn: (args:mutate) => createPost(args.user, args.formData),
      onMutate: async (newPost) => {
      
        await queryClient.cancelQueries({ queryKey: ['posts'] })
    
  
        const previousPosts = queryClient.getQueryData(['posts'])
    

        queryClient.setQueryData(['posts'], (old:any) => [...(old || []), newPost])
    
        return { previousPosts }
      },
    
      onError: (err, newTodo, context) => {
        queryClient.setQueryData(['posts'], context?.previousPosts)
      },
    
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ['posts'] })
      },
    
  }
  );

  return { isLoading, error, update };
}
