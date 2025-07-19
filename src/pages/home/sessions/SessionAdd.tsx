import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function SessionAdd() {

    const [date, setDate] = useState <Date | undefined>(undefined)
    
    const [open, setOpen] = useState(false)

    const [selectedVenue, setSelectedVenue] = useState("room-a")
  return (
    <Dialog>
        <form>
            <DialogTrigger asChild>
                <Button type="button" className="cursor-pointer">
                    <Plus />
                    <span className="font-semibold">Schedule Session</span>
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <h2>Schedule New Session</h2>
                    </DialogTitle>
                    <DialogDescription>
                        Create a new legislative session.
                    </DialogDescription>
                </DialogHeader>

                <div className="w-full grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" name="title" placeholder="Enter session title"/>
                    </div>

                    <div className="w-full flex items-center justify-between gap-4">
                        <div className="w-full grid gap-3">
                            <Label>Date</Label>
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger className="border rounded-md">
                                    <Button variant={"ghost"} className="w-full flex items-center justify-between text-foreground/50">
                                        {date ? date.toLocaleDateString() : "Select date"}
                                        <CalendarIcon className="w-4 h-4" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <Calendar 
                                        mode="single"
                                        selected={date}
                                        captionLayout="dropdown"
                                        onSelect={(date) => {
                                            setDate(date)
                                            setOpen(false)

                                        }}
                                    
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className="w-full grid gap-3">
                            <Label>Time</Label>
                            <Input
                                type="time"
                                id="time-picker"
                                step="1"
                                defaultValue="10:30:00"
                                className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                            />
                        </div>
                    </div>
                    
                    <div className="w-full grid gap-3">
                        <Label>Venue</Label>
                        <Select value={selectedVenue || "room-a"} onValueChange={setSelectedVenue}>
                            <SelectTrigger className="w-full">
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="room-a">
                                        Room A
                                    </SelectItem>
                                    <SelectItem value="room-b">
                                        Room B
                                    </SelectItem>
                                    <SelectItem value="room-c">
                                        Room C
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid gap-3">
                        <Label>Chairperson</Label>
                        <Input placeholder="Enter chairperson name"/>
                    </div>

                    <div className="grid gap-3">
                        <Label>Status</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Status"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="scheduled" >Scheduled</SelectItem>
                                    <SelectItem value="on-going" >On-going</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid gap-3">
                        <Label>Attendees</Label>
                        <Input placeholder="Enter attendees (comma separated)" />
                    </div>

                    <div className="grid gap-3">
                        <Label>Related Documents</Label>
                        <Input placeholder="Enter related documents (comma separated)"/>
                    </div>

                    <div className="grid gap-3">
                        <Label>Agenda Items:</Label>
                        <Textarea  placeholder="Enter agenda items (one per line)"/>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant={"outline"}>Close</Button>
                    </DialogClose>

                    <Button>
                        Add Session
                    </Button>
                </DialogFooter>
            </DialogContent>
        </form>
    </Dialog>
  ) 
}
