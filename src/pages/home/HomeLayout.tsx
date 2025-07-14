import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="flex w-screen h-screen p-4 gap-4">
      <Sidebar />
      <div className="flex flex-col w-full h-full gap-4">
        <Topbar />
        <Outlet />
      </div>
    </div>
  )
}
