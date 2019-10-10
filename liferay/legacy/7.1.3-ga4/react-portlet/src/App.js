import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import { machine } from './machines/surveyStateMachine';
import Introduction from './pages/Introduction';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import SurveyResult from './pages/SurveyResult';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

const surveyStateMachine = machine.withConfig({});

const App = () => {
	
  const styles = {
		svg: {
	    width: '400px',
	    height: '300px',
	  },
	  polygon: {
	    fill: 'white',
	    stroke: 'red',
	    strokeWidth: 1,
	  },
		paper: {
	    zIndex: 1,
	    position: 'relative',
	    margin: '10px',
			width: '200px',
	  },
		slider: {
	    display: 'flex',
	    height: '350px',
	  },
	};

	const [state, send] = useMachine(surveyStateMachine);
	const [step, setStep] = React.useState(0);

	const { name, answers } = state.context;

	console.log(state);

	useEffect(() => {
		setTimeout(() => {
			setStep(1);
		}, 2000);
	  setTimeout(() => {
			setStep(2);
		}, 4000);
		setTimeout(() => {
			setStep(3);
		}, 6000);
	}, []);

	return (
		<div>
			<div style={styles.slider}>
				<Slide direction='left' in={step > 0} mountOnEnter unmountOnExit>
					<Paper elevation={4} style={styles.paper}>
						<svg style={styles.svg}>
							<polygon points='0,100 50,00, 100,100' style={styles.polygon} />
						</svg>
					</Paper>
				</Slide>
				<Slide direction='left' in={step > 1} mountOnEnter unmountOnExit>
					<Paper elevation={4} style={styles.paper}>
						<svg style={styles.svg}>
							<polygon points='0,100 50,00, 100,100' style={styles.polygon} />
						</svg>
					</Paper>
				</Slide>
				<Slide direction='left' in={step > 2} mountOnEnter unmountOnExit>
					<Paper elevation={4} style={styles.paper}>
						<svg style={styles.svg}>
							<polygon points='0,100 50,00, 100,100' style={styles.polygon} />
						</svg>
					</Paper>
				</Slide>
			</div>
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
