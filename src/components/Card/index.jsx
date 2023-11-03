import { FiThumbsUp } from 'react-icons/fi'

import {
  BackGroundImage,
  CardContainer,
  Content,
  HasInfo,
  PostInfo,
  UserInfo,
  UserPic
} from './styles';

export default function Card() {
  return (
    <CardContainer>
      <BackGroundImage />
      <Content>
        <UserInfo>
          <UserPic src="https://avatars.githubusercontent.com/u/61467221?v=4"/>
          <div>
            <h4>Meani Freitas</h4>
            <p>8 min ago</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>HTML and CSS project</h4>
          <p>HTML and CSS course... <strong>More</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
            <FiThumbsUp />10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
}