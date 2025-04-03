import './MorningRoutine.css';
import { useState } from 'react';
import { ThemeProvider } from '../../../contexts/ThemeContext.jsx';
import { Button } from '../../../components/Button.jsx';
import { DataManager } from '../../../data/DataManager.js';

export function MorningRoutine() {
  const routine_steps = DataManager.getMorningRoutine();
  const [isRead, setIsRead] = useState<boolean[]>(new Array(routine_steps.length).fill(false));

  const markAsRead = (index: number) => {
    const newIsRead = [...isRead];
    newIsRead[index] = true;
    setIsRead(newIsRead);
  };

  const markAsUnread = (index: number) => {
    const newIsRead = [...isRead];
    newIsRead[index] = false;
    setIsRead(newIsRead);
  };

  return (
    <ThemeProvider>
      <scroll-view className="MorningRoutine" scroll-orientation="vertical">
        <view className="container">
          <text className="title">Routine</text>
          <text className="subtitle">Complete your morning routine ☀️</text>
          <view className="steps">
            {routine_steps.map((item, index) => (
              <text
                key={index}
                className={`step ${isRead[index] ? 'completed' : ''}`}
                catchtap={() => markAsRead(index)}
                catchlongpress={() => markAsUnread(index)}
              >
                {index + 1}. {item}
              </text>
            ))}
          </view>

          {/* TODO: 增加一个 text input，写下今天的感想 */}

          <Button style={{ marginTop: '20px', backgroundColor: 'var(--color-light-primary)' }}>
            <text style={{ color: 'var(--color-light-text)' }}>完成早上 Routine! ✅</text>
          </Button>
        </view>
      </scroll-view>
    </ThemeProvider>
  );
}
