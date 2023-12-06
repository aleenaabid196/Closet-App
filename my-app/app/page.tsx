"use client";
import React from "react";
import Navbar from "../components/navbar";
import Home from "../components/main";
import Footer from "../components/footer";
import { ThemeProvider, useTheme } from "next-themes"; 

const landingPage = () => {
  const { theme, setTheme } = useTheme();
  React.useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default landingPage