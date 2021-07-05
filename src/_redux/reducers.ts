import { createReducer } from 'typesafe-actions';

import * as actions from './actions';
import { boardLength, CellsContent, Directions } from '../lib/constants';
import { Snake, SnakeNode } from '../lib/Snake';

export const getInitialBoardAndSnake = () => {
  const arr: number[][] = [];
  const dirs: Directions[][] = [];
  for (let i = 0; i < boardLength; i++) {
    const tmp = new Array<number>(boardLength).fill(CellsContent.empty);
    arr.push(tmp);
    const tmpDir = new Array<Directions>(boardLength).fill(Directions.Right);
    dirs.push(tmpDir);
  }

  arr[7][2] = CellsContent.body;
  arr[7][3] = CellsContent.head;
  arr[7][12] = CellsContent.food;

  const snake = new Snake(7, 3);
  snake.expand(new SnakeNode(7, 2));

  return { arr, snake, dirs };
};

const initialScore = 0;
const initialDirection = Directions.Right;
const initialPause = true;

const sAndB = getInitialBoardAndSnake();
const initialBoard = sAndB.arr;
const initialSnake = sAndB.snake;
const initialBoardDirections = sAndB.dirs;

export const scoreReducer = createReducer<number>(initialScore)
  .handleAction(actions.increaseScore, (state) => state + 1)
  .handleAction(actions.resetScore, () => initialScore);

export const highScoreReducer = createReducer<number>(initialScore).handleAction(
  actions.setHeighScore,
  (_, { payload }) => payload
);

export const directionReducer = createReducer<Directions>(initialDirection).handleAction(
  actions.changeDirection,
  (state, { payload }) => {
    if (
      (state === Directions.Up && payload === Directions.Down) ||
      (state === Directions.Down && payload === Directions.Up)
    )
      return state;

    if (
      (state === Directions.Left && payload === Directions.Right) ||
      (state === Directions.Right && payload === Directions.Left)
    )
      return state;

    return payload;
  }
);

export const boardReducer = createReducer<number[][]>(initialBoard)
  .handleAction(actions.updateBoard, (_, { payload }) => [...payload])
  .handleAction(actions.die, (_) => initialBoard);

export const pauseReducer = createReducer<boolean>(initialPause)
  .handleAction(actions.togglePause, (state) => !state)
  .handleAction(actions.pause, () => true)
  .handleAction(actions.unPause, () => false);

export const snakeReducer = createReducer<Snake>(initialSnake)
  .handleAction(actions.updateHeadPosition, (snake, { payload }) => {
    snake.head.coordinate = { x: payload.x, y: payload.y };
    return snake;
  })
  .handleAction(actions.updateSnake, (_, { payload }) => payload);

export const boardDirectionsReducer = createReducer<Directions[][]>(
  initialBoardDirections
).handleAction(actions.changeBoardDirection, (state, { payload }) => {
  state[payload.x][payload.y] = payload.dir;
  return state;
});
