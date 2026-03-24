import { redirect } from "next/navigation";

export default function OurWork2Page() {
    // Keep the route working, but treat it as hidden by redirecting to `/works`.
    redirect("/works");
}

