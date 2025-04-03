import './EveningRoutine.css';
import { useState } from 'react';
import { ThemeContext, isSystemInDarkMode } from '../../../contexts/ThemeContext.jsx';
import { Button } from '../../../components/Button.jsx';
import { DataManager } from '../../../data/DataManager.js';

export function EveningRoutine() {
  const routine_steps = DataManager.getEveningRoutine();
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
    <ThemeContext.Provider value={isSystemInDarkMode()}>
      <scroll-view style={{ height: '100%' }} scroll-orientation="vertical">
        <view
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            paddingTop: '40px',
            paddingBottom: '40px',
          }}
        >
          <text style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>晚间反思</text>
          <text style={{ fontSize: '38px', marginBottom: '40px' }}>完成今天的晚间反思 🌙</text>
          <view
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              margin: '2em',
              width: '100%',
              padding: '0 20px',
            }}
          >
            {routine_steps.map((item, index) => (
              <text
                key={index}
                style={{
                  fontSize: '40px',
                  marginBottom: '16px',
                  color: isRead[index] ? '#999' : '#FFFFFF',
                  textDecoration: isRead[index] ? 'line-through' : 'none',
                }}
                catchtap={() => markAsRead(index)}
                catchlongpress={() => markAsUnread(index)}
              >
                {index + 1}. {item}
              </text>
            ))}
          </view>

          {/* TODO: 增加一个 text input，写下今天的感想 */}

          <Button style={{ backgroundColor: 'lightgreen', marginTop: '20px' }} onClick={() => {}}>
            <text style={{ color: 'black' }}>完成晚间反思! ✅</text>
          </Button>
        </view>
      </scroll-view>
    </ThemeContext.Provider>
  );
}
