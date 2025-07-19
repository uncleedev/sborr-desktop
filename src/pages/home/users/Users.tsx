import Searchbar from "@/components/searchbar";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useMemo, useState } from "react";
import UserView from "./UserView";
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";
import UserPermission from "./UserPermission";
import UserDelete from "./UserDelete";
import SendNotification from "./SendNotification";
import { users } from "@/lib/sample-data";

export default function UsersPage() {

  const [search, setSearch] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedRole, setSelectedRole] = useState("all")

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch = 
        user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        user.email.toLocaleLowerCase().includes(search.toLocaleLowerCase())

      const matchesStatus = selectedRole === "all" || user.role.toLocaleLowerCase() === selectedRole.toLocaleLowerCase()
      return matchesSearch && matchesStatus
    })
  }, [search, selectedRole])

  return (
    <section className="w-full h-full flex flex-col gap-4">
      <div className="flex  justify-between">
        <h2>User Management</h2>
        <div className="flex gap-3">
          <SendNotification/>

          <UserAdd />
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-4 round px-[14px] py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2>System Users</h2>
            <p className="text-muted-foreground">see all the user of a system.</p>
          </div>

          <div className="flex items-center gap-3">
            <Searchbar value={search} onChange={(e) => setSearch(e.target.value)} />

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="idle">Idle</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="administration">Administration</SelectItem>
                  <SelectItem value="staffs">Staffs</SelectItem>
                  <SelectItem value="councilor">Councilors</SelectItem>
                  <SelectItem value="noRoles">No Roles</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.department}</TableCell>
                  <TableCell className="flex">
                    <UserView data={user} />
                    <UserEdit data={user} />
                    <UserPermission data={user} />
                    <UserDelete data={user} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
