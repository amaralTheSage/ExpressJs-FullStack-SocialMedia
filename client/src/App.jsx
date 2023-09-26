import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/createpost" exact element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
