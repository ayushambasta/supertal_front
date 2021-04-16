import { useState, useEffect } from 'react';
import './App.css';
import Login from "./Component/Login/Login";
import Home from "./Component/Home/Home";

function App() {
  const [home, setHome] = useState(false)

  return (
    <div className="App">

      {
        home ? <Home /> : <Login setHome={setHome} />
      }
    </div>
  );
}

export default App;
