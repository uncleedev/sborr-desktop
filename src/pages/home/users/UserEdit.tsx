import ButtonAction from "@/components/buttons/button-action";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserProps } from "@/types/data";

export default function UserEdit({ data }: UserProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ButtonAction category="edit" variant="ghost" />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h2>Edit User</h2>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">Update user information</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label>Full Name</Label>
            <Input placeholder="Enter the fullname" defaultValue={data.name} />
          </div>

          <div className="grid gap-3">
            <Label>Username</Label>
            <Input placeholder="Enter the username" defaultValue={data.username} />
          </div>

          <div className="grid gap-3">
            <Label>Email Address</Label>
            <Input placeholder="Enter the email" defaultValue={data.email} />
          </div>

          <div className="w-full flex items-center gap-4">
            <div className="w-full grid gap-3">
              <Label>Role</Label>
              <Select defaultValue={data.role}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="select role"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="administration">Administration</SelectItem>
                    <SelectItem value="staff">Staffs</SelectItem>
                    <SelectItem value="councilor">Councilors</SelectItem>
                    <SelectItem value="noRole">No Roles</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full grid gap-3">
              <Label>Phone</Label>
              <Input placeholder="0912345678" className="w-full" defaultValue={data.phone} />
            </div>
          </div>

          <div className="grid gap-3">
            <Label>Department</Label>
            <Input placeholder="Enter the department" defaultValue={data.department} />
          </div>

          <div className="grid gap-3">
            <Label>Temporary Password</Label>
            <Input type="password" placeholder="Enter the department" defaultValue={data.tmpPassword} />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild >
            <Button variant={"outline"}>
              Close
            </Button>
          </DialogClose>

          <Button>
            Update User
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
