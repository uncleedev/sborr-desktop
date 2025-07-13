import { HashRouter as Router, Routes, Route } from "react-router-dom"
import HomeLayout from "./pages/home/HomeLayout"
import DashboardPage from "./pages/home/dasboard/Dashboard"
import DocumentsPage from "./pages/home/documents/Documents"
import SessionsPage from "./pages/home/sessions/Sessions"
import UsersPage from "./pages/home/users/Users"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
