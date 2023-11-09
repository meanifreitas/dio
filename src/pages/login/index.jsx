import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';

import {
  Container,
  Wrapper,
  Column,
  Row,
  Title,
  LoginTitle,
  LoginSubtitle,
  ForgotPasswordText,
  SignUpText
} from './styles';

const schema = yup.object({
  email: yup.string().email('type a valid email').required(),
  password: yup.string().min('5', 'password must be at least 5 characters').required()
});

const Login = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = async formData => {
    if (formData.email && formData.password) {
      try {
        const { data } = await api.get(`users?email=${formData.email}&password=${formData.password}`);
  
        if (data.length) {
          navigate('/feed');
        } else {
          alert('Invalid email or password!')
        }
      } catch (e) {
        alert('Server error. Try again!');
      }
    }
  }

  return (<>
    <Header />
    <Container>
      <Column>
        <Title>The platform for you to learn from experts, master the main technologies and enter the most desired companies faster.</Title>
      </Column>
      <Column>
        <Wrapper>
          <LoginTitle>Start now</LoginTitle>
          <LoginSubtitle>Log in and make the change._</LoginSubtitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="email"
              control={control}
              placeholder="email"
              type="email"
              leftIcon={<MdEmail />}
              errorMessage={errors?.email?.message}
            />
            <Input
              name="password"
              control={control}
              placeholder="password"
              type="password"
              leftIcon={<MdLock />}
              errorMessage={errors?.password?.message}
            />
            <Button title="Sign in" variant="secondary" type="submit" onClick={onSubmit}/>
          </form>
          <Row>
            <ForgotPasswordText>Forgot my password</ForgotPasswordText>
            <SignUpText>Create an account</SignUpText>
          </Row>
        </Wrapper>
      </Column>
    </Container>
  </>)
}

export { Login }