import styled from 'styled-components';
export const WrapperSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
export const WrapperSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 28px;
`;

export const SearchBy = styled.span`
  font-size: ${props => props.theme.fontSizes[2]}px;
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${props => props.theme.fontSizes[5]}px;
  }
`;
