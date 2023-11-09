import Button from '../Button';
import logo from '../../assets/logo-dio.png';
import {
  SearchInputContainer,
  Container,
  Input,
  Menu,
  RightMenu,
  Row,
  Wrapper,
  UserPicture
} from './styles';

export default function Header({auth}) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt='DIO logo' />
          {auth ? (<>
            <SearchInputContainer>
              <Input placeholder='Search...'/>
            </SearchInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
            </>) : null}
        </Row>
        <Row>
          {auth? (<>
            <UserPicture src="https://avatars.githubusercontent.com/u/61467221?v=4" />
            </>) : (<>
            <RightMenu href='/'>Home</RightMenu>
            <Button title='Login'/>
            <Button title='Sign up'/>
            </>)}
        </Row>
      </Container>
    </Wrapper>
  )
}