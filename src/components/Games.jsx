import React from 'react';

function Games() {
  const gamesStyle = {
    padding: '30px',
    maxWidth: '1200px',
    margin: 'auto',
    color: '#333'
  };

  const gameGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
    marginTop: '30px'
  };

  const gameCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    border: '1px solid rgba(0,0,0,0.05)',
    overflow: 'hidden'
  };

  const games = [
    {
      title: 'Minecraft',
      description: 'สร้างโลกในแบบของคุณ',
      icon: '🎮'
    },
    {
      title: 'Valorant',
      description: 'เกมยิงปืนแนว Tactical Shooter',
      icon: '🎯'
    },
    {
      title: 'Genshin Impact',
      description: 'ผจญภัยในโลกแฟนตาซี',
      icon: '⚔️'
    }
  ];

  return (
    <div style={gamesStyle}>
      <h2 style={{ 
        fontSize: '2.5rem', 
        background: 'linear-gradient(45deg, #1a237e, #3949ab)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '30px'
      }}>
        Games
      </h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
        รายการเกมต่างๆที่เล่นบนแชแนล
      </p>

      <div style={gameGridStyle}>
        {games.map((game, index) => (
          <div
            key={index}
            style={gameCardStyle}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{game.icon}</div>
            <h3 style={{ margin: '0 0 10px 0', color: '#1a237e' }}>{game.title}</h3>
            <p style={{ margin: 0, color: '#666' }}>{game.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games; 