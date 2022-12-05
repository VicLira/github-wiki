import { ButtonContainer } from './styles';

interface IButton {
  onClick: () => void;
}

const Button = ({onClick}:IButton) => {
  return (
    <ButtonContainer onClick={onClick}>
        Buscar
    </ButtonContainer>
  );
}

export default Button;