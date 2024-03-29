import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    background-color: lightgray;
  }
`;

export const CastWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  // border: 2px solid green;
`;

export const CastSection = styled.div`
  width: 800px;
  margin: 20px auto;
`;

export const CastHeader = styled.h2`
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 5px;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 24px;

  ::before {
    content: ' ';
    display: inline-block;
    background-color: #FA320A;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  ::after {
    content: ' ';
    display: inline-block;
    background-color: #FA320A;
    width: 692px;
    height: 20px;
    margin-left: 10px;
  }
`;

export const CastViewAll = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Satisfy|Roboto&display=swap');

  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #3976DC;
  cursor: pointer;
  margin-right: 18px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CastArrowDown = styled.span`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #3976DC;
  margin-left: 2px;
`;

export const CastArrowUp = styled.span`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #3976DC;
  margin-left: 2px;
`;

export const CastPhotosDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 800px;
`;

export const CastItem = styled.div`
  width: 120px;
  margin: 10px 6px;
  align-items: flex-start;
`;

export const CastImg = styled.img`
  width: 125px;
  height: 145px;
  object-fit: cover;
  :hover {
    cursor: pointer;
  }
`;

export const CastActor = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Satisfy|Roboto&display=swap');

  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  :hover {
    color: #3976DC;
    cursor: pointer;
  }
`;

export const CastCharacter = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Satisfy|Roboto&display=swap');

  font-family: 'Roboto', sans-serif;
  color: #959595;
  font-size: 10.5px;
`;

export const ErrorMessage = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Satisfy|Roboto&display=swap');

  font-family: 'Satisfy', sans-serif;
  text-align: center;
  color: #F24130;
  margin: 20px auto;
`;
