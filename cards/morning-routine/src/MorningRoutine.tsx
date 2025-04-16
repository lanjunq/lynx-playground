import './MorningRoutine.css';

import { useState } from 'react';
import { ThemeContext, isSystemInDarkMode } from '../../../contexts/ThemeContext.jsx';
import { Button } from '../../../components/Button.jsx';
import { DataManager } from '../../../data/DataManager.js';

export function MorningRoutine() {
  const routine_steps = DataManager.getMorningRoutine();
  const [isStepCompleted, setIsStepCompleted] = useState<boolean[]>(new Array(routine_steps.length).fill(false));
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const toggleMarkAsCompleted = (index: number) => {
    const newIsStepCompleted = [...isStepCompleted];
    newIsStepCompleted[index] = !newIsStepCompleted[index];
    setIsStepCompleted(newIsStepCompleted);
  };

  return (
    <ThemeContext.Provider value={isSystemInDarkMode()}>
      <scroll-view className="MorningRoutine" scroll-orientation="vertical">
        <view className="container">
          <text className="Title">MorningRoutine ☀️</text>
          {/* <text className="Subtitle"></text> */}
          <view className="routine-steps">
            {routine_steps.map((item, index) => (
              <text
                key={index}
                className={`routine-step ${isStepCompleted[index] ? 'read' : 'unread'}`}
                catchtap={() => toggleMarkAsCompleted(index)}
              >
                {index + 1}. {item}
              </text>
            ))}
          </view>

          {/* TODO: 增加一个 text input，写下今天的感想 */}

          <Button style={{ backgroundColor: isCompleted ? 'darkgreen' : 'gray' }} onClick={() => setIsCompleted(true)}>
            {!isCompleted ? (
              <text>标记完成 Routine ✅</text>
            ) : (
              <view style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <text>恭喜你已经完成 Routine 🎉</text>
                <text>回到主页吧!</text>
              </view>
            )}
          </Button>

          {/* TODO: 当用户点击完成 Routine 后，播放一个恭喜动画 */}
        </view>
      </scroll-view>
    </ThemeContext.Provider>
  );
}
