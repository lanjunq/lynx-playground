export function MyScrollView() {
  return (
    <scroll-view
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#f5f5f5',
      }}
    >
      <text style={{ fontSize: '48px', fontWeight: 'bold', marginTop: '20px' }}>
        滚动视图示例
      </text>
      
      <view
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          width: '100%',
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <view
            key={i}
            style={{
              backgroundColor: 'white',
              padding: '20px',
              marginBottom: '10px',
              borderRadius: '8px',
              width: '90%',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <text style={{ fontSize: '32px' }}>
              内容块 {i + 1}
            </text>
            <text style={{ fontSize: '24px', color: '#666' }}>
              这是一个示例内容块，用于展示滚动视图的效果。
            </text>
          </view>
        ))}
      </view>
    </scroll-view>
  );
} 