import './WelcomePage.css';
import { useState, useEffect } from 'react';
import { ThemeContext, isSystemInDarkMode } from '../../../contexts/ThemeContext.jsx';
import { Button } from '../../../components/Button.jsx';
import { DataManager } from '../../../data/DataManager.js';
import { TimeUtils, TimeOfDay } from '../../../data/TimeUtils.js';
export function WelcomePage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [quote, setQuote] = useState('');

  // 格式化日期
  const formattedDate = `${currentDate.getFullYear()} 年 ${currentDate.getMonth() + 1} 月 ${currentDate.getDate()} 日`;
  const dayOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][currentDate.getDay()];

  // 组件加载时随机选择一条励志语
  useEffect(() => {
    setQuote(DataManager.getRandomQuote());

    // 每秒钟更新一次时间
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const jumpToPage = (pageName: string) => {
    console.log(`点击了${pageName}按钮`);
    // TODO: 这里可以添加导航或其他功能
  };

  // 打招呼 (早上好，中午好，下午好，晚上好)
  // 日期（年月日，星期几）
  // 一句随机的 quota (从我的例子中选)
  // 如果是上午，而且没有进行 morning routine
  // Plan for the day (如果还没有 plan，带我去 plan 页面；如果已经 plan，显示今天的 plan)
  // 如果是傍晚，而且没有进行 evening routine, 带我去 evening routine 页面

  return (
    <ThemeContext.Provider value={isSystemInDarkMode()}>
      <scroll-view
        className="App"
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        {/* 顶部信息 */}
        <view
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <text className="Title">
            {(() => {
              switch (TimeUtils.getTimeOfDay()) {
                case TimeOfDay.Morning:
                  return 'Hi, 早上好!';
                case TimeOfDay.Afternoon:
                  return 'Hi, 下午好!';
                case TimeOfDay.Evening:
                  return 'Hi, 晚上好!';
                case TimeOfDay.Night:
                  return 'Hi, 该睡觉了呢!';
              }
            })()}
          </text>
          <text className="Subtitle">{formattedDate}</text>
          <text className="Subtitle">{dayOfWeek}</text>
          <text className="Quote">"{quote}"</text>
        </view>

        {/* 按钮 */}
        <view
          style={{
            marginTop: '30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            minWidth: '200px',
          }}
        >
          {/* 如果时间是上午或下午，而且没有进行 morning routine，则显示 Morning Routine 按钮 */}
          {(TimeUtils.isMorning() || TimeUtils.isAfternoon()) && !DataManager.getIsMorningRoutineDone() && (
            <Button onClick={() => jumpToPage('Morning Routine')}>
              <text>Morning Routine ☀️</text>
            </Button>
          )}
          {/* 如果时间是上午或者下午，则显示 Plan for the day 按钮 */}
          {(TimeUtils.isMorning() || TimeUtils.isAfternoon()) && (
            <Button onClick={() => jumpToPage('Plan for the day')}>
              <text>Plan for the day 📝</text>
            </Button>
          )}

          {/* 如果时间是傍晚，则显示 Evening Review 按钮 */}
          {(TimeUtils.isEvening() || TimeUtils.isNight()) && (
            <Button onClick={() => jumpToPage('Evening Review')}>
              <text>Evening Review 😊</text>
            </Button>
          )}

          {/* 如果时间是晚上，则显示 Night Routine 按钮 */}
          {TimeUtils.isNight() && !DataManager.getIsEveningRoutineDone() && (
            <Button onClick={() => jumpToPage('Night Routine')}>
              <text>Night Routine 🌙</text>
            </Button>
          )}
        </view>
      </scroll-view>
    </ThemeContext.Provider>
  );
}
