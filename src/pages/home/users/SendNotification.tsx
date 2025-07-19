import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { users } from "@/lib/sample-data";
import { Bell } from "lucide-react";
import { useEffect, useState } from "react";

export default function SendNotification() {
  const [openCustom, setOpenCustom] = useState(false);
  const [recipient, setRecipients] = useState("");

  useEffect(() => {
    setOpenCustom(recipient === "custom");
  }, [recipient]);

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">
          <Bell className="w-4 h-4" />
          <span>Send Notification</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h2>Send Notification</h2>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Send notification to selected users.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-[6px]">
            <Label>Recipients</Label>
            <Select value={recipient} onValueChange={setRecipients}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select recipients" />
              </SelectTrigger>

              <SelectContent>
                {users.map((user) => (
                  <SelectItem key={user.name} value={user.name}>
                    {user.name}
                  </SelectItem>
                ))}
                <SelectItem value="custom">Custom Recipients</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {openCustom && (
            <div className="grid gap-[6px]">
              <Label>Enter Recipients</Label>
              <Textarea placeholder={`Enter recipient names or emails, separated by commas\nExample: Juan Dela Cruz, juan@gmail.com`} />
            </div>
          )}

          <div className="grid gap-[6px]">
            <Label>Subject</Label>
            <Input placeholder="Notification subject" />
          </div>

          <div className="grid gap-[6px]">
            <Label>Message</Label>
            <Textarea placeholder="Notification Message" />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>

          <Button>Send Notification</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
