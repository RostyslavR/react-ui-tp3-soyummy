import styled from 'styled-components';

export const SectionTitle = styled.h3`
  margin-bottom: 8px;
  font-family: ${({ theme: { fonts } }) => fonts.primary};
  font-size: 24px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.semibold};
`;
