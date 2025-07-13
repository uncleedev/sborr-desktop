import { Calendar, FileText, LayoutDashboard, Users } from "lucide-react";

export const navLinks = [
    {
        label: "Dashboard",
        icon: <LayoutDashboard className="w-full h-full" />,
        path: "/",
    },
    {
        label: "Documents",
        icon: <FileText className="w-full h-full" />,
        path: "/documents",
    },
    {
        label: "Sessions",
        icon: <Calendar className="w-full h-full" />,
        path: "/sessions",
    },
    {
        label: "Users",
        icon: <Users className="w-full h-full" />,
        path: "/users",
    }
]