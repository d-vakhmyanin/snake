import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Board } from './components/Board';
import { Scores } from './components/Scores';
import { Directions } from './lib/constants';
import * as actions from './_redux/actions';
import * as selectors from './_redux/selectors';

const Wrapper = styled.div`
  background-color: #3a3a3a;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  box-sizing: border-box;
`;

const AppComponent: React.FC<typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>> = ({
  isPaused,
  unPause,
  changeDirection
}) => {
  const keyDownHandler = (event: KeyboardEvent) => {
    if (isPaused) unPause();
    switch (event.key) {
      case 'ArrowRight':
        changeDirection(Directions.Right);
        break;
      case 'ArrowLeft':
        changeDirection(Directions.Left);
        break;
      case 'ArrowUp':
        changeDirection(Directions.Up);
        break;
      case 'ArrowDown':
        changeDirection(Directions.Down);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    return () => window.removeEventListener('keydown', keyDownHandler);
  }, []);

  return (
    <Wrapper>
      <Scores />
      <Board />
    </Wrapper>
  );
};

const mapStateToProps = (state: RootState) => ({
  isPaused: selectors.getPause(state)
});

const mapDispatchToProps = {
  unPause: actions.unPause,
  changeDirection: actions.changeDirection
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
