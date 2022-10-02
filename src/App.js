import "./App.css";
import Navbar from "./Components/Navbar";
import Bminfo from "./Components/Bminfo";
import { useState } from "react";
import About from "./Components/About";

import 
{ BrowserRouter as Router, 
  Switch, 
  Route,
 } 
  from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#630000";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
    
      <Router>
      <Navbar togglemode={togglemode} mode={mode} />


        <Switch>
        
        <Route path="/about">
            <About mode={mode} />
          </Route>

        <Route path="/">
          <Bminfo mode={mode}/>
          </Route>
      
        </Switch>
      </Router>
    </>
  );
}

export default App;
