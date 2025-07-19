import ButtonAction from "@/components/buttons/button-action";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DocumentProps } from "@/types/data";

export default function DocumentView({data}: DocumentProps) {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <ButtonAction 
                category="view"
                variant="ghost"
                type="button"
            />
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle><h2>Document Details</h2>
                </DialogTitle>
                <DialogDescription>Preview the legislative document.</DialogDescription>
            </DialogHeader>
            
            {/* FORM */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h2>{data.subject}</h2>
                    <span>{data.status}</span>
                </div>

                <div className="w-full grid grid-cols-2">
                    <div className="grid gap-[4px] col-span-1">
                        <h4 className="text-foreground/50">Author</h4>
                        <h4>{data.author}</h4>
                    </div>

                    <div className="grid gap-[4px] col-span-1">
                        <h4 className="text-foreground/50">Category</h4>
                        <h4>{data.category}</h4>
                    </div>
                </div>

                <div className="w-full grid grid-cols-2">
                    <div className="grid gap-[4px] col-span-1">
                        <h4 className="text-foreground/50">Date Uploaded</h4>
                        <h4>{data.dateUploaded}</h4>
                    </div>

                    <div className="grid gap-[4px] col-span-1">
                        <h4 className="text-foreground/50">Aprroved Date</h4>
                        <h4>{data.dateApproved}</h4>
                    </div>
                </div>

                <div className="w-full grid grid-cols-2">
                    <div className="grid gap-[4px] col-span-1">
                        <h4 className="text-foreground/50">Series</h4>
                        <h4>{data.series}</h4>
                    </div>

                    <div className="grid gap-[4px] col-span-1">
                        <h4 className="text-foreground/50">Referrence No.</h4>
                        <h4>{data.referrenceNo}</h4>
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
