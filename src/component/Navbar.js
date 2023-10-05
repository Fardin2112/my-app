import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className ="navbar navbar-expand-lg bg-body-tertiary" >
  <div className ="container-fluid">
     {/* props.filename using this we can change name by just using filenmae in different pages */}
    <a className ="navbar-brand" href="/">{props.title}</a>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
        <li className ="nav-item">
          <a className ="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className ="nav-item">
          <a className ="nav-link" href="/">{props.abouttext}</a>
        </li>
      </ul>
      <form className ="d-flex" role="search">
        <input className ="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className ="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

// propTypes used becasue if any data will be send as we want
// ex if i want any data go as string so it can be only string if it int then its give fault in console
Navbar.propTypes = {
   title: PropTypes.string.isRequired,// isRequired mean we have to send data cant work with default
   abouttext: PropTypes.string,
}

// defaultProp used bec if we failed to declared then give the data which in default
Navbar.defaultProps ={
    title:"Set title",
    abouttext:"Set text here"
}
