import React from 'react';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';

const toggleMachine = Machine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
});

const App = () => {

	const [current, send] = useMachine(toggleMachine);

	return (
		<button onClick={() => send('TOGGLE')}>
			{current.matches('inactive') ? 'Off' : 'On'}
		</button>
	);

}

export default App;
