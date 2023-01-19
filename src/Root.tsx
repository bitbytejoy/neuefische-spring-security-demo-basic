import {Route, Routes} from "react-router-dom";
import Auth from "./components/Auth";
import HomePage from "./pages/HomePage";
import HelloPage from "./pages/HelloPage";
import LoginPage from "./pages/LoginPage";
import React from "react";
import LogoutButton from "./components/LogoutButton";

export default function Root () {
  return (
    <Routes>
      <Route path="/" element={
        <Auth>
          <HomePage/>
        </Auth>
      }/>

      <Route path="/hello" element={
        <Auth>
          <LogoutButton/>
          <HelloPage/>
        </Auth>
      }/>

      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  );
}