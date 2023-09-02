import { Post } from "@/app/types/Post";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";

export const getPostByAuthor = async (username:string) => {
  const supabase = createClientComponentClient<Database>();
    const { data, error } = await supabase
      .from('posts')
      .select()
      .eq("username", username)
      .order('created_at', { ascending: false })
  
    if(error) {
      throw new Error(error.message)
    }
  
    return data as Post[];
  }