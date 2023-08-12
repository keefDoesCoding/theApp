import React from 'react';
import './Main.css'

function Main() {
  return (
    <div className ='main'>

      <div className='message'>
      <h1>This Website is Useless</h1>
        {<p>This page is completely useless, why are you here?</p>}

      </div>
      
      <img src="/images/mcfuckinghadit.jpg" alt="Main" className="centered-photo" />
    </div>
  );
}

export default Main;