import { LogOut, Settings, User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

export default function CardProfile() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <div className="flex items-center gap-4 border-l-2 border-gray-300 px-3 cursor-pointer">
                <div className="w-[38px] h-[38px] bg-gray-200 rounded-full" />
                <div>
                    <h3>Uncledev</h3>
                    <h4 className="text-[12px] text-foreground/50">Administrator</h4>
                </div>
            </div>  
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel
                className="flex flex-col items-start gap-1"
            >
                <p className="font-semibold">Uncledev Lee</p>
                <p className="text-[12px] text-foreground/50">uncledev@montalban.gov.ph</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="font-medium">
                <User className="text-foreground" />
                Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Settings className="text-foreground" />
                Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500 font-medium">
                <LogOut className="text-red-500" />
                Logout
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
