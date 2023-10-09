// rfc short cut for imp react
// ctrl f used to replace all variable 
import React, { useState } from 'react'

export default function About(props) {
    
    
    const[myStyleMode,setMyStyleMode] = useState({
        color :'white',
        backgroundColor:'black'
    })
    const[btnText,setmybtnText] = useState("Dark Mode")

    // for changing background colour
    const enableBg = () => {
       if(myStyleMode.color === 'white'){
        setMyStyleMode({
            color :'black',
            backgroundColor:'white'
        })
        setmybtnText("Dark Mode")
       }else{
        setMyStyleMode({
            color :'white',
            backgroundColor:'black'
        })
        setmybtnText("Day Mode")
       }
            
    } 
    return (
        <div className='container' style={myStyleMode}>
            <h2 className='my-2 mx-3'>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyleMode}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyleMode}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyleMode}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyleMode}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                </div>
            </div>
            <div className='container'>
                <button  type="button" className="btn btn-primary my-3 mx-3" onClick={enableBg}>{btnText}</button>
            </div>
        </div>
    )
}
