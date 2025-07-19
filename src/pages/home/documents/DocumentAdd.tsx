import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, Plus, Upload } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export default function DocumentAdd() {

    const [date, setDate] = useState <Date | undefined>(undefined)

    const [open, setOpen] = useState(false)

    const [fileName, setFileName] = useState("Add File Attachment")

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
    
        if (file) {
            setFileName(file.name)
        }


    }

  return (
    <Dialog>
        <form>
            <DialogTrigger asChild>
                <Button type="button" className="cursor-pointer">
                    <Plus  />
                    <span className="font-semibold">
                        Add Document
                    </span>
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        <h2>Add New Document</h2>
                    </DialogTitle>
                    <DialogDescription>
                        create new legislative document.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" name="subject" placeholder="Document Subject" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="author">Author</Label>
                        <Input id="author" name="author" placeholder="Author Name" />
                    </div>
                    <div className=" w-full flex items-center justify-between gap-4">
                        <div className="w-full grid gap-3">
                            <Label htmlFor="category">Category</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Category"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="ordinance" >Ordinance</SelectItem>
                                        <SelectItem value="resolution" >Resolution</SelectItem>
                                        <SelectItem value="memorandum">Memorandum</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="w-full grid gap-3">
                            <Label htmlFor="status">Status</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Status"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="approved" >Approved</SelectItem>
                                        <SelectItem value="pending" >Pending</SelectItem>
                                        <SelectItem value="draft">Draft</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="dateApproved">Date Approved</Label>
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger className="border rounded-md">
                                <Button variant={"ghost"} className="w-full flex items-center justify-between text-foreground/50">
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
                                        setDate(date)
                                        setOpen(false)

                                    }}
                                
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="remarks">Remarks</Label>
                        <Textarea placeholder="Document Remarks"/>
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
                            <div className="flex items-center gap-2 ">
                                <Upload className="w-4 h-4 text-foreground/50"/>
                                <span className="text-foreground/50">{fileName}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save Document</Button>
                </DialogFooter>
            </DialogContent>
        </form>
    </Dialog>
  )
}
