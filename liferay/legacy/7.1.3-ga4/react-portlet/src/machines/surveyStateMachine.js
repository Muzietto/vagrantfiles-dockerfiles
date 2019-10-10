import { Machine, actions } from 'xstate';
const { assign } = actions;

export const config = {
  id: 'account-setup',
  context: {
    name: null,
    answers: [],
  },
  initial: '0',
  states: {
    '0': {on: {NEXT: '1'}},
    '1': {on: {BACK: '0', NEXT: '2'}},
    '2': {on: {BACK: '1', NEXT: '3'}},
    '3': {on: {BACK: '2'}},
  },
  on: {
    'NAME.CHANGE': {
      actions: assign({
        name: (ctx, {value}) => value
      }),
    },
    'MARVEL.ANSWER': {
      target: '1',
      actions: assign({
        answers: (ctx, { value }) => {
          const currentAnswer = ctx.answers.filter(answer => answer.type !== 'marvell');
          return [ ...currentAnswer, value ];
        },
      }),
    },
    'DCCOMICS.ANSWER': {
      target: '2',
      actions: assign({
        answers: (ctx, { value }) => {
          const currentAnswer = ctx.answers.filter(answer => answer.type !== 'dc-comics');
          return [ ...currentAnswer, value ];
        },
      }),
    },
  },
}

export const machine = Machine(config);
