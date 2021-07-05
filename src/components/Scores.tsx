import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import * as selectors from '../_redux/selectors';

const Container = styled.div`
  position: absolute;
  width: 85%;
  top: 15px;
  left: 15px;
  color: #dadada;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const ScoresComponent: React.FC<Props> = ({ currentScore, highScore }) => {
  return (
    <Container>
      <p>Current score: {currentScore}</p>
      <p>High score: {highScore}</p>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentScore: selectors.getScore(state),
  highScore: selectors.getHighScore(state)
});

const mapDispatchToProps = {};

export const Scores = connect(mapStateToProps, mapDispatchToProps)(ScoresComponent);
