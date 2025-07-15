import { Plus, Printer, SquarePen, Trash, View } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface ButtonActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "add"| "edit" | "delete" | "view" | "print";
    hasLabel?: string
}

export default function ButtonAction({variant, hasLabel, ...props}: ButtonActionProps) {

    const renderIcon = () => {
        switch (variant) {
            case "add":
                return <Plus />
            
            case "edit":
                return <SquarePen />
            
            case "delete": 
                return <Trash />
            
            case "view":
                return <View />
            
            case "print":
                return <Printer />

            default:
                break;
        }
    }

  return (
    <button 
        {...props}
        className={`flex items-center gap-2 p-2 round cursor-pointer ${variant === "delete" ? "bg-red-500 text-white" : ""}`}
    >
        {renderIcon()}
        
        {hasLabel != "icon" && (
            <span className="font-semibold text-[14px] capitalize">{`${variant === "add" ? "Add" : variant === "edit" ? "Edit" : variant === "delete" ? "Delete" : variant === "view" ? "View Details" : "Print Reports"}`}</span>
        )}
    </button> 
  )
} 
