import "./App.css";
import Navbar from "./components/Navbar";
import TextForm2 from "./components/TextForm2";
// import About from "./components/About";
import React, { useState } from "react";
import Alerts from "./components/Alerts";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

let navBarTitle = "TextUtils";
let about = "About Us";

function App() {
  const [nMode, setNMode] = useState("light");
  // const [contMode, setContMode] = useState('light')

  const [mode, setMode] = useState("Dark");
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (nMode === "light" && mode === "Dark") {
      setNMode("dark");
      setMode("Light");
      setStyle({
        color: "White",
        backgroundColor: "#03203C",
      });
      showAlert("success", "Enabled Dark Mode");
      document.title = "TextUtils | Dark";
    } else {
      setNMode("light");
      setMode("Dark");
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      showAlert("success", "Enabled Light Mode");
      document.title = "TextUtils | Light";
      setTimeout(() => {
        document.title = "TextUtils";
      }, 1000);
    }
  };
  return (
    <>
      {/* <Router>
      <Navbar
        title={navBarTitle}
        about={about}
        mode={nMode}
        func={toggleMode}
      />
      <Alerts alert={alert} />

        <Routes>
        <Route exact path="/">
          <Route exact path="/" element={<TextForm2 style={style} func={toggleMode} alrt={showAlert}/>}/> 
        </Route>
          <Route exact path="/about" element={<About mode={nMode}/>}/>
        
        </Routes>
      </Router> */}

      <Navbar
        title={navBarTitle}
        about={about}
        mode={nMode}
        func={toggleMode}
      />
      <Alerts alert={alert} />
      <TextForm2 style={style} func={toggleMode} alrt={showAlert} />
      {/* <About mode={nMode} /> */}
    </>
  );
}

export default App;
