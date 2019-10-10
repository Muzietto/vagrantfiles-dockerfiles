import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import { machine } from './machines/surveyStateMachine';
import Introduction from './pages/Introduction';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import SurveyResult from './pages/SurveyResult';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

const surveyStateMachine = machine.withConfig({});

const App = () => {

  const styles = {
		paper: {
	    zIndex: 1,
	    position: 'relative',
	    margin: '10px',
			width: '260px',
			padding: '10px',
	  },
		slider: {
	    display: 'flex',
	    height: '350px',
	  },
		input: {
	    width: '200px',
			margin: '10px',
	  },
		button: {
		    margin: '10px',
	  },
	};

	const [state, send] = useMachine(surveyStateMachine);

	const { name, answers } = state.context;

	console.log(state);

	return <div>
			<div style={styles.slider}>
				<Slide direction='left' in={state.value >= 0} mountOnEnter unmountOnExit>
					<Paper elevation={4} style={styles.paper}>
			      <h2 id='introductions'>What's your name?</h2>
			      <div>
			        <input
							  style={styles.input}
			          type='text'
			          value={name || ''}
			          onChange={e => send({type: 'NAME.CHANGE', value: e.target.value})}
			        />
			      </div>
						<Button
							style={styles.button}
							variant='contained'
							onClick={() => send('NEXT')}>NEXT</Button>
					</Paper>
				</Slide>
				<Slide direction='left' in={state.value >= 1} mountOnEnter unmountOnExit>
					<Paper elevation={4} style={styles.paper}>
						<h2>{name}, Which Marvel character do you prefer?</h2>
			      <div>
			        <input
			          type='radio'
			          name='marvell-character'
			          onClick={() => send({
									type: 'MARVEL.ANSWER',
									value: { id: 1, value:'Iron Man', type: 'marvell' }
								})}
			        /> Iron Man
			      </div>
			      <div>
			        <input
			          type='radio'
			          name='marvell-character'
			          onClick={() => send({
									type: 'MARVEL.ANSWER',
									value: { id: 2, value:'Spider Man', type: 'marvell' }
								})}
			        /> Spider Man
			      </div>
			      <div>
			        <input
			          type='radio'
			          name='marvell-character'
			          onClick={() => send({
									type: 'MARVEL.ANSWER',
									value: { id: 3, value:'Captain America', type: 'marvell' }
								})}
			        /> Captain America
			      </div>
						<Button
							style={styles.button}
							variant='contained'
							onClick={() => send('BACK')}>BACK</Button>
						<Button
							style={styles.button}
							variant='contained'
							onClick={() => send('NEXT')}>NEXT</Button>
					</Paper>
				</Slide>
				<Slide direction='left' in={state.value >= 2} mountOnEnter unmountOnExit>
					<Paper elevation={4} style={styles.paper}>
						<h2>{name}, Which DC Comics character do you prefer?</h2>
			      <div>
			        <input
			          type='radio'
			          onClick={() => send({
									type: 'DCCOMICS.ANSWER',
									value: { id: 4, value:'Batman', type: 'dc-comics' }
								})}
			        /> Batman
			      </div>
			      <div>
			        <input
			          type='radio'
			          name='marvell-character'
			          onClick={() => send({
									type: 'DCCOMICS.ANSWER',
									value: { id: 5, value:'Super Man', type: 'dc-comics' }
								})}
			        /> Super Man
			      </div>
			      <div>
			        <input
			          type='radio'
			          name='marvell-character'
			          onClick={() => send({
									type: 'DCCOMICS.ANSWER',
									value: { id: 6, value:'Joker', type: 'dc-comics' }
								})}
			        /> Joker
			      </div>
						<Button
							style={styles.button}
							variant='contained'
							onClick={() => send('BACK')}>BACK</Button>
						<Button
							style={styles.button}
							variant='contained'
							onClick={() => send('NEXT')}>NEXT</Button>
					</Paper>
				</Slide>
				<Slide direction='left' in={state.value >= 3} mountOnEnter unmountOnExit>
					<Paper elevation={4} style={styles.paper}>
						<h2>Survey Result</h2>
			      <br />
			      <div>
			        Name: <b>{name}</b> <br />
			        {answers.map((answer, index) =>
								<div key={index}>
								  Favourite <b>{answer.type}</b>
									character is <b>{answer.value}</b>
								</div>)}
			      </div>
						<Button
							style={styles.button}
							variant='contained'
							onClick={() => send('BACK')}>BACK</Button>
					</Paper>
				</Slide>
			</div>
		</div>;

	function Buttons() {
	  return <div>
			{state.value >= 1 && <Button
				style={styles.button}
				variant='contained'
				onClick={() => send('BACK')}>BACK</Button>}
			{state.value <= 2 && <Button
				style={styles.button}
				variant='contained'
				onClick={() => send('NEXT')}>NEXT</Button>}
		</div>;
	}
}

export default App;
