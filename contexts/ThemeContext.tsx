import React, { createContext, useContext } from 'react';

export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

interface ThemeContextType {
  theme: ThemeMode;
}

const ThemeContext = createContext<ThemeContextType>({ theme: ThemeMode.Light });

const getSystemThemeMode = () => {
  // TODO: 获取系统主题
  return ThemeMode.Dark;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeContext.Provider value={{ theme: getSystemThemeMode() }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
