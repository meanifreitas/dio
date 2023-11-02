import { InputContainer, IconContainer, InputText } from './styles';

export default function Input({leftIcon, name, ...rest}) {
  return (
    <InputContainer>
      {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>): null}
      <InputText {...rest}/>
    </InputContainer>
  );
}