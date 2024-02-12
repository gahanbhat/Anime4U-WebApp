import "./App.css";

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
