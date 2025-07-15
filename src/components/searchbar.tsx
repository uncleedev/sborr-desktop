import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { ComponentPropsWithoutRef } from "react";

interface SearchbarProps extends ComponentPropsWithoutRef<"input"> {}

export default function Searchbar({...props}: SearchbarProps) {
  return (
    <div className="flex items-center pl-2 border rounded-[8px] col-span-2">
        <Search />
        <Input
        className="border-none focus:border-none outline-none focus:outline-none ring-0 focus:ring-0 focus-visible:ring-0 shadow-none"
        placeholder="Search"
        {...props}
        />

    </div>
  )
}
