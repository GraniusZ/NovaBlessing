import { NextPage } from "next";
import { Box } from "@mui/material";
import { RegisterForm } from "@/app/(auth)/register/components/RegisterForm";
import { redirect } from "next/navigation";
import { sessionCookies } from "@/cookies/sessionCookies";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Register",
};
const Register: NextPage = async () => {
  const session = await sessionCookies();
  if (session) {
    redirect("/feed");
  }
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ boxShadow: 0 }}
    >
      <RegisterForm />
    </Box>
  );
};

export default Register;
