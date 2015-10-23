import {List, Map} from 'immutable';

export default function reducer(state = Map(), action) {
  console.log('State in Reducer: ', state);
  return state;
}
