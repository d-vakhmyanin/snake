import { ActionType, createAction } from 'typesafe-actions';
import { Directions } from '../lib/constants';
import { Snake } from '../lib/Snake';

export const changeDirection = createAction('changeDirection')<Directions>();

export const increaseScore = createAction('increaseScore')();
export const resetScore = createAction('resetScore')();
export const setHeighScore = createAction('setHeighScore')<number>();

export const move = createAction('move')();
export const updateHeadPosition = createAction('updateHeadPosition')<{ x: number; y: number }>();
export const updateSnake = createAction('updateSnake')<Snake>();
export const updateBoard = createAction('updateBoard')<number[][]>();
export const changeBoardDirection =
  createAction('changeBoardDirection')<{ x: number; y: number; dir: Directions }>();
export const resetBoardDirections = createAction('resetBoardDirections')();

export const eat = createAction('eat')();
export const die = createAction('die')();

export const togglePause = createAction('togglePause')();
export const pause = createAction('pause')();
export const unPause = createAction('unPause')();

export type ChangeDirectionAction = ActionType<typeof changeDirection>;
export type IncreaseScoreAction = ActionType<typeof increaseScore>;
export type ResetScoreAction = ActionType<typeof resetScore>;
export type setHeighScoreAction = ActionType<typeof setHeighScore>;
export type MoveAction = ActionType<typeof move>;
export type EatAction = ActionType<typeof eat>;
export type DieAction = ActionType<typeof die>;
export type TogglePauseAction = ActionType<typeof togglePause>;
export type UpdateSnakeAction = ActionType<typeof updateSnake>;
export type UpdateHeadAction = ActionType<typeof updateHeadPosition>;
export type UpdateBoardAction = ActionType<typeof updateBoard>;
export type ChangeBoardDirectionAction = ActionType<typeof changeBoardDirection>;
export type PauseAction = ActionType<typeof pause>;
export type UnPauseAction = ActionType<typeof unPause>;
