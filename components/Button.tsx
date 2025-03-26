import { useState } from 'react'

// 按钮组件接口定义
interface ButtonProps {
  onTap?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Button({ onTap, children, style }: ButtonProps) {
  const [active, setActive] = useState(false);
  
  const handleClick = () => {
    // Animation
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 100);
    // Call tap handler
    onTap?.();
  };
  
  // 按钮样式
  const buttonStyle = {
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: active ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.15s ease',
    transform: active ? 'scale(0.95)' : 'scale(1)',
    boxShadow: active ? '0 0 10px rgba(255, 255, 255, 0.5)' : 'none',
    ...style // 合并自定义样式
  };

  return (
    <view catchtap={handleClick} style={buttonStyle}>
      {children}
    </view>
  );
} 