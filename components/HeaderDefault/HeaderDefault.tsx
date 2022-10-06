import { HeaderContainer, IconContainer, LogoContainer } from "./styles";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useRouter } from "next/router";

interface HeaderDefaultProps {
  isIconExists: Boolean,
}

function HeaderDefault({ isIconExists }: HeaderDefaultProps) {
  const router = useRouter();
  return (
    <HeaderContainer>
      {isIconExists &&
        <IconContainer onClick={() => { router.back() }}>
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