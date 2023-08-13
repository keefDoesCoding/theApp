import React, { useState } from 'react';
import './Poll.css';

const Poll = () => {
  const [cycle, setCycle] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    'Which picture do you prefer in Cycle 1?',
    'Which picture do you prefer in Cycle 2?',
    'Which picture do you prefer in Cycle 3?',
    'Which picture do you prefer in Cycle 4?',
    'Which picture do you prefer in Cycle 5?',
  ];

  const images = [
    ['picture1-cycle1.jpg', 'picture2-cycle1.jpg'],
    ['picture1-cycle2.jpg', 'picture2-cycle2.jpg'],
    ['picture1-cycle3.jpg', 'picture2-cycle3.jpg'],
    ['picture1-cycle4.jpg', 'picture2-cycle4.jpg'],
    ['picture1-cycle5.jpg', 'picture2-cycle5.jpg'],
  ];

  const handleOptionSelect = () => {
    if (cycle < 5) {
      setSelectedOption(null);
      setCycle(cycle + 1);
    }
  };

  return (
    <div className="poll-container">
      <h1>{questions[cycle - 1]}</h1>
      <div className="options-container">
        <div
          className={`option ${selectedOption === 'option1' ? 'selected' : ''}`}
          onClick={() => setSelectedOption('option1')}
        >
          <img src={images[cycle - 1][0]} alt="Option 1" />
        </div>
        <div
          className={`option ${selectedOption === 'option2' ? 'selected' : ''}`}
          onClick={() => setSelectedOption('option2')}
        >
          <img src={images[cycle - 1][1]} alt="Option 2" />
        </div>
      </div>
      {selectedOption && cycle < 5 && (
        <button className="next-button" onClick={handleOptionSelect}>
          Next
        </button>
      )}
    </div>
  );
};

export default Poll;
