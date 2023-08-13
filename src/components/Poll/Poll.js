import React, { useState } from 'react';
import './Poll.css';

const Poll = () => {
  const [cycle, setCycle] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const resetText = () => {
    window.location.reload(false);

};

  const questions = [
    'Lets start of easy, Man of Steel takes on John Wick?',
    'OK True, What about Kakarot vs John Wick? Who wins?',
    'Interesting, What if it was Thanos against John fking Wick',
    'BRO JOHN FKEN WICK VS ARTHUR FKEN MORGAN CAAARRRTNT?',
    'The Father of the Atomic Bomb vs John Wick?',
  ];

  const images = [
    ['/images/picture1-cycle1.jpg', '/images/picture2-cycle1.jpg'],
    ['/images/picture1-cycle2.jpg', '/images/picture2-cycle2.jpg'],
    ['/images/picture1-cycle3.jpg', '/images/picture2-cycle3.jpg'],
    ['/images/picture1-cycle4.jpg', '/images/picture2-cycle4.jpg'],
    ['/images/picture1-cycle5.jpg', '/images/picture2-cycle5.jpg'],
  ];

  const handleOptionSelect = () => {
    if (cycle <= 5) {
      setSelectedOption(null);
      setCycle(cycle + 1);
    }
  };

  return (
    <div className="poll-container">
    
      {cycle <= 5 ? (
        <>
          <h1>{questions[cycle - 1]}</h1>
          <div className="options-container">
            <div
              className={`option ${selectedOption === 'option1' ? 'selected' : ''}`}
              onClick={() => setSelectedOption('option1')}
            >
              <img className="option1photo" src={images[cycle - 1][0]} alt="Option 1" />
            </div>
            <div
              className={`option ${selectedOption === 'option2' ? 'selected' : ''}`}
              onClick={() => setSelectedOption('option2')}
            >
              <img className="option2photo" src={images[cycle - 1][1]} alt="Option 2" />
            </div>
          </div>
          {selectedOption && cycle <= 5 && (
            <button className="next-button" onClick={handleOptionSelect}>
              Next
            </button>
          )}
        </>
      ) : (
        <div className="congrats-message">
          <h1>Congrats my guy!</h1>
          <p>John Wick is the goat.</p>
          <button className="reset-button" onClick={resetText}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default Poll;
