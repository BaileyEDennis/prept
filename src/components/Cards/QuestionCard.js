import React from 'react';

export default function QuestionCard({ card }) {
  return (
    <>
    <div className='d-flex flex-column m-3 w-25'>
    <h1>Question:</h1>
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{ card.question }</h5>
      </div>
    </div>
    </div>
    </>
  );
}
