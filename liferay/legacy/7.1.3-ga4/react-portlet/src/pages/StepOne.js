import React from 'react'

const StepOne = ({ name, send }) => {
  return (
    <div>
      <h2>{name}, Which Marvel character do you prefer?</h2>
      <div>
        <input
          type='radio'
          name='marvel-character'
          onClick={() => send({type: 'MARVEL.ANSWER', value: { id: 1, value:'Iron Man', type: 'marvel' } })}
        /> Iron Man
      </div>
      <div>
        <input
          type='radio'
          name='marvel-character'
          onClick={() => send({type: 'MARVEL.ANSWER', value: { id: 2, value:'Spider Man', type: 'marvel' } })}
        /> Spider Man
      </div>
      <div>
        <input
          type='radio'
          name='marvel-character'
          onClick={() => send({type: 'MARVEL.ANSWER', value: { id: 3, value:'Captain America', type: 'marvel' } })}
        /> Captain America
      </div>
    </div>
  )
};

export default StepOne;
