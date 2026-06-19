import { redirect } from "next/navigation";
import { ProductionSlug } from "@/app/lib/types";

export default async function Home() {
  // Redirects directly to the main IntegrateWise documentation page
  redirect(`${ProductionSlug}/what-is-integratewise`);
}
