import React from 'react'

const StepTwo = ({ name, send }) => {
  return (
    <div>
      <h2>{name}, Which DC Comics character do you prefer?</h2>
      <div>
        <input
          type='radio'
          onClick={() => send({type: 'DCCOMICS.ANSWER', value: { id: 4, value:'Batman', type: 'dc-comics' } })}
        /> Batman
      </div>
      <div>
        <input
          type='radio'
          name='marvel-character'
          onClick={() => send({type: 'DCCOMICS.ANSWER', value: { id: 5, value:'Super Man', type: 'dc-comics' } })}
        /> Super Man
      </div>
      <div>
        <input
          type='radio'
          name='marvel-character'
          onClick={() => send({type: 'DCCOMICS.ANSWER', value: { id: 6, value:'Joker', type: 'dc-comics' } })}
        /> Joker
      </div>
    </div>
  )
};

export default StepTwo;
