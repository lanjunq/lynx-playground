import React  from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.jsx';
import type { CSSProperties } from '@lynx-js/types';

// 按钮组件接口定义
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}

export const Button = ({ children, onClick, style = {} }: ButtonProps) => {
  const [active, setActive] = React.useState(false);
  const isDarkMode = useContext(ThemeContext);

  const buttonStyle: CSSProperties = {
    // 默认样式
    padding: '1em',
    borderRadius: '0.5em',
    backgroundColor: isDarkMode 
      ? (active ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)')
      : (active ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.05)'),
    border: isDarkMode 
      ? '1px solid rgba(255, 255, 255, 0.2)'
      : '1px solid rgba(0, 0, 0, 0.1)',
    color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : '#333',
    transition: 'all 0.15s ease',
    transform: active ? 'scale(0.95)' : 'scale(1)',
    boxShadow: active 
      ? (isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.3)' : '0 0 10px rgba(0, 0, 0, 0.2)')
      : 'none',
    // 合并自定义样式
    ...style,
  };

  return (
    <view
      style={buttonStyle}
      bindtouchstart={() => setActive(true)}
      bindtouchcancel={() => setActive(false)}
      bindtouchend={() => setActive(false)}
      catchtap={onClick}
    >
      {children}
    </view>
  );
};

export default Button; 