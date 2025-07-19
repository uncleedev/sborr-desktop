import CardCalendar from "@/components/cards/card-calendar";
import CardGraph from "@/components/cards/card-graph";
import CardReport from "@/components/cards/card-report";
import CardSession from "@/components/cards/card-session";
import { sessions } from "@/lib/sample-data";
import { Calendar, Clock, FileText, Users } from "lucide-react";

export default function DashboardPage() {

  const reportData = [
    {
      label: "Total Documents",
      value: 1234,
      icon: <FileText />,
      labelDescription: "13+ from last month"
    },
    {
      label: "Session This Month",
      value: 1234,
      icon: <Calendar />,
      labelDescription: "3 scheduled a head"
    },
    {
      label: "Active Users",
      value: 1234,
      icon: <Users />,
      labelDescription: "2+ this week"
    },
    {
      label: "Pending Approvals",
      value: 1234,
      icon: <Clock />,
      labelDescription: "2 urget approvals"
    }
  ]

  return (
  <div className="w-full h-full flex flex-col gap-4 p-[1px] overflow-auto scrollbar-hide">

    {/* CARD REPORT */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {reportData.map((report, index) => (
        <CardReport 
          label={report.label}
          value={report.value}
          icon={report.icon}
          labelDescription={report.labelDescription}
          key={index}
        />
      ))}
    </div>

    {/* ACTIVITY & CALENDAR */}
    <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-4">
      <CardGraph />
      <CardCalendar />
    </div>

    {/* LIST OF SESSION */}
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 w-full h-full p-[1px]">
      <div className="flex flex-col gap-4 round px-[14px] py-4 lg:col-span-3">
        <div>
          <h2>Upcoming Session</h2>
          <p className="text-foreground/50">scheduled legislative session</p>
        </div>

        <div className="flex flex-col gap-4">
          {sessions.map((data, index) => (
            <CardSession 
              data={data}
              key={index}
              variant="half"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 round px-[14px] py-4 lg:col-span-2 h-full w-full">
        <div>
          <h2>Today's Session</h2>
          <p className="text-foreground/50">scheduled legislative session</p>
        </div>

        <div className="flex flex-col gap-4">
          {sessions.map((data, index) => (
            <CardSession 
              data={data}
              key={index}
              variant="half"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
)

}
