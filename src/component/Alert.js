import React from 'react'

function Alert(props) {
  return (
    <div className="container" style={{height:"50px",width:"500px"}}>
      {/* i have to used curly bracket because i wrriten javascript */}
    { props.alert && <div className={`alert alert-warning alert-dismissible fade show`} role="alert">
      <strong>{props.alert.type}</strong> : {props.alert.msg} 
    </div> }
    </div>
  )
}

export default Alert
