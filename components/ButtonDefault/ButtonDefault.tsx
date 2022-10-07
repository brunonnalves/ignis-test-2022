import { ButtonContainer } from "./styles";

interface ButtonDefaultProps {
  text: string,
  onClick: () => void,
};

function ButtonDefault({ text, onClick }: ButtonDefaultProps) {
  return (
    <>
      <ButtonContainer>
        <button onClick={onClick}>
          {text}
        </button>
      </ButtonContainer>
    </>
  )
};

export default ButtonDefault;