import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/cine-background.png');
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center center;
`;

export const HomeMainContainer = styled.main`
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

export const LogoContainer = styled.div`
  padding-top: 64px;
`;

export const SloganContainer = styled.div`
  padding-top: 62px;
  & > h1 {
    font-family: 'Helvetica';
    font-weight: 700;
    font-size: 24px;
    color: #FFFFFF;
  };
  & > h2 {
    font-family: 'Helvetica Neue';
    font-weight: 500;
    font-size: 12px;
    color: #A8A8A8;
  };
`;

export const PersonaContainer = styled.div`
  padding: 10px 45px;
`;
