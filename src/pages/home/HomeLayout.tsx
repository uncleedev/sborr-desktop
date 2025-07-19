import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="w-full h-full flex items-center gap-4 p-4">
      <Sidebar />
      <div className="w-full h-full flex flex-col gap-4">
        <Topbar />
        <Outlet />
      </div>
    </div>
  )
}
