import { Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard, ErrorPage, Login, Register } from "../pages";
import { useState } from "react";

export default () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const userLogout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("@TOKEN");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={<Dashboard user={user} userLogout={userLogout} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
