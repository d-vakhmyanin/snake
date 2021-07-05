import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Cell } from './Cell';
import * as actions from '../_redux/actions';
import * as selectors from '../_redux/selectors';
import { useEffect } from 'react';
import { audios } from '../lib/constants';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background-color: #20d808;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

let interval: NodeJS.Timeout;

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
const audiosRefs: HTMLAudioElement[] = [];
const BoardComponent: React.FC<Props> = ({
  isPaused,
  pause,
  score,
  board,
  direction,
  boardDirections,
  move
}) => {
  const [audioIndex, setAudioIndex] = useState(0);
  const dieAudio = new Audio('https://www.mboxdrive.com/dieSound.mp3');

  useEffect(() => {
    if (isPaused) {
      clearInterval(interval);
    } else {
      interval = setInterval(() => {
        move();
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    for (const key in audios) {
      const tmp = new Audio((audios as any)[key]);
      tmp.load();
      audiosRefs.push(tmp);
    }
    dieAudio.load();
  }, []);

  useEffect(() => {
    if (score === 0) {
      pause();
      dieAudio.play();
    }
    audiosRefs[audioIndex].play();
    setAudioIndex((prev) => (prev < 4 ? prev + 1 : 0));
  }, [score]);

  return (
    <Container>
      {board.map((row, ri) => (
        <Row key={ri}>
          {row.map((cell, ci) => (
            <Cell
              key={ri.toString() + ci}
              contentId={cell}
              direction={boardDirections[ri][ci] || direction}
            />
          ))}
        </Row>
      ))}
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  board: selectors.getBoard(state),
  direction: selectors.getDirection(state),
  boardDirections: selectors.getBoardDirections(state),
  score: selectors.getScore(state),
  isPaused: selectors.getPause(state)
});

const mapDispatchToProps = {
  move: actions.move,
  pause: actions.pause
};

export const Board = connect(mapStateToProps, mapDispatchToProps)(BoardComponent);
