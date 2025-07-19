import { useState } from "react";
import { Calendar as CalendarIcon, Upload } from "lucide-react";
import ButtonAction from "@/components/buttons/button-action";
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { DocumentProps } from "@/types/data";

export default function DocumentEdit({ data }: DocumentProps) {
  const [date, setDate] = useState<Date | undefined>(new Date(data.dateApproved));
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState(data.attachement || "Add File Attachment");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <ButtonAction category="edit" variant="ghost" type="button" />
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              <h2>Edit Document</h2>
            </DialogTitle>
            <DialogDescription>Update the document information below.</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" placeholder="Document Subject" defaultValue={data.subject} />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="author">Author</Label>
              <Input id="author" name="author" placeholder="Author Name" defaultValue={data.author} />
            </div>

            <div className="w-full flex items-center justify-between gap-4">
              <div className="w-full grid gap-3">
                <Label htmlFor="category">Category</Label>
                <Select defaultValue={data.category}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Ordinance">Ordinance</SelectItem>
                      <SelectItem value="Resolution">Resolution</SelectItem>
                      <SelectItem value="Memorandum">Memorandum</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full grid gap-3">
                <Label htmlFor="status">Status</Label>
                <Select defaultValue={data.status}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Approved">Approved</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Draft">Draft</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="dateApproved">Date Approved</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="w-full flex items-center justify-between text-foreground/50 border rounded-md">
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

            <div className="grid gap-3">
              <Label htmlFor="remarks">Remarks</Label>
              <Textarea id="remarks" placeholder="Document Remarks" defaultValue={data.remarks || ""} />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="file">File Attachment</Label>
              <div className="relative inline-flex items-center justify-center border p-2 rounded-md">
                <Input
                  id="file"
                  type="file"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="flex items-center gap-2">
                  <Upload className="w-4 h-4 text-foreground/50" />
                  <span className="text-foreground/50 truncate max-w-[200px]">{fileName}</span>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Update Document</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
