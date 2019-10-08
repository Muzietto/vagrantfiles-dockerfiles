import React from 'react'

const Introduction = ({ name, send }) => {
  return (
    <div>
      <h2 id='introductions'>What's your name?</h2>
      <div>
        <input
          type='text'
          value={name || ''}
          onChange={e => send({type: 'NAME.CHANGE', value: e.target.value})}
        />
      </div>
    </div>
  )
};

export default Introduction;
