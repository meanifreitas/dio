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
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { Link } from 'react-router-dom';

export default function Header() {
  const { user, handleSignOut } = useContext(AuthContext);

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to='/'>
            <img src={logo} alt='DIO logo' />
          </Link>
          {user.id ? (<>
            <SearchInputContainer>
              <Input placeholder='Search...'/>
            </SearchInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
            </>) : null}
        </Row>
        <Row>
          {user.id ? (<>
            <UserPicture src="https://avatars.githubusercontent.com/u/61467221?v=4" />
            <a href="/" onClick={handleSignOut}>Sign out</a>
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