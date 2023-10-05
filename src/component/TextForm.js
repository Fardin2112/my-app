import React ,{useState} from 'react'

export default function TextForm(props) {
  // this is hook function
  const [text,setText] = useState("Enter text here");
  // text is the value or setText is used to update text
  // text = "fefefes" wrong way
  // setText = "oiainc" right way
   
  const handleUpclick =()=>{
    let newtext = text.toLocaleUpperCase();
    // here i changed the value of text to uppercase on click 
    setText(newtext);
  }
  const handleOnchange = (evnet) => {
    // event handling -> update the value of text on change
    setText(evnet.target.value);
  }
  return (
        <div>
             <h1>{props.heading}</h1>
             <div class="mb-3">
               <label for="myBox"  class="form-label">Example textarea</label>
               <textarea class="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
             </div> 
             <button className="btn btn-primary" onClick={handleUpclick}>Convert to UpperCase</button>
         </div> 
  )
}
