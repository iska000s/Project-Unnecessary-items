import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logowanie" element={<Login />} />
          <Route path="/rejestracja" element={<Registration />} />

        </Routes>
      </HashRouter>
    </div>
    
  );
}

export default App;
