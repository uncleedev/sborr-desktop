import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import ButtonAction from "@/components/buttons/button-action";
import { SessionProps } from "@/types/data";

export default function SessionEdit({ data, option }: SessionProps) {
  const [title, setTitle] = useState(data.title);
  const [date, setDate] = useState<Date | undefined>(new Date(data.date));
  const [time, setTime] = useState(data.time);
  const [venue, setVenue] = useState(data.venue.toLowerCase().replace(" ", "-"));
  const [chairperson, setChairperson] = useState(data.chairperson);
  const [status, setStatus] = useState<string>(data.status);
  const [attendees, setAttendees] = useState(data.attendees.join(", "));
  const [documents, setDocuments] = useState(data.relatedDocuments.join(", "));
  const [agenda, setAgenda] = useState(data.agenda.map(item => `${item}`).join("\n"));
  const [open, setOpen] = useState(false);

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {option === "table"? (
            <ButtonAction category="edit" variant="ghost" />
          ): (
            <ButtonAction category="edit" variant="outline" hasLabel />
          )}
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <h2>Edit Session</h2>
            </DialogTitle>
            <DialogDescription>Update the session information below.</DialogDescription>
          </DialogHeader>

          <div className="w-full grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
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
                        setDate(date);
                        setOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="w-full grid gap-3">
                <Label>Time</Label>
                <Input
                  type="time"
                  step="1"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                />
              </div>
            </div>

            <div className="w-full grid gap-3">
              <Label>Venue</Label>
              <Select value={venue} onValueChange={setVenue}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="room-a">Room A</SelectItem>
                    <SelectItem value="room-b">Room B</SelectItem>
                    <SelectItem value="room-c">Room C</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-3">
              <Label>Chairperson</Label>
              <Input value={chairperson} onChange={(e) => setChairperson(e.target.value)} />
            </div>

            <div className="grid gap-3">
              <Label>Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="on-going">On-going</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-3">
              <Label>Attendees</Label>
              <Input value={attendees} onChange={(e) => setAttendees(e.target.value)} />
            </div>

            <div className="grid gap-3">
              <Label>Related Documents</Label>
              <Input value={documents} onChange={(e) => setDocuments(e.target.value)} />
            </div>

            <div className="grid gap-3">
              <Label>Agenda Items:</Label>
              <Textarea value={agenda} onChange={(e) => setAgenda(e.target.value)} />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
