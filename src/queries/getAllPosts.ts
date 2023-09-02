import { Post } from "@/app/types/Post";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";

export const getAllPosts = async () => {
  const supabase = createClientComponentClient<Database>();
    const { data, error } = await supabase
      .from('posts')
      .select()
      .order('created_at', { ascending: false })
  
    if(error) {
      throw new Error(error.message)
    }
  
    return data as Post[];
  }