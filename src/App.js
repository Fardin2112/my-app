import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";

function App() {
  return (
    <>
    {/* { here we use props.file name(title,abouttext) and change name} */}
  <Navbar title="TextUtlis" abouttext="About TextUtils" />
  <div className="container">
  <TextForm heading="Enter the text to analyze"/>
  </div>
  </>
  )
}
 
export default App;
