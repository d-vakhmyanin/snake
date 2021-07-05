import { createSelector } from 'reselect';

export const getBoard = (state: RootState) => state.board;

export const getDirection = (state: RootState) => state.currentDirection;

export const getSnake = (state: RootState) => state.snake;

export const getBoardDirections = (state: RootState) => state.boardDirections;

export const getScore = (state: RootState) => state.score;

export const getHighScore = (state: RootState) => state.heightScore;

export const getPause = (state: RootState) => state.pause;
