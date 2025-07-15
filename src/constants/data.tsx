import { Calendar, FileText, LayoutDashboard, Users } from "lucide-react";

export const navLinks = [
    {
        label: "Dashboard",
        icon: <LayoutDashboard />,
        path: "/",
    },
    {
        label: "Documents",
        icon: <FileText />,
        path: "/documents",
    },
    {
        label: "Sessions",
        icon: <Calendar />,
        path: "/sessions",
    },
    {
        label: "Users",
        icon: <Users />,
        path: "/users",
    }
]