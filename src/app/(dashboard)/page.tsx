import { headers } from "next/headers";

import { HomeView } from "@/modules/home/ui/views/home-view";
import {auth} from "@/lib/auth";
import { redirect, RedirectType } from "next/navigation";
//import {caller} from "@/trpc/server";
// http://localhost:3000

const Page = async() => {
  //const data = await caller.hello({text: "Antonio server"});
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session){
    redirect("/sign-in");
  }

  return <HomeView />
};
export default Page;