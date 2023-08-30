import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {useRouter} from "next/navigation";

interface User {
  email: string;
  password: string;

}


export default function useLogin() {
  const supabaseAuth = createClientComponentClient()
  const router = useRouter();

    return async (user: User) => {
        try {
            const {error: error} = await supabaseAuth.auth.signInWithPassword({
                email: user.email,
                password: user.password,
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