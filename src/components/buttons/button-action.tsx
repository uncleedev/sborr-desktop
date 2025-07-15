import { Plus, Printer, SquarePen, Trash, Eye } from "lucide-react";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button"; // from shadcn

interface ButtonActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  category: "add" | "edit" | "delete" | "view" | "print";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
  hasLabel?: boolean;
}

export default function ButtonAction({
  category,
  hasLabel = false,
  variant = "default",
  className,
  ...props
}: ButtonActionProps) {
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
      default:
        return "";
    }
  };

  return (
    <button
      {...props}
      className={cn(
        buttonVariants({ variant }),
        "flex items-center gap-2",
        className
      )}
    >
        <span className="shrink-0">
            {renderIcon()}
        </span>
        {hasLabel && <span className="text-sm font-medium">{getLabel()}</span>}
    </button>
  );
}
