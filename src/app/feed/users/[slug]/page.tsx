import { userCookies } from "@/cookies/userCookies";
import { SlugMain } from "./components/SlugMain";

export const dynamic = "force-dynamic";
export default async function Page({ params }: { params: { slug: string } }) {
  const user = await userCookies();
  return <SlugMain slug={params.slug} watcher={user} />;
}
