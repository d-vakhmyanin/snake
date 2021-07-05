import { combineReducers } from 'redux';

import * as reducers from './reducers';
import * as actions from './actions';
import { Directions } from '../lib/constants';
import { Snake } from '../lib/Snake';

export type RootState = {
  score: number;
  heightScore: number;
  currentDirection: Directions;
  board: number[][];
  boardDirections: Directions[][];
  pause: boolean;
  snake: Snake;
};

export type RootAction =
  | actions.ChangeDirectionAction
  | actions.IncreaseScoreAction
  | actions.ResetScoreAction
  | actions.DieAction
  | actions.setHeighScoreAction
  | actions.TogglePauseAction
  | actions.MoveAction
  | actions.UpdateHeadAction
  | actions.UpdateBoardAction
  | actions.UpdateSnakeAction
  | actions.ChangeBoardDirectionAction
  | actions.PauseAction
  | actions.UnPauseAction;

export const rootReducer = combineReducers<RootState>({
  score: reducers.scoreReducer,
  heightScore: reducers.highScoreReducer,
  currentDirection: reducers.directionReducer,
  board: reducers.boardReducer,
  boardDirections: reducers.boardDirectionsReducer,
  pause: reducers.pauseReducer,
  snake: reducers.snakeReducer
});
