import React from 'react';
import styled from 'styled-components';
import ReturnArrow from './ReturnArrow';
import Circles from '../ThemeComponents/Circles';

const StyledCircle = styled(Circles)`
  height: 50%;
`;

const Title = ({ text, className }) => {
  return (
    <div className={className}>
      <ReturnArrow />
      <div>
        <h1>Linjeforeningen Online</h1>
        <h2>{text}</h2>
      </div>
      <StyledCircle />
    </div>
  );
};

const StyledTitle = styled(Title)`
  text-align: center;
  color: ${props => props.theme.secondary};

  h1 {
    font-size: 26px;
  }

  h2 {
    font-size: 22px;
    font-style: italic;
    font-weight: 400;
  }
  width: 60%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default StyledTitle;
