import ButtonAction from "@/components/buttons/button-action";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { UserProps } from "@/types/data";

export default function UserPermission({ data }: UserProps) {
  return (
    <Dialog>
        <DialogTrigger>
            <ButtonAction 
                category="permission"
                variant="ghost"
            />
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    <h2>User Permissions</h2>
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">Manage permission for {data.name} </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h3>Create Documents</h3>
                        <p className="text-muted-foreground">Allow user to create new documents</p>
                    </div>

                    <Switch />
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h3>Edit Documents</h3>
                        <p className="text-muted-foreground">Allow user to edit existing documents</p>
                    </div>

                    <Switch />
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h3>Delete Documents</h3>
                        <p className="text-muted-foreground">Allow user to delete documents</p>
                    </div>

                    <Switch />
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h3>Manage Sessions</h3>
                        <p className="text-muted-foreground">Allow user to create and manage sessions</p>
                    </div>

                    <Switch />
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h3>Manage Users</h3>
                        <p className="text-muted-foreground">Allow user to create and manage users</p>
                    </div>

                    <Switch />
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h3>View Reports</h3>
                        <p className="text-muted-foreground">Allow user to view system reports</p>
                    </div>

                    <Switch />
                </div>
            </div>

            <DialogFooter>
                <DialogClose asChild>
                    <Button variant={"outline"}>Close</Button>
                </DialogClose>
                <Button>
                    Update Permission
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
