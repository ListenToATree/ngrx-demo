import {createAction, props} from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');

export const decrement = createAction('[Counter Component] Decrement');

export const save = createAction('[Counter Component] Save Number', props<{ payload: number }>());

export const load = createAction('[Counter Component] Load Number');

export const loadSuccess = createAction('[Counter Component] Load Number Success', props<{ payload: number }>());

export const reset = createAction('[Counter Component] Reset');
