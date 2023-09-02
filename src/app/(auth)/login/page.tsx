import { NextPage } from "next";
import { LoginForm } from "./components/LoginForm";
import { Box } from "@mui/material";
import { sessionCookies } from "@/cookies/sessionCookies";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Login",
};
const Login: NextPage = async () => {
  const session = await sessionCookies();

  if (session) {
    redirect("/feed");
  }
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ boxShadow: 0 }}
      >
        <LoginForm />
      </Box>
    </>
  );
};

export default Login;
