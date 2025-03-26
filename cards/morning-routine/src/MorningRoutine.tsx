// import './MorningRoutine.css';

import { Button } from '../../../components/Button.jsx';
import { DataManager } from '../../../data/DataManager.js';

export function MorningRoutine() {
  const routine_steps = DataManager.getMorningRoutine();
  return (
    <view
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <text style={{ fontSize: 48, fontWeight: 'bold' }}>Routine</text>
      <text style={{ fontSize: 38 }}>Complete your morning routine ☀️</text>
      <view
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          margin: '2em',
        }}
      >
        {routine_steps.map((item, index) => (
          <text key={index} style={{ fontSize: 40, marginBottom: '8px' }}>
            {index + 1}. {item}
          </text>
        ))}
      </view>

      {/* TODO: 增加一个 text input，写下今天的感想 */}

      <Button style={{ backgroundColor: 'lightgreen' }} onTap={() => {}}>
        <text style={{ color: 'black' }}>完成早上 Routine! ✅</text>
      </Button>
    </view>
  );
}
