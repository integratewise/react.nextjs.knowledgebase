import { redirect } from "next/navigation";
import { ProductionSlug } from "@/app/lib/types";

export default async function Home() {
  // Redirects to /docs — main IntegrateWise public documentation entry
  redirect(ProductionSlug);
}
