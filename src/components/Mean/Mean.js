
import './Mean.css';
import React, { useState } from 'react';
import hornSound from '../../assests/geegee.mp3';

function Mean() {
    

    const [zoomed, setZoomed] = useState(false);

    const zoomText = () => {
        setZoomed(!zoomed);
        playHornSound();
    };

    const resetText = () => {
        window.location.reload(false);
    
  };

  const playHornSound = () => {
    const audio = new Audio(hornSound);
    audio.play();
  };
    
    return(
        
        <div className='meanBox'>
        <button className = 'zoomButton' onClick={zoomText}>Click</button>
        
        
        {zoomed && <img src="/images/thumb.jpg" alt="Zoomed" className="zoomed-image"/>}
        <p className={`zoomed-text ${zoomed ? 'zoomed' : ''}`}>You're the man, G!</p>
        {zoomed && <button className="reset-button" onClick={resetText}>Reset</button>}
        </div>
    )
}

export default Mean;