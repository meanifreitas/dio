import Header from '../../components/Header';
import {
  Container,
  Title,
  Column,
  Wrapper,
  SignUpTitle,
  SignUpSubtitle,
  SignUpInfo,
  Row
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { MdAccountCircle, MdEmail, MdLock } from 'react-icons/md'

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email('type a valid email').required(),
  password: yup.string().min('5', 'password must be at least 5 characters')
});

export const SignUp = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = formData => {

  } 

  return (<>
    <Header></Header>
    <Container>
      <Column>
        <Title>The plataform for you to learn from experts, master the main technologies and enter the most desired companies faster.</Title>
      </Column>
      <Column>
        <Wrapper>
          <SignUpTitle>Start now free</SignUpTitle>
          <SignUpSubtitle>Sign up and make the change._</SignUpSubtitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              control={control}
              name="name"
              placeHolder="full name"
              leftIcon={<MdAccountCircle />}
              errorMessage={errors?.name?.message}
            />
            <Input
              control={control}
              name="email"
              placeHolder="email"
              leftIcon={<MdEmail />}
              errorMessage={errors?.email?.message}
            />
            <Input
              control={control}
              name="password"
              placeHolder="password"
              leftIcon={<MdLock />}
              errorMessage={errors?.password?.message}
            />
            <Button title="Sign up" variant="secondary" type="submit" onClick={onSubmit}/>
          </form>
          <Row>
            <SignUpInfo>By clicking "Sign up", I hereby agree to the Privacy Policies of the Terms of Use from DIO.</SignUpInfo>
          </Row>
        </Wrapper>
      </Column>
    </Container>
  </>);
}