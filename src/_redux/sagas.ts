import { getInitialBoardAndSnake } from './reducers';
import { boardLength, CellsContent } from './../lib/constants';
import { fork, put, select, takeEvery } from 'redux-saga/effects';

import * as actions from './actions';
import * as selectors from './selectors';
import { Directions } from '../lib/constants';
import { Snake, SnakeNode } from '../lib/Snake';
import { randomInt } from '../lib/utils';

const summonFood = (board: number[][]) => {
  while (true) {
    const x = randomInt(0, boardLength - 1);
    const y = randomInt(0, boardLength - 1);

    if (board[x][y] !== CellsContent.empty) continue;

    board[x][y] = CellsContent.food;
    break;
  }
};

function* moveWorker() {
  const state: RootState = yield select();

  const currentDirection = state.currentDirection;
  const board = state.board;
  const snake = state.snake;

  const { x, y } = snake.head.coordinate;
  let newX = x;
  let newY = y;

  switch (currentDirection) {
    case Directions.Up:
      newX--;
      break;
    case Directions.Down:
      newX++;
      break;
    case Directions.Left:
      newY--;
      break;
    case Directions.Right:
      newY++;
      break;
  }

  if (
    newX < 0 ||
    newY < 0 ||
    newX >= boardLength ||
    newY >= boardLength ||
    board[newX][newY] === CellsContent.body
  ) {
    yield put(actions.changeDirection(Directions.Right));
    const initials = getInitialBoardAndSnake();
    yield put(actions.updateSnake(initials.snake));
    yield put(actions.updateBoard(initials.arr));
    if (state.score > state.heightScore) yield put(actions.setHeighScore(state.score));
    yield put(actions.resetScore());
    return;
  } else {
    yield put(actions.updateHeadPosition({ x: newX, y: newY }));
    yield put(actions.changeBoardDirection({ x: newX, y: newY, dir: currentDirection }));
  }

  if (board[newX][newY] === CellsContent.food) {
    snake.expand(new SnakeNode(x, y));
    yield put(actions.increaseScore());
    summonFood(board);
  } else {
    const coordinateToRemove = snake.moveBody({ x, y });
    board[coordinateToRemove.x][coordinateToRemove.y] = CellsContent.empty;
  }

  board[newX][newY] = CellsContent.head;

  for (
    let cur: SnakeNode | null = snake.head.next, prev: SnakeNode = snake.head;
    cur !== null;
    prev = cur, cur = cur.next
  ) {
    const x = cur.coordinate.x;
    const y = cur.coordinate.y;
    // const dir = points.find((point) => point.x === x && point.y === y)?.direction;

    // if (dir) {
    //   console.log(prev === snake.head, prev === snake.head.next, prev === snake.head.next?.next);
    //   prev.direction = dir;
    // }
    board[x][y] = CellsContent.body;
  }

  yield put(actions.updateSnake(snake));
  yield put(actions.updateBoard(board));
}

function* moveWatcher() {
  yield takeEvery(actions.move, moveWorker);
}

// function* changeDirectionWorker({ payload }: actions.ChangeDirectionAction) {
//   const snake: Snake = yield select(selectors.getSnake);

//   snake.head.direction = payload;
//   yield put(actions.updateSnake(snake));

//   const points: { x: number; y: number; direction: Directions }[] = yield select(
//     selectors.getTurningPoints
//   );
//   points.push({ x: snake.head.coordinate.x, y: snake.head.coordinate.y, direction: payload });
//   yield put(actions.updateTurningPoints(points));
// }

// function* changeDirectionWatcher() {
//   yield takeEvery(actions.changeDirection, changeDirectionWorker);
// }

export function* rootSaga() {
  yield fork(moveWatcher);
  // yield fork(changeDirectionWatcher);
}
