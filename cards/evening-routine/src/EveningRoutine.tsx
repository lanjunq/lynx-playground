import './EveningRoutine.css';

import { Button } from '../../../components/Button.jsx';
import { DataManager } from '../../../data/DataManager.js';

export function EveningRoutine() {
  const routine_steps = DataManager.getEveningRoutine();
  return (
    <scroll-view style={{ height: '100%' }} scroll-orientation='vertical'>
      <view
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // height: '100%',
        }}
      >
        <text style={{ fontSize: '48px', fontWeight: 'bold' }}>晚间反思</text>
        <text style={{ fontSize: '38px' }}>完成今天的晚间反思 🌙</text>
        <view
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            margin: '2em',
          }}
        >
          {routine_steps.map((item, index) => (
            <text key={index} style={{ fontSize: '40px', marginBottom: '8px' }}>
              {index + 1}. {item}
            </text>
          ))}
        </view>

        {/* TODO: 增加一个 text input，写下今天的感想 */}

        <Button style={{ backgroundColor: 'lightgreen' }} onTap={() => {}}>
          <text style={{ color: 'black' }}>完成晚间反思! ✅</text>
        </Button>
      </view>
    </scroll-view>
  );
}
