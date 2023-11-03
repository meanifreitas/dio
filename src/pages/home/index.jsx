import { useNavigate } from "react-router-dom";
import banner from '../../assets/banner.png';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Container, TextContent, Title, HighlightedTitle } from './styles';

const Home = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/login');
  }

  return (<>
    <Header />
    <Container>
      <div>
        <Title><br />
          <HighlightedTitle>
            Code
            <br />
          </HighlightedTitle>
          your global future now!
        </Title>
        <TextContent>
          Rule the technologies used by the most innovative companies in the world and face your new professiona challenge, evolving in community with the best experts.
        </TextContent>
        <Button title="Start now" variant="secondary" onClick={handleSignIn}></Button>
      </div>
      <div>
        <img src={banner} alt='Banner' />
      </div>
    </Container>
    </>)
}

export { Home };