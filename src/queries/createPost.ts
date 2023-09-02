import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { User } from "@/app/types/User";
import { AddPostForm } from "@/app/types/AddPostForm";
import { Post } from "@/app/types/Post";
export const createPost = async (user:User | null, formData:AddPostForm) => {
  const supabase = createClientComponentClient();
    const { data, error } = await supabase
      .from('posts')
      .upsert({ username: user?.user_metadata.username, title: formData.title, content:formData.content })
        .single()
  
    if(error) {
      throw new Error(error.message)
    }
  
    return data as Post[]
  }