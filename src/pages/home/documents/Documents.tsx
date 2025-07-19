import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";

import ButtonAction from "@/components/buttons/button-action";
import Searchbar from "@/components/searchbar";
import { DocumentAdd, DocumentView, DocumentEdit, DocumentDelete } from "./index";
import SelectFilter from "@/components/select-filter";

import { documents } from "@/lib/sample-data";

const STATUS_OPTIONS = ["all", "approved", "draft", "pending"];
const CATEGORY_OPTIONS = ["all", "memorandum", "resolution", "ordinance"];

export default function DocumentsPage() {
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // FILTER
  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.subject.toLowerCase().includes(search.toLowerCase()) ||
      doc.author.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = selectedStatus === "all" || doc.status.toLowerCase() === selectedStatus;
    const matchesCategory = selectedCategory === "all" || doc.category.toLowerCase() === selectedCategory;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <section className="w-full h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2>Document Management</h2>
        <DocumentAdd />
      </div>

      <div className="w-full h-full flex flex-col gap-4 round px-[14px] py-4">
        <div className="w-full flex items-center justify-between">
          <div>
            <h2>Documents</h2>
            <p className="text-muted-foreground">Manage legislative documents.</p>
          </div>

          {/* FILTERS */}
          <div className="grid lg:grid-cols-4 gap-3">
            <Searchbar onChange={(e) => setSearch(e.target.value)} />

            <SelectFilter
              label="Status"
              value={selectedStatus}
              options={STATUS_OPTIONS}
              onChange={setSelectedStatus}
            />

            <SelectFilter
              label="Category"
              value={selectedCategory}
              options={CATEGORY_OPTIONS}
              onChange={setSelectedCategory}
            />
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
            {filteredDocuments.length ? (
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
