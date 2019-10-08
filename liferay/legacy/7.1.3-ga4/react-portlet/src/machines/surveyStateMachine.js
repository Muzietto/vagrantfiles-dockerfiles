import { Machine, actions } from 'xstate';
const { assign } = actions;

export const config = {
  id: 'account-setup',
  context: {
    name: null,
    answers: [],
  },
  initial: 'introduction',
  states: {
    introduction: {on: {NEXT: 'marvel'}},
    marvel: {on: {BACK: 'introduction', NEXT: 'dc-comics'}},
    'dc-comics': {on: {BACK: 'marvel', NEXT: 'review'}},
    review: {on: {BACK: 'dc-comics'}},
  },
  on: {
    'NAME.CHANGE': {
      actions: assign({
        name: (ctx, {value}) => value
      }),
    },
    'MARVEL.ANSWER': {
      target: 'marvel',
      actions: assign({
        answers: (ctx, { value }) => {
          const currentAnswer = ctx.answers.filter(answer => answer.type !== 'marvel');
          return [ ...currentAnswer, value ];
        },
      }),
    },
    'DCCOMICS.ANSWER': {
      target: 'dc-comics',
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
