import './WelcomePage.css'
import { useState, useEffect } from 'react'
import { Button } from '../../../components/Button.jsx'

// I want to create a welcome screen. 
// - A delightful icon
// - Date today 
// - An inspirational note. 
// - A few shortcut buttons
//   - morning routine
//   - Plan for the day
//   - evening routine

// 励志语列表
const inspirationalQuotes = [
  "今天的努力，是明天的礼物。",
  "做最好的自己，成为更好的人。",
  "微小的进步也是进步。",
  "坚持做正确的事，而非容易的事。",
  "成功不是终点，而是一个旅程。"
];

export function WelcomePage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [quote, setQuote] = useState("");
  
  // 格式化日期
  const formattedDate = `${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月${currentDate.getDate()}日`;
  const dayOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][currentDate.getDay()];
  
  // 组件加载时随机选择一条励志语
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
    setQuote(inspirationalQuotes[randomIndex]);
    
    // 每秒钟更新一次时间
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  // 处理按钮点击
  const handleButtonClick = (routine: string) => {
    console.log(`点击了${routine}按钮`);
    // 这里可以添加导航或其他功能
  };
  
  return (
    <view className="App">
      <view className="Background" />
      <view className="Banner">
        <view className="Logo">
          <image className="Logo--lynx" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDUiIGZpbGw9IiNGRkZGRkYiLz4KICA8cGF0aCBkPSJNMzMgMzZMNTAgNjVMNjcgMzYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSI1Ii8+Cjwvc3ZnPg==" />
        </view>
        
        <view className="Content">
          <text className="Title">Hi!👋</text>
          <text className="Subtitle">{formattedDate} {dayOfWeek}</text>
          <text className="Description">{quote}</text>
        </view>
        
        <view style={{
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          width: '80%',
          maxWidth: '300px'
        }}>
          <Button 
            name="晨间" 
            text="晨间日常" 
            onTap={handleButtonClick} 
          />
          
          <Button 
            name="规划" 
            text="今日规划" 
            onTap={handleButtonClick} 
          />
          
          <Button 
            name="晚间" 
            text="晚间回顾" 
            onTap={handleButtonClick} 
          />
        </view>
      </view>
    </view>
  )
}
