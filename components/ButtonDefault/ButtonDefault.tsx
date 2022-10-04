import { ButtonContainer } from "./styles";

interface ButtonDefaultProps {
  text: String,
  path: String,
}

function ButtonDefault({ text, path }: ButtonDefaultProps) {
  return (
    <>
      <ButtonContainer>
        <button onClick={() => { location.href = `${path}` }}>
          {text}
        </button>
      </ButtonContainer>
    </>
  )
}

export default ButtonDefault;