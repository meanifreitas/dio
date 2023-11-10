import { Container, NameText, Progress, UserPic} from './styles';
import { IUserInfo } from './types';

export default function UserInfo({name, img, percent}: IUserInfo) {
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