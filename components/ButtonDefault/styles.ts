import styled from "styled-components";

export const ButtonContainer = styled.div`
  margin-top: auto;
  padding: 0 20px 110px 20px;
  width: 100%;
  & > button {
    max-width: 380px;
    width: 100%;
    height: 48px;
    background: #F52D2D;
    border: 1px solid #F52D2D;
    border-radius: 8px;
    font-family: 'Helvetica';
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;
    &:hover {
        cursor: pointer;
    }
  };
`;