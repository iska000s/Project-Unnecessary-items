import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from "./components/Login";
// import Registartion from "./components/Registration";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logowanie" element={<Login />} />
        </Routes>
      </HashRouter>
    </div>
    
  );
}

export default App;
