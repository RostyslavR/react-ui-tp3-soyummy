import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 132px 16px 83px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    align-items: start;
    max-width: 768px;
    padding: 204px 32px 195px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 226px 100px 267px;
  }
`;

export const HeroTitle = styled.h1`
  min-width: 303px;

  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: 60px;
  line-height: 60px;

  text-align: center;
  letter-spacing: -0.005em;

  color: ${p => p.theme.colors.greenAccent};

  margin-bottom: 14px;

  & span {
    color: ${p => p.theme.colors.secondaryDarkBackground};
  }

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 72px;

    font-size: 72px;
    line-height: 72px;
    text-align: left;
    margin-bottom: 22px;
  }

  @media screen and (min-width: 1440px) {
    width: 505px;
    height: 100px;
    font-size: 100px;
    line-height: 100px;

    margin-bottom: 14px;
  }
`;

export const HeroText = styled.p`
  width: 248px;
  height: 72px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 364px;

  color: ${p => p.theme.colors.secondaryDarkText};

  @media screen and (min-width: 768px) {
    width: 346px;
    height: 56px;

    font-size: 14px;
    line-height: 18px;

    text-align: left;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 441px;
    height: 73px;

    font-size: 18px;
    line-height: 24px;
    margin-bottom: 49px;
  }
`;
