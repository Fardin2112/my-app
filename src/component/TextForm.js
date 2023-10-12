import React ,{useState} from 'react'

export default function TextForm(props) {
  // this is hook function
  const [text,setText] = useState("");
  // text is the value or setText is used to update text
  // text = "fefefes" wrong way
  // setText = "oiainc" right way
   
  const handleUpclick =()=>{
    // text.toLocalUppercase is built function for upper case
    let newtext = text.toLocaleUpperCase();
    // here i changed the value of text to uppercase on click 
    setText(newtext);
    // for using App function i have to use before props or define into Alert also which is in app.js file also
    props.showAlert("Sucess","text is Converted into Upper Case ")
  }
  const handleLoclick =()=>{
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
    props.showAlert("Sucess","text is Converted into Lower Case ")
  }
  const handleToClear = () => {
    setText("");
    props.showAlert("Sucess","text is clear ")
  }
  const handleOnchange = (event) => {
    // event(instead of event anything can be) handling update the value of text on change
    setText(event.target.value);
  }
  return (
    <>  
        {/* mb-3  or my-3 used for spacing in y direction or mx is used in x direction, this is used after className*/}
        {/* using style here for easy work */}
        <div className="container" style={{color:props.mode==='dark'?'#d2d2d2':'black'}}>
             <h1>{props.heading}</h1>
             <div className="mb-3">
               <label htmlFor="myBox"  className="form-label">Example textarea</label>
               <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#47474d':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnchange} id="myBox" rows="8"></textarea>
             </div> 
             <button className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>UpperCase</button>
             <button className="btn btn-primary mx-2 my-1" onClick={handleLoclick}>LowerCase</button>
             <button className="btn btn-primary mx-2 my-1" onClick={handleToClear}>Clear Text</button>
             <div className="container my-3">
              <h2>Text summary</h2>
              {/* this is used to calculate length of text */}
              <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words , {text.length} Characters</p>
              <p>{0.008 * text.split(" ").length} minutes to read this paragraph</p>
              <h2>Preview</h2>
              <p>{text.length>0?text:"Enter your text to preview"}</p>
          </div>
         </div> 
        
    </>     
  )
}
