import { Avatar, Button, Card, CardActions, CardContent, FormControl, Typography } from '@mui/material';
import styled from 'styled-components';

export const MoviesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/cine-background.png');
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center center;
`;

export const MoviesMainContainer = styled.main`
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

export const WelcomeContainer = styled.h1`
  text-align: start;
  padding: 31px 20px 28px 20px;
  margin: 0;
  font-family: 'Helvetica';
  font-weight: 700;
  font-size: 24px;
  & > span {
    color: #A8A8A8;
  }
`;

export const SearchContainer = styled.div`
  padding: 0 20px;
`;

export const MoviesFormStyled = styled(FormControl)(({theme}) => ({
  width: '100%',
  borderRadius: '50px',
  backgroundColor: '#282828',
  '& .MuiInputBase-input': {
    color: '#A8A8A8',
  },
  '& .MuiSvgIcon-root': {
    color: '#A8A8A8',
  }
}));

export const MoviesContainer = styled.div`
  padding: 40px 20px;
  text-align: start;
`;

export const MoviesCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const MovieCard = styled(Card)`
  height: 330px;
  width: 155px;
  margin-bottom: 16px;
  border-radius: 8px;
  background: #282828;
`;

export const MovieCardContent = styled(CardContent)`
  padding: 17px 14px 19px 8px;
`;

export const MovieCardAverage = styled(Avatar)`
  position: 'relative';
  top: 220px;
  left: 6px;
  font-family: 'Helvetica';
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  background-color: #000000;
  border: 1.6px solid;
  border-color: linear-gradient(215.46deg, #F52D2D 17.76%, #3A2FAF 85.58%);
`;

export const MovieCardTitle = styled(Typography)`
  font-family: 'Helvetica';
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  height: 20px;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MovieCardOverview = styled(Typography)`
  font-family: 'Helvetica';
  font-weight: 400;
  font-size: 10px;
  line-height: 11px;
  color: #A8A8A8;
  height: 22px;
  display: -webkit-box;   
  -webkit-line-clamp: 2;   
  -webkit-box-orient: vertical;     
  overflow: hidden; 
`;

export const MovieCardActions = styled(CardActions)`
  margin: 0;
  padding: 0;
  justify-content: flex-end;
`;

export const MovieCardButton = styled(Button)`
  padding: 0;
  text-transform: lowercase;
  font-family: 'Helvetica';
  font-weight: 400;
  font-size: 10px;
  line-height: 11px;
  color: #FFFFFF;
`;