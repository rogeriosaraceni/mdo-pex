import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "@/pages/Login";
import Principal from "@/pages/Principal";
import Dashboard from "@/pages/Dashboard";
import Avaliacao from "@/pages/Avaliacao";
import NotFound from "@/pages/NotFound";
import PopupLogin from "@/pages/Login/Popups/PopupLogin";

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
                <Route path="/" element={<Login />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/avaliacao" element={<Avaliacao />} />

                <Route path="/popupLogin" element={<PopupLogin />} />

                <Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
