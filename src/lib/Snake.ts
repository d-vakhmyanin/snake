import { Directions } from './constants';

type Coordinate = {
  x: number;
  y: number;
};

export class SnakeNode {
  coordinate: Coordinate;
  next: SnakeNode | null;

  constructor(x: number, y: number, node?: SnakeNode) {
    this.coordinate = { x, y };
    node ? (this.next = node) : (this.next = null);
  }
}

export class Snake {
  head: SnakeNode;

  constructor(x: number, y: number) {
    this.head = new SnakeNode(x, y);
  }

  expand(newNode: SnakeNode): void {
    const tmp = this.head.next;
    this.head.next = newNode;
    newNode.next = tmp;
  }

  moveBody(prevHeadCoordinate: Coordinate): Coordinate {
    let curNode = this.head.next;
    let prevNodeCoordinate = prevHeadCoordinate;

    while (curNode) {
      const tmp = curNode.coordinate;
      curNode.coordinate = prevNodeCoordinate;
      prevNodeCoordinate = tmp;
      curNode = curNode.next;
    }

    return prevNodeCoordinate;
  }
}
