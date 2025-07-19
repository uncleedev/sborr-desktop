import * as React from "react";
import { Plus, Printer, SquarePen, Trash, Eye, ShieldUser } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface ButtonActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  category: "add" | "edit" | "delete" | "view" | "print" | "permission";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
  hasLabel?: boolean;
}

const ButtonAction = React.forwardRef<HTMLButtonElement, ButtonActionProps>(
  ({ category, hasLabel = false, variant = "default", className, ...props }, ref) => {
    const renderIcon = () => {
      switch (category) {
        case "add":
          return <Plus className="w-5 h-5" />;
        case "edit":
          return <SquarePen className="w-5 h-5" />;
        case "delete":
          return <Trash className="w-5 h-5 text-[var(--danger)]" />;
        case "view":
          return <Eye className="w-5 h-5" />;
        case "print":
          return <Printer className="w-5 h-5" />;
        case "permission":
          return <ShieldUser className="w-5 h-5" />
        default:
          return null;
      }
    };

    const getLabel = () => {
      switch (category) {
        case "add":
          return "Add";
        case "edit":
          return "Edit";
        case "delete":
          return "Delete";
        case "view":
          return "View Details";
        case "print":
          return "Print Reports";
        case "permission":
          return "Permission"
        default:
          return "";
      }
    };

    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          buttonVariants({ variant }),
          "flex items-center gap-2 cursor-pointer",
          className
        )}
      >
        <span className="shrink-0">{renderIcon()}</span>
        {hasLabel && <span className="text-sm font-medium">{getLabel()}</span>}
      </button>
    );
  }
);

ButtonAction.displayName = "ButtonAction";

export default ButtonAction;
