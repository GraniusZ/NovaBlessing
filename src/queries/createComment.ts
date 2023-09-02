import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { User } from "@/app/types/User";
import { Comment } from "@/app/types/Comment";
import { AddCommentForm } from "@/app/types/AddCommentForm";

export const createComment = async (user:User | null, formData:AddCommentForm, postid:number) => {
  const supabase = createClientComponentClient();
    const { data, error } = await supabase
      .from('comments')
      .upsert({ username: user?.user_metadata.username, content:formData.content, postid: postid })
        .single()
  
    if(error) {
      throw new Error(error.message)
    }
  
    return data as Comment
  }