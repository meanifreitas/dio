import Header from '../../components/Header';
import Card from '../../components/Card';
import UserInfo from '../../components/UserInfo';
import { Container, Column, HighlightedTitle, Title } from './styles';

const Feed = () => {
  return (<>
    <Header auth={true}/>
    <Container>
      <Column flex={3}>
        <Title>Feed</Title>
        <Card />
        <Card />
        <Card />
        <Card />
      </Column>
      <Column flex={1}>
        <HighlightedTitle># WEEK RANKING</HighlightedTitle>
        <UserInfo name="Meani" percent={80} img="https://avatars.githubusercontent.com/u/61467221?v=4"/>
        <UserInfo name="Meani" percent={75} img="https://avatars.githubusercontent.com/u/61467221?v=4"/>
        <UserInfo name="Meani" percent={60} img="https://avatars.githubusercontent.com/u/61467221?v=4"/>
        <UserInfo name="Meani" percent={45} img="https://avatars.githubusercontent.com/u/61467221?v=4"/>
      </Column>
    </Container>
    </>)
}

export { Feed };