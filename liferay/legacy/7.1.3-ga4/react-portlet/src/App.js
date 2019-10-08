import React from 'react';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';

const wizardStateMachine = Machine({
	id: 'wizard',
	initial: 'question_1',
	states: {
		question_1: {
			on: {
				NEXT: 'question_2',
			},
			value: {
				title: 'Chi è Pippo?',
				questions: [{
					id: 1,
					text: 'Cane',
				}, {
					id: 2,
					text: 'Gatto',
				}],
			},
		},
		question_2: {
			on: {
				PREVIOUS: 'question_1',
			},
		},
	},
});

const App = () => {

	const [current, send] = useMachine(wizardStateMachine);

	return (
		<div>
			<h1>Edenred Survey</h1>

			<div>
				{current.value}
			</div>
			<div>
				<button
					onClick={() => send('PREVIOUS')}>
					PREVIOUS
				</button>
				<button
					onClick={() => send('NEXT')}>
					NEXT
				</button>
			</div>
		</div>
	);

	// return (
	// 	<button onClick={() => send('TOGGLE')}>
	// 		{current.matches('inactive') ? 'Off' : 'On'}
	// 	</button>
	// );

}

export default App;
