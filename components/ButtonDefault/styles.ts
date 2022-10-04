import styled from "styled-components";

export const ButtonContainer = styled.div`
  margin-top: auto;
  padding: 0 20px;
  position: absolute;
  bottom: 110px;
  width: 100%;
  & > button {
    width: 100%;
    max-width: 335px;
    height: 48px;
    background: #F52D2D;
    border: 1px solid #F52D2D;
    border-radius: 8px;
    font-family: 'Helvetica';
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;
  };
`;