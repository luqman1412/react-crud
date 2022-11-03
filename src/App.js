import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <h1 className="main-header">React Crud Operations</h1>
        <div>
          <Routes>
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/read" element={<Read/> } />
            <Route  path="/update" element={<Update/> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
