import React from 'react';
import styled from 'styled-components';

import { Directions } from '../../lib/constants';

const RotatingSvg = styled.svg<{ direction: Directions }>`
  transform: ${({ direction }) =>
    direction === Directions.Up
      ? ''
      : direction === Directions.Right
      ? 'rotate(90deg)'
      : direction === Directions.Down
      ? 'rotate(180deg)'
      : 'rotate(270deg)'};
`;

type Props = {
  direction: Directions;
};

export const Head: React.FC<Props> = ({ direction }) => {
  return (
    <RotatingSvg
      direction={direction}
      width="22px"
      height="37px"
      viewBox="0 0 22 37"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.45695 29.2939C2.45695 29.2939 0.184762 25.1499 0.0164561 20.5439C-0.15185 15.938 1.02633 13.3178 1.02633 13.3178C1.02633 13.3178 5.30512 -4.0018e-06 9.95733 1.33393e-06C14.6095 9.33753e-06 19.3827 11.5724 19.3827 11.5724C19.3827 11.5724 20.645 15.4135 20.645 19.4075C20.645 23.4015 17.8679 28.0731 17.8679 28.0731C17.8679 28.0731 14.6095 32.6081 9.95729 32.6081C5.30508 32.608 2.45695 29.2939 2.45695 29.2939Z"
        transform="matrix(1 0 0 0.99999994 0.5 3.5351562)"
        id="New-shape"
        fill="#F8C822"
        fillRule="evenodd"
        stroke="#808080"
        strokeWidth="1"
      />
      <path
        d="M1.93557 7.51821C0.866582 7.51821 -1.92615e-06 5.8352 0 3.7591C2.56821e-06 1.68301 0.86659 -6.66967e-07 1.93558 0C3.00456 1.33393e-06 3.87115 1.68301 3.87115 3.75911C3.87114 5.8352 3.00456 7.51821 1.93557 7.51821Z"
        transform="matrix(1 0 0 0.99999994 3.4619293 13.413696)"
        id="Ellipse"
        fill="#FFFDFD"
        fillRule="evenodd"
        stroke="none"
      />
      <path
        d="M1.93557 7.51821C0.866582 7.51821 -2.56821e-06 5.8352 0 3.7591C2.56821e-06 1.68301 0.866589 -6.66967e-07 1.93558 0C3.00456 1.33393e-06 3.87115 1.68301 3.87115 3.75911C3.87114 5.8352 3.00456 7.51821 1.93557 7.51821Z"
        transform="matrix(1 0 0 0.99999994 13.602631 13.413757)"
        id="Ellipse-2"
        fill="#FFFFFF"
        fillRule="evenodd"
        stroke="none"
      />
      <path
        d="M0.925708 1.92326C0.414452 1.92326 -6.42051e-07 1.49273 0 0.961631C6.42051e-07 0.430536 0.414454 -5.00225e-07 0.92571 1.66742e-07C1.43696 8.33708e-07 1.85142 0.430539 1.85142 0.961633C1.85142 1.49273 1.43696 1.92326 0.925708 1.92326Z"
        transform="matrix(1 0 0 0.99999994 4.4717865 14.287933)"
        id="Ellipse-3"
        fill="#D3D3D3"
        fillRule="evenodd"
        stroke="none"
      />
      <path
        d="M0.925707 1.92326C0.414453 1.92326 -1.2841e-06 1.49273 0 0.961631C0 0.430536 0.414456 -5.00225e-07 0.92571 1.66742e-07C1.43696 8.33708e-07 1.85142 0.430539 1.85142 0.961633C1.85142 1.49273 1.43696 1.92326 0.925707 1.92326Z"
        transform="matrix(1 0 0 0.99999994 14.612473 14.287964)"
        id="Ellipse-4"
        fill="#D3D3D3"
        fillRule="evenodd"
        stroke="none"
      />
      <path
        d="M1.67258 7.60563L1.67258 2.71005L0 0"
        transform="matrix(1 0 0 0.99999994 9.131897 1.0001831)"
        id="New-shape-2"
        fill="none"
        fillRule="evenodd"
        stroke="#FF000B"
        strokeWidth="2"
      />
      <path
        d="M0 2.53521L1.65155 0"
        transform="matrix(1 0 0 0.99999994 10.804459 1)"
        id="New-shape-3"
        fill="none"
        fillRule="evenodd"
        stroke="#FF000B"
        strokeWidth="2"
      />
    </RotatingSvg>
  );
};
