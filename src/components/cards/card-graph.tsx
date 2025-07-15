import LinearChart from "../charts/linear";

export default function CardGraph() {

  return (
    <div className="round gap-6 px-[14px] py-4 lg:col-span-3">
        <div className="flex flex-col gap-4">
            <div>
                <h2>Document Activity</h2>
                <p className="text-foreground/50">Monthly document submission over time </p>
            </div>
            <div className="w-full h-[235px]">
                <LinearChart />
            </div>
        </div>
    </div>
  )
}
