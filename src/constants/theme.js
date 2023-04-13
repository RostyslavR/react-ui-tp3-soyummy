import { lightTheme, darkTheme } from './colors';

export const theme = Object.freeze({
  fonts: {
    primary: 'Poppins, sans-serif',
    secondary: 'Montserrat, sans-serif',
    tertiary: 'Inter, sans-serif',
    quaternary: 'Helvetica, sans-serif',
  },
  fontSizes: [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 44, 48, 60, 72, 100],
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  lineHeights: {
    subheader: '1',
    content: '1.33',
    extraContent: '1.29',
    btnText: '1.12',
    userLink: '1.7',
    btn: '1.5',
    userModalLink: '1.57',
  },
  letterSpacings: {
    subheader: '-0.24px',
    content: '-0.02em',
  },
  colors: {
    primaryDarkText: '#23262A', /// long text of recipy
    secondaryDarkText: '#3E4462', /// titles of recipy, ingredients
    tertiaryDarkText: '#001833', /// title of pages (Favorites, My receipies, categories, search, shopping list
    quaternaryDarkText: '#22252A',
    footerBG: '#22252A',

    blackText: '#000000',

    primaryLightText: '#FAFAFA', // in footer,  and in darkTheme
    secondaryGrey: '#656565',
    whiteText: '#ffffff',

    normalDark: '#1E1F28', // buttons
    normalGrey: '#f0f0f0', // buttons, background in add recipy, search
    darkAccent: '#22252A', // footer
    greenAccent: '#8BAA36', // buttons  , footer in darkTheme
    lightGray: '#bdbdbd', //categories list text

    greenValidation: '#3CBC81', // in forms
    yellowValidation: '#F6C23E',
    redValidation: '#E74A3B',
    secondaryAccent: '#EBF3D4',

    lightBackground: '#fafafa',
    whiteBackground: '#ffffff',
    primaryDarkBackground: '#1E1F28',
    secondaryDarkBackground: '#22252A',

    secondaryLightBackground: '#ECECEC',
    secondaryGreyBg: '#C4C4C4',

    shoppingListProductName: '#3e4462',
  },
  radii: {
    none: '0',
    s: '4px',
    m: '6px',
    l: '8px',
    xl: '10px',
    xxl: '12px',
    xxxl: '16px',
    tem: '50px',
    modal: '24px',
    round: '50%',
  },

  border: {
    checkbox: '2px solid rgba(126, 126, 126, 0.5)',
    searchBar: '1px solid #F0F0F0',
    emailSubscription: '1px solid #FAFAFA',
    userProfile: '1px solid #23262A',
    userDarkProfile: '1px solid #22252A',
    btnBord: '1px solid #8BAA36',
  },

  devices: {
    minDevice: '320px',
    mobile: '425px',
    tablet: '768px',
    desktop: '1440px',
  },

  breakPoints: {
    mobile: '425px',
    tablet: '768px',
    desktop: '1440px',
  },
  transitions: {
    main: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
});

export const getTheme = userTheme => {
  const colors = userTheme === 'dark' ? darkTheme : lightTheme;
  return { ...theme, colors };
};
