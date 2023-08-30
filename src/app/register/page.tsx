import {NextPage} from "next";
import {Box} from "@mui/material";
import {RegisterForm} from "@/app/register/RegisterForm";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

const Register: NextPage = async () => {
  const supabase = createServerComponentClient({cookies});
  const {
    data: {session},
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/");
  }
  return (
      <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          sx={{boxShadow: 0}}
      >
        <RegisterForm/>
      </Box>
  );
};

export default Register;
