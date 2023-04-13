import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { backgroundImage } from 'styled-system';
import imgMob from '../../images/welcomePage/welcome_hero_mob_1x.png'
import imgTab from '../../images/welcomePage/welcome_hero_tab_1x.png'
import imgDesk from '../../images/welcomePage/welcome_hero_desk_2x.jpg'

const breakpoints = {
  sm: `@media (min-width: 481px) and (max-width: 768px)`,
  md: `@media (min-width: 769px) and (max-width: 1024px)`,
  lg: `@media (min-width: 1025px)`,
};

export const WelcomeImage = styled.div`
background-image: url(${imgMob});
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
height: 100vh;
${breakpoints.sm}{
  background-image: url(${imgTab});
}
${breakpoints.md}{
  background-image: url(${imgTab});
}
${breakpoints.lg}{
  background-image: url(${imgDesk});
}
`;


export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: auto;
  flex-direction: column;
  max-width: 305px;
  padding-top: 228px;
  padding-left: 35px;
  padding-right: 35px;
  svg {
    width: 50px;
    height: 50px;

    ${breakpoints.sm}{
      width: 68px;
      height: 68px;
    }

    ${breakpoints.md}{
      width: 68px;
      height: 68px;
    }

    ${breakpoints.lg}{
      width: 68px;
      height: 68px;
    }
  }
`;


export const icon = styled.button`

`;

export const BigText = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 24px;

letter-spacing: -0.02em;
font-feature-settings: 'liga' off;

color: #FAFAFA;
margin-top: 28px;
width: 250px;

${breakpoints.sm}{
  width: 288px;
height: 35px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 28px;

letter-spacing: -0.02em;
font-feature-settings: 'liga' off;

color: #FAFAFA;
}

${breakpoints.lg}{
  width: 288px;
  height: 35px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: #FAFAFA;
}

`;

export const MainText = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;

text-align: center;
letter-spacing: -0.02em;

color: #FAFAFA;
margin-bottom: 44px;
margin-top: 14px;
width: 305px;

${breakpoints.sm}{
width: 450px;
height: 72px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
/* or 133% */

text-align: center;
letter-spacing: -0.02em;

color: #FAFAFA;
}

${breakpoints.md}{
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
text-align: center;
letter-spacing: -0.02em;
color: #FAFAFA;
width: 505px;
}

${breakpoints.lg}{
  width: 540px;
height: 72px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
text-align: center;
letter-spacing: -0.02em;
color: #FAFAFA;
}

`

export const StyledLink1 = styled(Link)`
background-color: #8BAA36;
border-radius: 24px 44px;
border: none;
width: 95px;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
color: #FAFAFA;
transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;


${breakpoints.sm}{
  width: 144px;
  height: 61px;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

${breakpoints.md}{
  width: 144px;
  height: 61px;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

${breakpoints.lg}{
  width: 144px;
  height: 67px;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

  &:hover{
    background-color: transparent;
    border: 3px solid #FAFAFA;
    width: 186px;
  }
  &:focus{
    background-color: transparent;
    border: 3px solid #FAFAFA;
    width: 186px;
  }
`;


export const StyledLink2 = styled(Link)`
background-color: #8BAA36;

border-radius: 24px 44px;
border: none;
width: 95px;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
color: #FAFAFA;
transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;

${breakpoints.sm}{
  width: 144px;
  height: 61px;
}

${breakpoints.md}{
  width: 144px;
  height: 61px;
}

${breakpoints.lg}{
  width: 144px;
  height: 67px;
}

&:hover{
  background-color: transparent;
  border: 3px solid #FAFAFA;
  width: 186px;
}
&:focus{
  background-color: transparent;
  border: 3px solid #FAFAFA;
  width: 186px;
}
`;