import React from 'react'

const SurveyResult = ({ name, answers, send }) => {
  return (
    <div>
      <h2>Survey Result</h2>
      <br />
      <div>
        Name: <b>{name}</b> <br />
        {answers.map((answer, index) => <div key={index}>Favourite <b>{answer.type}</b> character is <b>{answer.value}</b></div>)}
      </div>
    </div>
  )
};

export default SurveyResult;
