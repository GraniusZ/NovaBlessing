import { GeneralPosts } from "./components/GeneralPosts";
import { CreatePostForm } from "./components/CreatePostForm";
import { userCookies } from "@/cookies/userCookies";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Home",
};
export default async function Home() {
  const user = await userCookies();
  return (
    <section>
      {user?.user_metadata.role === "Author" && <CreatePostForm user={user} />}
      <GeneralPosts />
    </section>
  );
}
