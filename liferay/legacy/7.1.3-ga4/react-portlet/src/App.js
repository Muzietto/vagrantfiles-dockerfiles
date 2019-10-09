import React from 'react';
import { useMachine } from '@xstate/react';
import { machine } from './machines/surveyStateMachine';
import Introduction from './pages/Introduction';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import SurveyResult from './pages/SurveyResult';
import Paper from '@material-ui/core/Paper';

const surveyStateMachine = machine.withConfig({});

const App = () => {

	const [state, send] = useMachine(surveyStateMachine);

	const { name, answers } = state.context;

	console.log(state);

	return (
		<div>
			<Paper elevation={4}>
			  <p>Ciao Paper</p>
			</Paper>
			<div>
				{state.matches('introduction') && (
					<Introduction name={name} send={send} />
				)}
				{state.matches('marvel') && (
					<StepOne name={name} send={send} />
				)}
				{state.matches('dc-comics') && (
					<StepTwo name={name} send={send} />
				)}
				{state.matches('review') && (
					<SurveyResult name={name} answers={answers} send={send} />
				)}
			</div>
			<br />
			<div>
				{!state.matches('introduction') && <input
					type='button'
					onClick={() => send('BACK')}
					value='Back'
				/>}
				{!state.matches('review') &&  <input
					type='button'
					onClick={() => send('NEXT')}
					value='Next'
				/>}
			</div>
		</div>
	);

}

export default App;
