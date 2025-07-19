import ButtonAction from "@/components/buttons/button-action";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { UserProps } from "@/types/data";

export default function UserDelete({data}: UserProps) {
    
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ButtonAction category="delete" variant="ghost"/>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h2>Delete User</h2>
          </DialogTitle>
        </DialogHeader>

        <div>
          <p>Are you sure you want to delete <span className="font-semibold">“{data.name}”</span>?</p>
          <p>This action cannot be undone.</p>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>

          <Button className="bg-[var(--danger)] text-white">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
