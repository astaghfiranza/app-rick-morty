import "./App.css";
import React from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TypesExample from "./components/PrimaryButton";
import CharactersList from "./CharacterList";
import Menu from "./pages/Menu";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Button title="Button title" path="/character" /> */}
        <Routes>
          <Route path="/" element={<CharactersList />} />
          {/* <Route path="/character" component={CharactersList} /> */}
          {/* <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/locations" element={<CharacterByLocation />} /> */}
        </Routes>
      </Router>
      <section>
        by Muhammad Aththar Astaghfiranza - astaghfiranza@gmail.com -
        082246466807
      </section>
    </div>
  );
}

export default App;
