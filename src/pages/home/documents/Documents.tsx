import { useState, useMemo } from "react";
import ButtonAction from "@/components/buttons/button-action";
import Searchbar from "@/components/searchbar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DocumentAdd from "./DocumentAdd";
import DocumentView from "./DocumentView";
import DocumentEdit from "./DocumentEdit";
import DocumentDelete from "./DocumentDelete";
import { documents } from "@/lib/sample-data";

export default function DocumentsPage() {
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      const matchesSearch =
        doc.subject.toLowerCase().includes(search.toLowerCase()) ||
        doc.author.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = selectedStatus === "all" || doc.status.toLowerCase() === selectedStatus;

      const matchesCategory = selectedCategory === "all" || doc.category.toLowerCase() === selectedCategory;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [documents, search, selectedStatus, selectedCategory]);

  return (
    <section className="w-full h-full flex flex-col gap-4">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2>Document Management</h2>
        <DocumentAdd />
      </div>

      <div className="w-full h-full flex flex-col gap-4 px-[14px] py-4 round">
        <div className="w-full flex items-center justify-between">
          <div>
            <h2>Documents</h2>
            <p className="text-muted-foreground">Manage legislative documents.</p>
          </div>

          {/* FILTERS */}
          <div className="grid lg:grid-cols-4 gap-3">
            {/* SEARCHBAR */}
            <Searchbar onChange={(e) => setSearch(e.target.value)} />

            {/* STATUS */}
            <div className="col-span-1">
              <Select value={selectedStatus || "all"} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* CATEGORY */}
            <div className="col-span-1">
              <Select value={selectedCategory || "all"} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All Category</SelectItem>
                    <SelectItem value="memorandum">Memorandum</SelectItem>
                    <SelectItem value="resolution">Resolution</SelectItem>
                    <SelectItem value="ordinance">Ordinance</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

            </div>
          </div>
        </div>

        {/* TABLE */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Series</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Attachment</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((document, index) => (
                <TableRow key={index}>
                  <TableCell>{document.subject}</TableCell>
                  <TableCell>{document.author}</TableCell>
                  <TableCell>{document.category}</TableCell>
                  <TableCell>{document.series}</TableCell>
                  <TableCell>
                    <span className="px-2 py-[4px] bg-black/10 text-black font-medium rounded-full">
                      {document.status}
                    </span>
                  </TableCell>
                  <TableCell>{document.attachement}</TableCell>
                  <TableCell className="flex">
                    <DocumentView data={document} />
                    <DocumentEdit data={document} />
                    <ButtonAction category="print" variant="ghost" />
                    <DocumentDelete data={document} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground">
                  No documents found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
