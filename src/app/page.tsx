import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";
import { sessionCookies } from "@/cookies/sessionCookies";
export const metadata = {
  title: "Home",
};
export default async function Home() {
  const session = await sessionCookies();
  if (!session) {
    redirect("/login");
  } else {
    redirect("/feed");
  }
}
