import { Routes, Route} from "react-router-dom";
import React from "react";
import Landing from "./page/Landing";
import Login from "./page/Login";
import Signup from "./page/Signup";
import  Profile from "./page/Profile";

function App() {
  
  return (
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </div>
  );
}
export default App;
