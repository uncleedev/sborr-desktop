import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="min-w-[960px] min-h-[640px] w-screen h-screen flex items-center gap-4 p-4">
      <Sidebar />
      <div className="w-full h-full flex flex-col gap-4">
        <Topbar />
        <Outlet />
      </div>
    </div>
  )
}
