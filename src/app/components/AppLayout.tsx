import { Outlet } from "react-router";
import PrimaryNavigation from "@/app/components/PrimaryNavigation";

export default function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <PrimaryNavigation />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
