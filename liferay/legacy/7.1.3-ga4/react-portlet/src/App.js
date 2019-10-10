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

	const { name, answers } = state.context;

	console.log(state);

	return <div>
			<div style={styles.slider}>
				<Slide direction='left' in={state.matches('introduction')} mountOnEnter unmountOnExit>
					<Paper elevation={4} style={styles.paper}>
			      <h2 id='introductions'>What's your name?</h2>
			      <div>
			        <input
			          type='text'
			          value={name || ''}
			          onChange={e => send({type: 'NAME.CHANGE', value: e.target.value})}
			        />
			      </div>
						<Buttons />
					</Paper>
				</Slide>
				<Slide direction='left' in={state.matches('marvel')} mountOnEnter unmountOnExit>
					<Paper elevation={4} style={styles.paper}>
						<h2>{name}, Which Marvel character do you prefer?</h2>
			      <div>
			        <input
			          type='radio'
			          name='marvel-character'
			          onClick={() => send({
									type: 'MARVEL.ANSWER',
									value: { id: 1, value:'Iron Man', type: 'marvel' }
								})}
			        /> Iron Man
			      </div>
			      <div>
			        <input
			          type='radio'
			          name='marvel-character'
			          onClick={() => send({
									type: 'MARVEL.ANSWER',
									value: { id: 2, value:'Spider Man', type: 'marvel' }
								})}
			        /> Spider Man
			      </div>
			      <div>
			        <input
			          type='radio'
			          name='marvel-character'
			          onClick={() => send({
									type: 'MARVEL.ANSWER',
									value: { id: 3, value:'Captain America', type: 'marvel' }
								})}
			        /> Captain America
			      </div>
						<Buttons />
					</Paper>
				</Slide>
				<Slide direction='left' in={state.matches('dc-comics')} mountOnEnter unmountOnExit>
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
			          name='marvel-character'
			          onClick={() => send({
									type: 'DCCOMICS.ANSWER',
									value: { id: 5, value:'Super Man', type: 'dc-comics' }
								})}
			        /> Super Man
			      </div>
			      <div>
			        <input
			          type='radio'
			          name='marvel-character'
			          onClick={() => send({
									type: 'DCCOMICS.ANSWER',
									value: { id: 6, value:'Joker', type: 'dc-comics' }
								})}
			        /> Joker
			      </div>
						<Buttons />
					</Paper>
				</Slide>
				<Slide direction='left' in={state.matches('review')} mountOnEnter unmountOnExit>
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
						<Buttons />
					</Paper>
				</Slide>
			</div>
			{/*
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
			*/}
		</div>;

	function Buttons() {
	  return <div>
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
		</div>;
	}
}

export default App;
