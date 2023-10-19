import React from "react";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SCP049 from "./Scp049.js";
import SCP096 from "./Scp096.js";
import SCP106 from "./Scp106.js";
import SCP173 from "./Scp173.js";
import SCP682 from "./Scp682.js";
import CRUD from "./CRUD.js";
import UploadJSON from "./UploadJSON.js";
import "./styles.css";

function App() {
  return (
    <>
      <>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CRUD" element={<CRUD />} />
            <Route path="/UploadJSON" element={<UploadJSON />} />
            <Route path="/Scp049" element={<SCP049 />} />
            <Route path="/Scp096" element={<SCP096 />} />
            <Route path="/Scp106" element={<SCP106 />} />
            <Route path="/Scp173" element={<SCP173 />} />
            <Route path="/Scp682" element={<SCP682 />} />
          </Routes>
        </div>
      </>
    </>
  );
}

export default App;
