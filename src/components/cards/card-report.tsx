import { ReactNode } from "react";

interface CardReportProps {
    label: string;
    value: string | number;
    icon: ReactNode;
    labelDescription?: string;
}

export default function CardReport({ label, value, icon, labelDescription }: CardReportProps) {


  return (
    <div className="w-full flex justify-between px-[14px] py-4 round">
        <div>
            <h3>{label}</h3>
            <h2>{value}</h2>
            <p className="text-[12px] text-foreground/50 font-medium">{labelDescription}</p>
        </div>

        <span className="text-foreground/50">
            {icon}
        </span>
    </div>
  )
}
