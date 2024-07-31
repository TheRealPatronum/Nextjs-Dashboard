import { Button } from "@/components/ui/button";
import { LayoutDashboardIcon } from "lucide-react";
import Link from "next/link";

export default function LandingPage(p: {}) {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <LayoutDashboardIcon size={50} className="text-pink-500" />
        MyDashboard
      </h1>

      <p>The best dashboard to manage customer support</p>

      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <small>or</small>
        <Button asChild variant="outline">
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    </>
  );
}
