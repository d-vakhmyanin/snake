import React, { useState } from 'react';
import styled from 'styled-components';

import { Head } from '../assets/components/Head';
import { Body } from '../assets/components/Body';
import { Food } from '../assets/components/Food';

import { CellsContent, Directions } from '../lib/constants';

const Wrapper = styled.div`
  width: 38px;
  height: 38px;
  border: 1px dashed black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  contentId: number;
  direction: Directions;
};

export const Cell: React.FC<Props> = ({ contentId, direction }) => {
  return (
    <Wrapper>
      {contentId === CellsContent.head && <Head direction={direction} />}
      {contentId === CellsContent.body && <Body direction={direction} />}
      {contentId === CellsContent.food && <Food />}
    </Wrapper>
  );
};
