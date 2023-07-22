import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Layout
      </header>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
    
  );
}

export default App;
