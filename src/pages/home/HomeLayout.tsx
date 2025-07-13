import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="flex w-screen h-screen p-4 gap-4">
      <Sidebar />
      <div className="flex flex-col w-full gap-4">
        <Topbar />
        <Outlet />
      </div>
    </div>
  )
}
