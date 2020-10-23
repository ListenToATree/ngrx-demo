import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, tap} from 'rxjs/operators';
import {load, loadSuccess, save} from './counter.actions';

@Injectable()
export class CounterEffect {

  saveNumber$ = createEffect(() => this.actions$.pipe(
    ofType(save),
    tap(({payload}) => localStorage.setItem('cachedResult', payload.toString()))
    ), {dispatch: false}
  );

  loadNumber$ = createEffect(() => this.actions$.pipe(
    ofType(load),
    map(() => {
      const payload = +localStorage.getItem('cachedResult');
      return loadSuccess({payload});
    })
  ));

  constructor(private actions$: Actions) {
  }
}
