import { Comment } from "@/app/types/Comment";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";

export const getComments = async (postId:number) => {
  const supabase = createClientComponentClient<Database>();
    const { data, error } = await supabase
      .from('comments')
      .select()
      .eq("postid", `${postId}`)
      .order('created_at', { ascending: false })
  
    if(error) {
      throw new Error(error.message)
    }
  
    return data as Comment[];
  }