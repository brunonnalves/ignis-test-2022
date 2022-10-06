import { IconButton } from "@mui/material";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
`;

export const IconContainer = styled(IconButton)`
  position: absolute !important;
  padding: 0;
  left: 32px;
  top: 69px;
  & .MuiSvgIcon-root {
    color: #A8A8A8;
    height: 20px;
  };
`;

export const LogoContainer = styled.div`
  padding-top: 64px;
`;