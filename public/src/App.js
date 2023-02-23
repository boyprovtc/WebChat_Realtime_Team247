import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Resigter from "./pages/Resigter";
export default function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/resigter" element={<Resigter />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
  );
}