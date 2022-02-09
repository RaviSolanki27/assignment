import React from 'react';
import "./header.css"

function Header() {
  return <div className='header'>
      <h1>Hello There 👋</h1>
      <h3>Please Fill the form below.</h3>
      <h4>Some Insructions to folllow</h4>
      <div>
          <p>You must fill all the details</p>
          <p>Submit after filling the form</p>
      </div>
  </div>;
}

export default Header;
