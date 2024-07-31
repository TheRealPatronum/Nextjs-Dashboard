import { LayoutDashboardIcon } from "lucide-react";
import Link from "next/link";

export default function MenuTitle() {
  return (
    <h4 className="flex items-center gap-1">
      <LayoutDashboardIcon className="text-primary" size={40} />
      <Link href="/dashboard">MyDashboard</Link>
    </h4>
  );
}
