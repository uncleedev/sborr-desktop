"use client"

import { useState } from "react";
import { Calendar } from "../ui/calendar";

export default function CardCalendar() {

    const [date, setDate] = useState(new Date())

  return (
    <div className="w-full round lg:col-span-2 px-[14px] py-4">
        <div className="w-full flex flex-col gap-4">
            <div>
                <h2>Session Calendar</h2>
                <p className="text-foreground/50">Upcoming session & event.</p>
            </div>

            <div className="w-full flex items-center justify-center ">    
                <Calendar 
                    mode="single"
                    required={true}
                    selected={date}
                    onSelect={setDate}
                    captionLayout="dropdown"
                    className="w-full rounded-md border shadow-sm"
                />
            </div>
        </div>
    </div>
  )
}
