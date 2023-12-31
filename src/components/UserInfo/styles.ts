import styled from 'styled-components';
import { IStyledUserInfo } from './types';

export const Container = styled.div`
  display:flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const UserPic = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 3px solid #FFFF;
  margin-right: 12px;
`;

export const NameText = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #FFFF
`;

export const Progress = styled.div<IStyledUserInfo>`
  width: 180px;
  height: 6px;
  background-color: #FFFF;
  border-radius: 3px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({percent}) => percent}%;
    height: 6px;
    border-radius: 3px;
    background-color: #23D07A;
  }
`;