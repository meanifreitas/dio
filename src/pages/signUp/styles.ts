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
  max-width: 300px;
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
  margin-bottom: 10px;
`;

export const SignUpInfo = styled.p`
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
`;

export const Row = styled.div`
  max-width: 300px;
`;