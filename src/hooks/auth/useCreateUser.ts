import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {useRouter} from "next/navigation";

interface User {
  email: string;
  name:string
  userName: string;
  password: string;
  role: string
}


export default function useCreateUser() {
  const supabaseAuth = createClientComponentClient()
  const router = useRouter();

    return async (user: User) => {

        try {
            const {error: error} = await supabaseAuth.auth.signUp({
                email: user.email,
                password: user.password,
                options: {
                    data: {
                        username: `@${user.userName}`,
                        name: user.name,
                        role: user.role,
                    },
                    emailRedirectTo: `${location.origin}/auth/callback`,
                },
            });

            router.refresh();
            if (error) {
                throw error
            }
        } catch (error) {
            throw error;
        }
    }
  
}