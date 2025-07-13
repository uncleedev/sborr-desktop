import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function ModeToggle() {

    const {theme, setTheme} = useTheme();

  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="p-2">
            {theme === "dark" ? < Moon /> : theme === "light" ? <Sun /> : <Monitor />}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setTheme("light")} >Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
