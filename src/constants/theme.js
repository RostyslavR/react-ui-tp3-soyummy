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
    primaryLightText: '#FAFAFA', // in footer,  and in darkTheme,
    primaryLightTextNoChange: '#FAFAFA', //  shoppingList
    normalDark: '#1E1F28', // buttons
    primaryDarkText: '#23262A', /// long text of recipy? header text
    primaryDarkTextNoChange: '#23262A', /// long text of recipy? header text
    secondaryDarkText: '#3E4462', /// titles of recipy, ingredients
    secondaryDarkTextNoChange: '#3E4462', ///
    tertiaryDarkText: '#001833', /// title of pages (Favorites, My receipies, categories, search, shopping list
 
    mainPageButtons: '#8AA936', /// main page buttons except footer! also my receipy
    greenAccent: '#8BAA36', // buttons  , footer in darkTheme     !!!!!!!!!!!!!!!!  checkbox
    greenAccentSearch: '#8BAA36', // search buttons
 

    SocialIcons: '#8BAA36', //  footer ND ADD RECEIPE social icons !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    footerSubscribeButtonBG: '#8BAA36', //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    footerTextLight: '#FAFAFA', // in foter text  !!!!!!!!!!!!!!!!!!!
    footerRightsReserved: '#22252A', // footer  text rights reserved
    footerBG: '#22252A', // dark color in footer
    headerAccentText: '#8BAA36',
    categoriesNames: ' #BDBDBD ',
    categoriesAccent: '#8BAA36',
    secondaryDarkBackground: '#22252A', ///  favorites button
    recipyLightBgItem: '  #EBF3D4',
    myRecipyDeleteButton: '#8BAA36', // my recipe  delete button background, no change
    normalGrey: '#f0f0f0', /// border in search form
    normalGreySelect: '#f0f0f0', /// background-color in search select
    lightSelector: '#FAFAFA', // background-color in search select option
    whiteBackgroundToBlack: '#ffffff', /// favorites bg
    blackCloseIconToWhite: '#333333', // icon close at shopping list
    blackTextToWhite: '#000000',
    //  no change
    whiteText: '#ffffff',
    blackText: '#000000',
    quaternaryDarkText: '#22252A',

    greenValidation: '#3CBC81', // in forms
    yellowValidation: '#F6C23E',
    redValidation: '#E74A3B',

    lightBackground: '#fafafa',
    lightBackgroundBody: '#fafafa',
    primaryDarkBackground: '#1E1F28',
    messageBackground: '#53545599',

    secondaryGrey: '#656565',
    secondaryGreyBg: '#C4C4C4',
    darkAccent: '#22252A', // footer
    lightGray: '#bdbdbd', //categories list text
    secondaryAccent: '#EBF3D4',
    whiteBackground: '#ffffff',
    whiteBackgroundDish: '#ffffff',
    secondaryLightBackground: '#ECECEC',
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
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
  },

  breakPoints: {
    mobile: '375px',
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
