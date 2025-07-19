import { useState, useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  Calendar,
} from "@/components/ui";

import { LayoutGrid, Table as TableIcon } from "lucide-react";

import Searchbar from "@/components/searchbar";
import ButtonAction from "@/components/buttons/button-action";
import CardSession from "@/components/cards/card-session";
import SelectFilter from "@/components/select-filter";
import { SessionAdd, SessionEdit, SessionView, SessionDelete } from "./index";

import { sessions } from "@/lib/sample-data";

const STATUS_OPTIONS = ["all", "scheduled", "completed", "on-going"];
const ROWS_PER_PAGE = 12;

export default function SessionsPage() {
  // STATE
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [date, setDate] = useState(new Date());
  const [toggle, setToggle] = useState("table");
  const [currentPage, setCurrentPage] = useState(1);

  // FILTERED DATA TABLE
  const filteredSessions = sessions.filter((session) => {
    const matchesSearch =
      session.title.toLowerCase().includes(search.toLowerCase()) ||
      session.venue.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      selectedStatus === "all" || session.status.toLowerCase() === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  // FILTERED DATA GRID
  const filteredCalendarSessions = sessions.filter((session) => {
    const sessionDate = new Date(session.date);
    return (
      sessionDate.getFullYear() === date.getFullYear() &&
      sessionDate.getMonth() === date.getMonth() &&
      sessionDate.getDate() === date.getDate()
    );
  });

  // PAGINATION
  const totalPages = Math.ceil(filteredSessions.length / ROWS_PER_PAGE);
  const paginatedSessions = filteredSessions.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedStatus]);

  return (
    <section className="w-full h-screen flex flex-col gap-4 overflow-hidden">
      <div className="flex items-center justify-between">
        <h2>Session Management</h2>
        <SessionAdd />
      </div>

      <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-5 gap-4 overflow-hidden p-[2px]">
        {/* LEFT PANEL */}
        <div className="w-full h-full flex flex-col lg:col-span-3 round px-[14px] py-4 gap-4 overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <h2>Scheduled Session</h2>
              <p className="text-foreground/50">Upcoming and past legislative sessions.</p>
            </div>

            <div className="flex items-center gap-2">
              <Searchbar value={search} onChange={(e) => setSearch(e.target.value)} />

              <SelectFilter
                label="Status"
                value={selectedStatus}
                onChange={setSelectedStatus}
                options={STATUS_OPTIONS}
              />

              <Select value={toggle} onValueChange={setToggle}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="table">
                      <TableIcon className="mr-2" /> Table
                    </SelectItem>
                    <SelectItem value="grid">
                      <LayoutGrid className="mr-2" /> Grid
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* TABLE VIEW */}
          {toggle === "table" && (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Venue</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedSessions.map((session, index) => (
                    <TableRow key={index}>
                      <TableCell>{session.title}</TableCell>
                      <TableCell>{session.date}</TableCell>
                      <TableCell>{session.time}</TableCell>
                      <TableCell>{session.venue}</TableCell>
                      <TableCell>{session.status}</TableCell>
                      <TableCell className="flex items-center gap-1">
                        <SessionView data={session} option="table" />
                        <SessionEdit data={session} option="table" />
                        <ButtonAction category="print" variant="ghost" />
                        <SessionDelete data={session} option="table" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <Pagination className="mt-4">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <span className="text-sm text-muted-foreground px-2">
                      Page {currentPage} of {totalPages}
                    </span>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </>
          )}

          {/* GRID VIEW */}
          {toggle === "grid" && (
            <div className="overflow-auto grid gap-4 scrollbar-hide p-[2px]">
              {filteredSessions.map((session, index) => (
                <CardSession key={index} data={session} variant="full" />
              ))}
            </div>
          )}
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full h-full flex flex-col gap-4 lg:col-span-2 round px-[14px] py-4 overflow-hidden">
          <div>
            <h2>Calendar View</h2>
            <p className="text-foreground/50">Select a date to view sessions.</p>
          </div>

          <Calendar
            mode="single"
            required
            selected={date}
            onSelect={setDate}
            captionLayout="dropdown"
            className="w-full rounded-md border shadow-sm"
          />

          <div className="flex-1 overflow-auto grid gap-4 scrollbar-hide p-[2px]">
            {filteredCalendarSessions.length > 0 ? (
              filteredCalendarSessions.map((session, index) => (
                <CardSession key={index} data={session} variant="half" />
              ))
            ) : (
              <p className="text-muted-foreground text-sm">No sessions scheduled on this day.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
