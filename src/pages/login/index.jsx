import { Link } from "react-router-dom";
import banner from '../../assets/banner.png';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { Container, TextContent, Title } from './styles';

const Login = () => {
  return (<>
    <Header />
    <Container>
      <div>
        <Title><br />
          your global future now!
        </Title>
        <TextContent>
          Rule the technologies used by the most innovative companies in the world and face your new professiona challenge, evolving in community with the best experts.
        </TextContent>
        <Button title="Start now" variant="secondary" onClick={() => null}></Button>
      </div>
      <div>
        <Input placeHolder="email"/>
      </div>
    </Container>
    </>)
}

export { Login };