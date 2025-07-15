import ButtonAction from "@/components/buttons/button-action";
import Searchbar from "@/components/searchbar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, } from "lucide-react";

export default function DocumentsPage() {
  return (
    <section className="w-full h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2>Document Management</h2>
        <Button className="cursor-pointer">
          <Plus  />
          <span className="font-semibold">
            Add Document
          </span>
        </Button>
      </div>

      <div className="w-full h-full flex flex-col gap-4 px-[14px] py-4 round">
        <div className="w-full flex items-center justify-between">
          <div>
            <h2>Documents</h2>
            <p className="text-foreground/50">manage legislative documents.</p>
          </div>

          <div className=" grid lg:grid-cols-4 gap-3">
            <Searchbar />

            {/* STATUS */}
            <div className="col-span-1">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Approved</SelectItem>
                    <SelectItem value="banana">Draft</SelectItem>
                    <SelectItem value="blueberry">Pending</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* CATEGORY */}
            <div className="col-span-1">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Memorandum</SelectItem>
                    <SelectItem value="banana">Resolution</SelectItem>
                    <SelectItem value="blueberry">Ordinance</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Series</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Attachement</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Baranagy Budget Mascap</TableCell>
                <TableCell>Approp</TableCell>
                <TableCell>Resolution</TableCell>
                <TableCell>2014</TableCell>
                <TableCell><span>approved</span></TableCell>
                <TableCell>No files</TableCell>
                <TableCell>
                  <div className="flex">
                    <ButtonAction 
                      category="view"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="edit"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="print"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="delete"
                      variant="ghost"
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Baranagy Budget Mascap</TableCell>
                <TableCell>Approp</TableCell>
                <TableCell>Resolution</TableCell>
                <TableCell>2014</TableCell>
                <TableCell><span>approved</span></TableCell>
                <TableCell>No files</TableCell>
                <TableCell>
                  <div className="flex">
                    <ButtonAction 
                      category="view"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="edit"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="print"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="delete"
                      variant="ghost"
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Baranagy Budget Mascap</TableCell>
                <TableCell>Approp</TableCell>
                <TableCell>Resolution</TableCell>
                <TableCell>2014</TableCell>
                <TableCell><span>approved</span></TableCell>
                <TableCell>No files</TableCell>
                <TableCell>
                  <div className="flex">
                    <ButtonAction 
                      category="view"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="edit"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="print"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="delete"
                      variant="ghost"
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Baranagy Budget Mascap</TableCell>
                <TableCell>Approp</TableCell>
                <TableCell>Resolution</TableCell>
                <TableCell>2014</TableCell>
                <TableCell><span>approved</span></TableCell>
                <TableCell>No files</TableCell>
                <TableCell>
                  <div className="flex">
                    <ButtonAction 
                      category="view"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="edit"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="print"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="delete"
                      variant="ghost"
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Baranagy Budget Mascap</TableCell>
                <TableCell>Approp</TableCell>
                <TableCell>Resolution</TableCell>
                <TableCell>2014</TableCell>
                <TableCell><span>approved</span></TableCell>
                <TableCell>No files</TableCell>
                <TableCell>
                  <div className="flex">
                    <ButtonAction 
                      category="view"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="edit"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="print"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="delete"
                      variant="ghost"
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Baranagy Budget Mascap</TableCell>
                <TableCell>Approp</TableCell>
                <TableCell>Resolution</TableCell>
                <TableCell>2014</TableCell>
                <TableCell><span>approved</span></TableCell>
                <TableCell>No files</TableCell>
                <TableCell>
                  <div className="flex">
                    <ButtonAction 
                      category="view"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="edit"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="print"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="delete"
                      variant="ghost"
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Baranagy Budget Mascap</TableCell>
                <TableCell>Approp</TableCell>
                <TableCell>Resolution</TableCell>
                <TableCell>2014</TableCell>
                <TableCell><span>approved</span></TableCell>
                <TableCell>No files</TableCell>
                <TableCell>
                  <div className="flex">
                    <ButtonAction 
                      category="view"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="edit"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="print"
                      variant="ghost"
                    />
                    <ButtonAction 
                      category="delete"
                      variant="ghost"
                    />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
