import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "@/pages/Login";
import Principal from "@/pages/Principal";
import Dashboard from "@/pages/Dashboard";
import Avaliacao from "@/pages/Avaliacao";
import NotFound from "@/pages/NotFound";

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
                <Route path="/" element={<Login />} />
                <Route path="/pages/principal/" element={<Principal />} />
                <Route path="/pages/dashboard/" element={<Dashboard />} />
                <Route path="/pages/avaliacao/" element={<Avaliacao />} />
                <Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
