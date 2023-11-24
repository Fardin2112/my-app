import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import About from "./component/About";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


function App() {
  // i made darkmode enable in App so i can easily do in all website
  const [mode, setmode] = useState('light') // whether dark mode is enable or not
  const [alert, setalert] = useState(null) // for alert

  const showAlert = (type, message) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "rgb(30 27 71)" // bg color change when button click
      showAlert("Succes", "Dark mode is on") // this is for alert
      document.title = "TextUtils-Dark Mode" // this is used to change in icon name
      // we can use lower fucntion for frequently change icon
      // setInterval(()=>{
      //   document.title = "TextUtils is Amazing"
      // },2000)
      // setInterval(()=>{
      //   document.title = "Install Now"
      // },1800)
    } else {
      setmode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Succes", "light mode is enable")
      document.title = "TextUtils-light Mode"
    }
  }
  return (
    
      // {/* { here we use props.file name(title,abouttext) and change name} */}
      // {/* showAlert={showAlert} 1st 2nd showAlert is function name but 1st define for textform it can be change */}
      <BrowserRouter>
        <Navbar title="TextUtlis" abouttext="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="cotainer my-3">
          <Routes>
            <Route path="/About" element={ <About mode={mode}/>}/>
            <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}/>
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App;
