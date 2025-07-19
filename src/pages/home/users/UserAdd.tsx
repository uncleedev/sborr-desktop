import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";

export default function UserAdd() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer" type="button">
          <Plus className="w-4 h-4" />
          <span>Add User</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h2>Add New User</h2>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">Create a new user account</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label>Full Name</Label>
            <Input placeholder="Enter the fullname" />
          </div>

          <div className="grid gap-3">
            <Label>Email Address</Label>
            <Input placeholder="Enter the email" />
          </div>

          <div className="w-full flex items-center gap-4">
            <div className="w-full grid gap-3">
              <Label>Role</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="select role"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="administration">Administration</SelectItem>
                    <SelectItem value="staffs">Staffs</SelectItem>
                    <SelectItem value="councilor">Councilors</SelectItem>
                    <SelectItem value="noRoles">No Roles</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full grid gap-3">
              <Label>Phone</Label>
              <Input placeholder="0912345678" className="w-full" />
            </div>
          </div>

          <div className="grid gap-3">
            <Label>Department</Label>
            <Input placeholder="Enter the department" />
          </div>

          <div className="grid gap-3">
            <Label>Temporary Password</Label>
            <Input type="password" placeholder="Enter the department" />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild >
            <Button variant={"outline"}>
              Close
            </Button>
          </DialogClose>

          <Button>
            Create User
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
