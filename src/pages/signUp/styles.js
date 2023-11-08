import styled from 'styled-components';

export const Container = styled.main`
  width: 100%
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 32px;
  line-height: 43px;
  color: #FFFF;
  width: 380px;
  max-width: 90%;
  margin-left: 65px;
`;

export const Wrapper = styled.div`
  width: 380px;
`;

export const SignUpTitle = styled.h2`
  font-family: 'Open Sans';
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
`;

export const SignUpSubtitle = styled.p`
  font-family: 'Open Sans';
  font-size: 18px;
  font-weight: 400;
`;