import './Question.css';

import React, { useState } from 'react';

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="bg-white shadow-md rounded p-4 custom-faq-container">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{question}</h2>
        <button className="text-blue-500" onClick={toggleAnswer}>
        <i className={`fa-solid ${showAnswer ? 'fa-minus' : 'fa-plus' } text-blue-500 mr-2`}></i>
        </button>
      </div>
      <p className={`mt-2 ${showAnswer ? '' : 'hidden'}`}>{answer}</p>
    </div>
  );
};

export default Question;
