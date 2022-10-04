import { FormControl } from '@mui/material';
import styled from 'styled-components';

export const LoginPageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image: url('/cine-background.png');
background-size: cover;
background-repeat:no-repeat;
background-position: center center;
`;

export const LoginMainContainer = styled.main`
  height: 100vh;
  width: 100vw;
  text-align: center;

  & > div {
    padding: 90px 20px 0 20px;
    
    & > p {
      text-align: start;
      margin: 8px 0;
    }
  }
`;

export const LoginFormStyled = styled(FormControl)(({theme}) => ({
  width: '100%',
  borderRadius: '8px',
  backgroundColor: '#282828',
  '& .MuiInputBase-input': {
    color: '#A8A8A8',
  },
  '& .MuiSvgIcon-root': {
    color: '#A8A8A8',
  }
}));