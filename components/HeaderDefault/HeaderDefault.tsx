import { HeaderContainer, IconContainer, LogoContainer } from "./styles";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

interface HeaderDefaultProps {
  isIconExists: Boolean,
  onClick?: () => void,
};

function HeaderDefault({ isIconExists, onClick }: HeaderDefaultProps) {
  return (
    <HeaderContainer>
      {isIconExists &&
        <IconContainer onClick={onClick}>
          <ArrowBackIosNewOutlinedIcon />
        </IconContainer>
      }
      <LogoContainer >
        <img
          src='/logo-ignisflix.svg'
          alt="Logo da IgnisFlix inciando com um ícone de um rolo de filmagem seguido do nome IgnisFlix"
        />
      </LogoContainer>
    </HeaderContainer>
  )
};

export default HeaderDefault;