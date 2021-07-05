import { RootState as RootReducerState, RootAction } from '../_redux/rootReducer';

declare global {
  type RootState = RootReducerState;
}

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
    RootState: RootState;
  }
}
declare module '*.mp3' {
  type mp3 = {};
}
