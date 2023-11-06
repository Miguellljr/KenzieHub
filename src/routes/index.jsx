import { Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard, ErrorPage, Login, Register } from "../pages";
import { useState } from "react";
import { PrivateRoutes } from "./PrivateRoutes";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
