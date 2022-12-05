import { InputContainer } from './styles';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
  value: string,
}

const Input = ({value, onChange, ...rest}:IInput) => {
  return (
    <InputContainer>
        <input value={value} onChange={onChange} {...rest}/>
    </InputContainer>
  );
}

export default Input;