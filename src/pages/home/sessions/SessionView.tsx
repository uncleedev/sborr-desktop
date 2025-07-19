import ButtonAction from "@/components/buttons/button-action";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { SessionProps } from "@/types/data";

export default function SessionView({data, option}: SessionProps) {
  return (
    <Dialog>
        <DialogTrigger asChild>
            {option === "table" ? (

                <ButtonAction variant="ghost" category="view"  />
            ): (
                <ButtonAction variant="outline" category="view" hasLabel />
            )}
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    <h2>Session Details</h2>
                </DialogTitle>
                <DialogDescription className="text-foreground/50">
                    Preview the schedule of the session.
                </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4">
                <div className=" w-full flex justify-between">
                    <h2>{data.title}</h2>
                    <span>{data.status}</span>
                </div>

                <div className="grid grid-cols-2">
                    <div className="grid gap-[4px]">
                        <Label className="text-foreground/50">Date</Label>
                        <h4>{data.date}</h4>
                    </div>

                    <div className="grid gap-[4px]">
                        <Label className="text-foreground/50">Time</Label>
                        <h4>{data.time}</h4>
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    <div className="grid gap-[4px]">
                        <Label className="text-foreground/50">Venue</Label>
                        <h4>{data.venue}</h4>
                    </div>

                    <div className="grid gap-[4px]">
                        <Label className="text-foreground/50">Chairperson</Label>
                        <h4>{data.chairperson}</h4>
                    </div>
                </div>

                <div className="grid gap-[6px]">
                    <Label className="text-foreground/50">Attendess</Label>

                    <div className="flex gap-2">
                        {data.attendees.map((attendee, index) => (
                            <h4 key={index} className="px-3 py-[4px] bg-foreground/10 font-medium rounded-full">{attendee}</h4>
                        ))}
                    </div>
                </div>

                <div className="grid gap-[6px]">
                    <Label className="text-foreground/50">Related Documents:</Label>

                    <div className="flex gap-2">
                        {data.relatedDocuments.map((document, index) => (
                            <h4 key={index} className="px-3 py-[4px] bg-foreground/10 font-medium rounded-full">{document}</h4>
                        ))}
                    </div>
                </div>
                
                <div className="grid gap-[4px]">
                    <Label className="text-foreground/50">Agenda</Label>

                    <div className="grid gap-2">
                        {data.agenda.map((item, index) => (
                            <h4 key={index}>• {item}</h4>
                        ))}
                    </div>
                </div>
            </div>

            <DialogFooter>
                <DialogClose asChild>
                    <Button variant={"outline"}>
                        Close
                    </Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
