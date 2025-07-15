import { Bell } from "lucide-react";
import { useLocation } from "react-router-dom";
import ModeToggle from "./mode-toggle";
import CardProfile from "./cards/card-profile";

export default function Topbar() {

  const location = useLocation()

  const activePath = location.pathname.replace("/", "");

  return (
    <div className="w-full flex justify-between items-center h-16 p-4 bg-background round">
      <h3 className="text-foreground/50">SBORR / <span className="text-foreground uppercase">{activePath}</span> </h3>
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button className=" p-2 cursor-pointer hover:text-foreground/50" title="Notifications">
            <Bell className=" h-6 w-6" />
          </button>
          <ModeToggle />
        </div>

        <CardProfile />
      </div>
    </div>
  )
}
