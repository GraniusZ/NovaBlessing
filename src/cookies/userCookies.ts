import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { User } from "@/app/types/User";
export const userCookies = async () =>{
    const supabase = createServerComponentClient<Database>({ cookies });
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const localUser = user || {}
    const typedUser = localUser as User ;
    return typedUser
}