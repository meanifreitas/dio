import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { MdEmail, MdLock } from 'react-icons/md';

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

const Login = () => {
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
          <form>
            <Input placeholder="email" type="email" leftIcon={<MdEmail />}/>
            <Input placeholder="password" type="password" leftIcon={<MdLock />}/>
            <Button title="Sign in" variant="secondary" />
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