import { Container, NameText, Progress, UserPic} from './styles';

export default function UserInfo({name, img, percent}) {
  return (
    <Container>
      <UserPic src={img} />
        <div>
          <NameText>{name}</NameText>
          <Progress percent={percent}/>
        </div>
    </Container>
  );
}