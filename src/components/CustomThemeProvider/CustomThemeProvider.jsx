import { ThemeProvider } from 'styled-components';
import { getTheme } from 'constants';
import { useUserTheme } from 'redux/useUserTheme';

export const CustomThemeProvider = ({ children }) => {
  const [userTheme] = useUserTheme();

  return <ThemeProvider theme={getTheme(userTheme)}>{children}</ThemeProvider>;
};
