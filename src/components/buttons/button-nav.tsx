import { useNavigate, useLocation } from "react-router-dom";

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  iconOnly?: boolean;
}

export default function NavButton({ icon, label, path, iconOnly }: NavButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === path;

  return ( 
    <button
      onClick={() => navigate(path)}
      className={`w-full flex gap-2 items-center ${iconOnly ? "justify-center" : ""} p-2 rounded-[8px] hover:bg-primary/90 transition-colors shadow-md group hover:cursor-pointer ${
        isActive ? "bg-primary" : ""
      }`}
      title={label}
    >
      <span
        className={`${
          isActive ? "text-accent" : "text-foreground"
        } group-hover:text-accent`}
      >
        {icon}
      </span>
      <span
        className={`${
          isActive ? "text-accent" : "text-foreground"
        } ${iconOnly ? "hidden" : "block"} font-semibold text-[14px] group-hover:text-accent`}
      >
        {label}
      </span>
      
    </button>
  );
}
