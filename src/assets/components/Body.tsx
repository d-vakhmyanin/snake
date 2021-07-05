import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Directions } from '../../lib/constants';

const shake = keyframes`
  0% { 
    margin-left: 0;
    margin-right: 0;
    opacity: 0.8
  }
  50% {
    margin-left: 5px;
    opacity: 0.9
  }
  100%{
    margin-right: 5px; 
    opacity: 1
  }
`;

const RotatingSvg = styled.svg<{ direction: Directions }>`
  transform: ${({ direction }) =>
    direction === Directions.Up
      ? ''
      : direction === Directions.Right
      ? 'rotate(90deg)'
      : direction === Directions.Down
      ? 'rotate(180deg)'
      : 'rotate(270deg)'};
  animation: ${shake} 0.4s infinite linear;
  /* //transform: translateX(30px);
  transition: all 0.4s ease; */
`;

type Props = {
  direction: Directions;
};

export const Body: React.FC<Props> = ({ direction }) => (
  <RotatingSvg
    direction={direction}
    width="32px"
    height="45px"
    viewBox="0 0 32 45"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.226246 42.6229C-1.02999 40.6491 4.75895 39.9464 2.91084 36.9314C1.06271 33.9163 1.15997 29.8773 1.15997 29.8773C1.15997 29.8773 1.06267 24.1033 2.91076 20.491C4.75884 16.8786 7.61855 14.2333 7.61855 14.2333C7.61855 14.2333 4.75882 12.8538 2.91072 9.73924C1.06259 6.62467 -0.623096 1.97281 0.22606 1.36906C1.07522 0.765306 1.99554 1.38748 2.91068 1.36906C4.8262 1.33052 6.48951 1.369 9.92044 1.369C14.8302 1.369 16.7282 -0.736729 20.3314 0.274949C20.6971 0.377643 22.8847 1.2502 23.2818 1.36898C27.5908 2.65776 25.0646 4.20556 27.8893 8.12496C30.714 12.0443 30.4962 14.2333 30.4962 14.2333C30.4962 14.2333 30.6519 20.5193 27.8894 24.1317C25.127 27.744 25.5582 29.8773 25.5582 29.8773C25.5582 29.8773 25.4577 30.7875 27.8894 33.8025C30.3212 36.8175 21.8588 42.6228 21.8588 42.6228C21.8588 42.6228 1.48248 44.5966 0.226246 42.6229Z"
      transform="matrix(1 0 0 0.99999994 0.5 0.5)"
      id="New-shape-4"
      fill="#F8C822"
      fillRule="evenodd"
      stroke="#808080"
      strokeWidth="1"
    />
    <path
      d="M0.177557 5.0167C0.177557 5.0167 3.57058 3.46901 10.3356 2.21481C17.1005 0.960632 27.2375 0 27.2375 0C27.2375 0 26.0889 1.97463 25.2565 3.2288C24.424 4.48295 24.1184 5.01664 24.1184 5.01664C24.1184 5.01664 18.0911 6.63102 12.1059 7.47161C6.12064 8.31216 0.177575 8.3789 0.177575 8.3789C0.177575 8.3789 -0.0469954 7.22957 0.00895416 6.37758C0.064913 5.5256 0.177557 5.0167 0.177557 5.0167Z"
      transform="matrix(1 0 0 0.99999994 1.5602112 23.85675)"
      id="New-shape-5"
      fill="#000000"
      fillRule="evenodd"
      stroke="#808080"
      strokeWidth="1"
    />
    <path
      d="M0 4.08274C0 4.08274 4.03424 3.30887 10.7992 2.0547C17.5642 0.800534 21.8334 0 21.8334 0C21.8334 0 23.5898 1.06096 24.6996 2.58836C25.8094 4.11576 26.4699 5.2034 26.4699 5.2034C26.4699 5.2034 18.5548 6.47093 12.5695 7.3115C6.58431 8.15207 2.86618 8.43225 2.86618 8.43225C2.86618 8.43225 1.45628 7.08144 0.927296 6.1641C0.398311 5.24678 0 4.08274 0 4.08274Z"
      transform="matrix(1 0 0 0.99999994 2.5385284 4.377289)"
      id="New-shape-6"
      fill="#000000"
      fillRule="evenodd"
      stroke="#808080"
      strokeWidth="1"
    />
  </RotatingSvg>
);
