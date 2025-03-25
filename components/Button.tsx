import { useState } from 'react'

// 按钮组件接口定义
export interface ButtonItemProps {
  name: string;
  text: string;
  onTap: (name: string) => void;
}

export function Button({ name, text: text, onTap }: ButtonItemProps) {
  const [active, setActive] = useState(false);
  
  const handleClick = () => {
    // Animation
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 100);
    // Call tap handler
    onTap(name);
  };
  
  // 按钮样式
  const buttonStyle = {
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: active ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.15s ease',
    transform: active ? 'scale(0.95)' : 'scale(1)',
    boxShadow: active ? '0 0 10px rgba(255, 255, 255, 0.5)' : 'none'
  };
  
  return (
    <view catchtap={handleClick} style={buttonStyle}>
      <text style={{ color: '#fff', fontWeight: 'bold' }}>{text}</text>
    </view>
  );
} 