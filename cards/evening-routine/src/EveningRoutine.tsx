import './EveningRoutine.css';
import { useState } from 'react';
import { ThemeContext, isSystemInDarkMode } from '../../../contexts/ThemeContext.jsx';
import { Button } from '../../../components/Button.jsx';
import { DataManager } from '../../../data/DataManager.js';

export function EveningRoutine() {
  const routine_steps = DataManager.getEveningRoutine();
  const [isStepCompleted, setIsStepCompleted] = useState<boolean[]>(new Array(routine_steps.length).fill(false));
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const toggleMarkAsCompleted = (index: number) => {
    const newIsStepCompleted = [...isStepCompleted];
    newIsStepCompleted[index] = !newIsStepCompleted[index];
    setIsStepCompleted(newIsStepCompleted);

    // TODO: 当用户点击的时候，显示一个文本框，用户可以输入感想
  };

  return (
    <ThemeContext.Provider value={isSystemInDarkMode()}>
      <scroll-view className="EveningRoutine" scroll-orientation="vertical">
        <view className="container">
          <text className="Title">Evening Routine 🌙</text>
          <view className="routine-steps">
            {routine_steps.map((item, index) => (
              <text
                key={index}
                className={`routine-step ${isStepCompleted[index] ? 'read' : 'unread'}`}
                catchtap={() => toggleMarkAsCompleted(index)}
              >
                {index + 1}.  {item}
              </text>
            ))}
          </view>

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
        </view>
      </scroll-view>
    </ThemeContext.Provider>
  );
}
