import { ReactNode } from "react";
import { userCookies } from "@/cookies/userCookies";
import { sessionCookies } from "@/cookies/sessionCookies";
import { Header } from "./components/Header";
import { redirect } from "next/navigation";
import { FeedContainer } from "./components/Container";
export const dynamic = "force-dynamic";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await sessionCookies();
  const user = await userCookies();
  if (!session) {
    redirect("/login");
  }
  return (
    <main>
      <Header user={user} />
      <FeedContainer>{children}</FeedContainer>
    </main>
  );
}
