import Button from '../Button';
import logo from '../../assets/logo-dio.png';
import {
  SearchInputContainer,
  Container,
  Input,
  Menu,
  RightMenu,
  Row,
  Wrapper
} from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt='DIO logo' />
          <SearchInputContainer>
            <Input placeholder='Search...'/>
          </SearchInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <RightMenu href='#'>Home</RightMenu>
          
          <Button title='Login'/>
          <Button title='Sign up'/>
        </Row>
      </Container>
    </Wrapper>
  )
}