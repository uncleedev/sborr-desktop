import ButtonAction from "@/components/buttons/button-action";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { UserProps } from "@/types/data";

export default function UserView({ data }: UserProps) {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <ButtonAction
          variant="ghost" 
          category="view"
        />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h2>User Details</h2>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Preview the user information.
          </DialogDescription>
        </DialogHeader>

        <div className="w-full h-full flex flex-col items-center gap-4">
          <div className="w-[100px] h-[100px] bg-red-500 rounded-full" />
          <div className="w-full grid grid-cols-2">
            <div>
              <h4>Name:</h4>
              <h4>Username:</h4>
              <h4>Email:</h4>
              <h4>Phone:</h4>
              <h4>Role:</h4>
              <h4>Department:</h4>
            </div>
            <div>
              <h4 className="text-muted-foreground">{data.name}</h4>
              <h4 className="text-muted-foreground">{data.username}</h4>
              <h4 className="text-muted-foreground">{data.email}</h4>
              <h4 className="text-muted-foreground">{data.phone}</h4>
              <h4 className="text-muted-foreground">{data.role}</h4>
              <h4 className="text-muted-foreground">{data.department}</h4>
            </div>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
