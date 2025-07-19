import { useState, useMemo, useEffect } from "react";
import Searchbar from "@/components/searchbar";
import SessionAdd from "./SessionAdd";
import SessionEdit from "./SessionEdit";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LayoutGrid, Table as TableIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import SessionView from "./SessionView";
import ButtonAction from "@/components/buttons/button-action";
import CardSession from "@/components/cards/card-session";
import SessionDelete from "./SessionDelete";
import { sessions } from "@/lib/sample-data";

export default function SessionsPage() {
  

  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [date, setDate] = useState(new Date());
  const [toggle, setToggle] = useState("table");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 12;

  const filteredSessions = useMemo(() => {
    return sessions.filter((session) => {
      const matchesSearch =
        session.title.toLowerCase().includes(search.toLowerCase()) ||
        session.venue.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = selectedStatus === "all" || session.status.toLowerCase() === selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }, [sessions, search, selectedStatus]);

  const filteredCalendarSessions = useMemo(() => {
    return sessions.filter((session) => {
      const sessionDate = new Date(session.date);
      return (
        sessionDate.getFullYear() === date.getFullYear() &&
        sessionDate.getMonth() === date.getMonth() &&
        sessionDate.getDate() === date.getDate()
      );
    });
  }, [sessions, date]);


  const totalPages = Math.ceil(filteredSessions.length / rowsPerPage);

  const paginatedSessions = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredSessions.slice(start, start + rowsPerPage);
  }, [filteredSessions, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedStatus]);

  return (
    <section className="w-full h-screen flex flex-col gap-4 overflow-hidden">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <h2>Session Management</h2>
        <SessionAdd />
      </div>

      {/* Layout */}
      <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-5 gap-4 overflow-hidden p-[2px]">
        {/* Left: Sessions */}
        <div className="w-full h-full flex flex-col lg:col-span-3 round px-[14px] py-4 gap-4 overflow-hidden">
          {/* Controls */}
          <div className="flex items-center justify-between">
            <div>
              <h2>Scheduled Session</h2>
              <p className="text-foreground/50">Upcoming and past legislative documents.</p>
            </div>
            <div className="flex items-center gap-2">
              <Searchbar value={search} onChange={(e) => setSearch(e.target.value)} />
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="on-going">On-Going</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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

          {/* Table View */}
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

          {/* Grid View */}
          {toggle === "grid" && (
            <div className="flex-1 overflow-auto grid gap-4 scrollbar-hide p-[2px]">
              {filteredSessions.map((session, index) => (
                <CardSession key={index} data={session} variant="full" />
              ))}
            </div>
          )}
        </div>

        {/* Right: Calendar */}
        <div className="w-full h-full flex flex-col gap-4 lg:col-span-2 round px-[14px] py-4  overflow-hidden">
          <div>
            <h2>Calendar View</h2>
            <p className="text-foreground/50">Select a date to view session.</p>
          </div>
          <Calendar
            mode="single"
            required
            selected={date}
            onSelect={setDate}
            captionLayout="dropdown"
            className="w-full rounded-md border shadow-sm"
          />

          <div className="flex-1 overflow-auto grid  gap-4 scrollbar-hide p-[2px]">
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
