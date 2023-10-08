import React ,{useState} from 'react'

export default function TextForm(props) {
  // this is hook function
  const [text,setText] = useState("Enter text here");
  // text is the value or setText is used to update text
  // text = "fefefes" wrong way
  // setText = "oiainc" right way
   
  const handleUpclick =()=>{
    // text.toLocalUppercase is built function for upper case
    let newtext = text.toLocaleUpperCase();
    // here i changed the value of text to uppercase on click 
    setText(newtext);
  }
  const handleOnchange = (event) => {
    // event(instead of event anything can be) handling update the value of text on change
    setText(event.target.value);
  }
  return (
    <>  
        {/* mb-3  or my-3 used for spacing, this is used after className*/}
        <div className="container">
             <h1>{props.heading}</h1>
             <div class="mb-3">
               <label for="myBox"  class="form-label">Example textarea</label>
               <textarea class="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
             </div> 
             <button className="btn btn-primary" onClick={handleUpclick}>Convert to UpperCase</button>
         </div> 
         <div className="container my-3">
              <h1>Text summary</h1>
              <p>{text.split(" ").length} words , {text.length} Characters</p>
          </div>
    </>     
  )
}
