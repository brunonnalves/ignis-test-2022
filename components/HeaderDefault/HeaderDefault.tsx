import { HeaderContainer, IconContainer, LogoContainer } from "./styles";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { IconButton } from "@mui/material";

interface HeaderDefaultProps {
  isIconExists: Boolean,
}

function HeaderDefault({ isIconExists }: HeaderDefaultProps) {
  return (
    <HeaderContainer>
      {isIconExists &&
        <IconContainer onClick={() => { history.back() }}>
          <ArrowBackIosNewOutlinedIcon />
        </IconContainer>
      }
      <LogoContainer >
        <img src='/logo-ignisflix.svg' />
      </LogoContainer>
    </HeaderContainer>
  )
}

export default HeaderDefault;