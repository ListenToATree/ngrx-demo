import {createReducer, on} from '@ngrx/store';
import {decrement, increment, loadSuccess, reset} from './counter.actions';
import {FeatureState} from './counter.selector';

export const initialState: FeatureState = {
  counter: 1
};

const _counterReducer = createReducer(
  initialState,
  on(loadSuccess, (state, {payload}) => ({...state, counter: payload})),
  on(increment, (state) => ({...state, counter: state.counter + 1})),
  on(decrement, (state) => ({...state, counter: state.counter - 1})),
  on(reset, (state) => ({...state, counter: 1}))
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
