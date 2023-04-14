import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const ModalWindow = styled.div`
  position: relative;
  width: 330px;
  height: fit-content;
  padding: ${p => (p.status === 'logout' ? '44px 24px' : '32px 24px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  background-color: ${p => p.theme.colors.primaryLightText};
  border-radius: ${p => p.theme.radii.modal};
  opacity: 1;
  z-index: 20;
  overflow-y: hidden;
  overflow-x: hidden;
  
  @media screen and (min-width: 768px) {
    padding: 50px 40px;
    width: 480px;
  }
  @media screen and (min-width: 1440px) {
    padding: ${p => (p.status === 'logout' ? '50px' : '60px 50px')};
    width: 500px;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 29px;
  right: 29px;
`;