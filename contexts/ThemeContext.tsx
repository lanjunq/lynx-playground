import { createContext } from 'react';

export const isSystemInDarkMode = () => {
  // TODO: 获取系统主题
  return true;
};

export const ThemeContext = createContext<Boolean>(isSystemInDarkMode());
