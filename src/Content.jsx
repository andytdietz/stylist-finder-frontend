import axios from "axios";
import { useState, useEffect } from "react";
import { StylistsIndex } from "./StylistsIndex";
import { Signup } from "./Signup";
import { Modal } from "./Modal";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";
import { StylistsShowPage } from "./StylistsShowPage";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [stylists, setStylists] = useState([]);

  const handleIndexStylists = () => {
    console.log("handleIndexStylists");
    axios.get("http://localhost:3000/stylists.json").then((response) => {
      console.log(response.data);
      setStylists(response.data);
    });
  };

  useEffect(handleIndexStylists, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<StylistsIndex stylists={stylists} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stylists" element={<StylistsIndex stylists={stylists} />} />
        <Route path="/stylists/:id" element={<StylistsShowPage />} />
      </Routes>
    </div>
  );
}
