import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {useRouter} from "next/navigation";

export default function useLogout() {
  const supabaseAuth = createClientComponentClient()
  const router = useRouter();

    return async () => {
        try {
            const {error: error} = await supabaseAuth.auth.signOut();
            router.refresh();
            if (error) {
                throw error
            }
        } catch (error) {
            throw error;
        }
    }
  
}