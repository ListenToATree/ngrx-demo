import {createSelector} from '@ngrx/store';

export interface AppState {
  counting: FeatureState;
}

export interface FeatureState {
  counter: number;
}

export const selectFeature = (state: AppState) => state.counting;

export const selectCounter = createSelector(
  selectFeature,
  (state) => state.counter
);
