import { Calendar, MapPin, Users } from "lucide-react";
import { SessionType } from "@/types/data";
import { SessionView, SessionEdit, SessionDelete } from "@/pages/home/sessions/index";

interface CardSessionProps {
  data: SessionType;
  variant?: "full" | "icon" | "half";
}

export default function CardSession({ data, variant = "full" }: CardSessionProps) {
  return (
    <div
      className={`w-full max-h-fit flex flex-col p-4 gap-4 rounded-br-sm rounded-tr-sm shadow-ring shadow-sm border-l-2 ${
        data.status === "scheduled"
          ? "border-[var(--info)]"
          : data.status === "completed"
          ? "border-[var(--success)]"
          : "border-[var(--warning)]"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3>{data.title}</h3>
        <span
          className={`${
            data.status === "scheduled"
              ? "bg-[var(--info)]/10 text-[var(--info)]"
              : data.status === "completed"
              ? "bg-[var(--success)]/10 text-[var(--success)]"
              : "bg-[var(--warning)]/10 text-[var(--warning)]"
          } px-2 rounded-[8px] font-medium`}
        >
          {data.status}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <span className="flex items-center gap-2">
          <span className="text-[20px] text-foreground/50">
            <Calendar />
          </span>
          <h4 className="text-foreground/50">
            <span>{data.date}</span> at <span>{data.time}</span>
          </h4>
        </span>

        <span className="flex items-center gap-2">
          <span className="text-[20px] text-foreground/50">
            <MapPin />
          </span>
          <h4 className="text-foreground/50">{data.venue}</h4>
        </span>

        <span className="flex items-center gap-2">
          <span className="text-[20px] text-foreground/50">
            <Users />
          </span>
          <h4 className="text-foreground/50">{data.attendees}</h4>
        </span>
      </div>

      {variant === "full" && (
        <div>
          <h4>Related Documents:</h4>
          <div className="flex gap-2 flex-wrap">
            {data.relatedDocuments.map((item, index) => (
              <p
                key={index}
                className="flex items-center px-2 bg-foreground/10 rounded-full font-medium text-[14px]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}

      {variant !== "half" && (
        <div className="flex items-center justify-end gap-2">
          <SessionView data={data} option="grid" />
          <SessionEdit data={data} option="grid" />
          <SessionDelete data={data} option="grid" />
        </div>
      )}
    </div>
  );
}
