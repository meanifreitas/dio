import { styled } from 'styled-components';

export const Container = styled.main`
  width: 70%;
  max-width: 70%;
  height: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const column = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
  color: #FFFFF;
`;

export const TextContent = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  width: 420;
  margin-bottom: 20px;
  line-height: 22px;
  color: #FFFFFF;
`;
