import './WelcomePage.css';
import { useState, useEffect } from 'react';
import { ThemeContext, isSystemInDarkMode } from '../../../contexts/ThemeContext.jsx';
import { Button } from '../../../components/Button.jsx';
import { DataManager } from '../../../data/DataManager.js';

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

  return (
    <ThemeContext.Provider value={isSystemInDarkMode()}>
      <scroll-view
        className="App"
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <view className="Background" />
        <view className="Banner">
          <view className="Logo">
            <image
              className="Logo--lynx"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDUiIGZpbGw9IiNGRkZGRkYiLz4KICA8cGF0aCBkPSJNMzMgMzZMNTAgNjVMNjcgMzYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSI1Ii8+Cjwvc3ZnPg=="
            />
          </view>

          <view className="Content">
            <text className="Title">Hi!👋</text>
            <text className="Subtitle">{formattedDate}</text>
            <text className="Subtitle">{dayOfWeek}</text>
            <text className="Quote">"{quote}"</text>
          </view>

          <view
            style={{
              marginTop: '30px',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              width: '80%',
              maxWidth: '300px',
            }}
          >
            <Button onClick={() => jumpToPage('Morning Routine')}>
              <text>Morning Routine</text>
            </Button>

            <Button onClick={() => jumpToPage('Plan for the day')}>
              <text>Plan for the day</text>
            </Button>

            <Button onClick={() => jumpToPage('Evening Review')}>
              <text>Evening Review</text>
            </Button>
          </view>
        </view>
      </scroll-view>
    </ThemeContext.Provider>
  );
}
