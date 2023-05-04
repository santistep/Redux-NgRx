import { createReducer, on } from '@ngrx/store';
import * as actions from './contador.actions';

// Initial State
export const initialState = 1;

// Creamos el action Reducer
export const contadorReducer = createReducer(
  initialState,
  on(actions.increment, (state) => state + 1),
  on(actions.decrement, (state) => state - 1),
  on(actions.multiplicar, (state, { numero }) => state * numero),
  on(actions.dividir, (state, { numero }) => state / numero),
  on(actions.reset, (state) => initialState)
);

// export function contadorReducer(state: number = 10, action: Action) {
//   switch (action.type) {
//     case increment.type:
//       return state + 1;

//     case decrement.type:
//       return state - 1;

//     default:
//       return state;
//   }
// }
