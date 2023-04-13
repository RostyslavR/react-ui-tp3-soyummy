import { useState } from 'react';
import { useUserTheme } from 'redux/useUserTheme';

import { Ball, Checkbox, Label, Switcher } from './ThemeToggler.styled';

export const ThemeToggler = () => {
  const [userTheme, setUserTheme] = useUserTheme();
  const [mode, setMode] = useState(userTheme ?? 'light');

  const changeTheme = () => {
    const newTheme = mode === 'light' ? 'dark' : 'light';
    setUserTheme(newTheme);
    setMode(newTheme);
  };

  return (
    <Switcher>
      <Checkbox
        type="checkbox"
        checked={mode === 'dark'}
        id="theme-switcher"
        onChange={changeTheme}
      />
      <Label mode={mode} htmlFor="theme-switcher">
        <Ball />
      </Label>
    </Switcher>
  );
};
