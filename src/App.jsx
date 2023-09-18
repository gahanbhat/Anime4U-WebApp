import { useState } from "react";
import reactLogo from "./assets/logo.svg";
import viteLogo from "/logo.svg";
import "./App.css";
import { Header } from "./components/Heading/Header";
import { Search } from "./components/Searchbar/Search";
import { Navbar } from "./components/Navbar/Navbar";
import { Animecards } from "./components/Animecards";

function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <Animecards />
    </div>
  );
}

export default App;
