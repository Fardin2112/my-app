import React,{ useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
// import About from "./component/About";

function App() {
  // i made darkmode enable in App so i can easily do in all website
  const [mode, setmode] = useState('light') // whether dark mode is enable or not
  
  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = "grey"
    }else{
      setmode('light');
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      {/* { here we use props.file name(title,abouttext) and change name} */}
      <Navbar title="TextUtlis" abouttext="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <div>
        <TextForm heading="Enter the text to analyze" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  )
}

export default App;
