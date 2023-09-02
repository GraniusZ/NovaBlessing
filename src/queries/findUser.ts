import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { UserServer } from "@/app/types/UserServer";

export const findUser = async (username:string) => {
  const supabase = createClientComponentClient<Database>();
    const { data, error } = await supabase
      .from('profiles')
      .select()
      .limit(1)
      .eq("username", `${username}`)
      .single()
    if(error) {
      throw new Error(error.message)
    }
  
    return data as UserServer;
  }