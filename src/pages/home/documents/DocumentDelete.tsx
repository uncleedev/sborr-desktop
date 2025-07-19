import ButtonAction from "@/components/buttons/button-action";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { DocumentProps } from "@/types/data";

export default function DocumentDelete({data}: DocumentProps) {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <ButtonAction 
                category="delete"
                variant="ghost"
                type="button"
            />
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <h2>Delete Document</h2>
            </DialogHeader>
            <div className="w-full">
                <p className="text-foreground/50">
                    Are you sure you want to delete <span className="text-foreground">"{data.subject}"</span> with reference number <span className="text-foreground">"{data.referrenceNo}"</span> ?
                </p>

                <p className="text-foreground/50">This action cannot be undone.</p>
            </div>
            <DialogFooter>
                <DialogClose asChild>
                    <Button variant={"outline"} >Close</Button>
                </DialogClose>
                <Button className="bg-[var(--danger)] hover:bg-[var(--danger)]/70 dark:text-white">
                    Delete
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
