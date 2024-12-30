import React, { useState } from 'react';
import { FaGamepad, FaTimes, FaInfoCircle, FaYoutube } from 'react-icons/fa';

function Games() {
  const [selectedGame, setSelectedGame] = useState(null);

  const gamesData = {
    tier1: {
      title: "Tier #1",
      description: "เล่นทุกๆวัน",
      games: [
        {
          title: 'Call of Duty: Mobile',
          description: 'เกมยิงมือถือสุดมันส์',
          gameId: '7038190922651140097',
          playlistUrl: 'https://youtube.com/playlist?list=PLLveTk_37kAjYa68v9lBjT5KwvE4-npBk&si=SmEZibqRyNStTqU9',
          background: 'https://elitedias.com/wp-content/uploads/2022/07/CODM-Garena.png',
          details: 'รายละเอียดเพิ่มเติมเกี่ยวกับ CODM...'
        },
        {
          title: 'Project Sekai',
          description: 'เกมจังหวะสุดไพเราะ',
          gameId: '162775629464510468',
          playlistUrl: 'https://youtube.com/playlist?list=PLLveTk_37kAg9hYRmE3wSr72Z6mpToEaM&si=Ph-eoFfCE_ITPGWi',
          background: 'https://play-lh.googleusercontent.com/qv39ayUgY-nTSlc9ta3jZv6cjEzqoRbQ9koV5H65Nzlvj10D198mDtmDN6--PbbKTDI',
          details: 'รายละเอียดเพิ่มเติมเกี่ยวกับ Project Sekai...'
        },
      ]
    },
    tier2: {
      title: "Tier #2",
      description: "เล่นบ่อย / เมื่อมีอีเวนท์สำคัญ",
      games: [
        // เพิ่มเกม Tier 2 ตรงนี้
      ]
    },
    tier3: {
      title: "Tier #3",
      description: "เล่นบางครั้ง",
      games: [
        // เพิ่มเกม Tier 3 ตรงนี้
      ]
    }
  };

  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, rgba(255,192,203,0.3) 0%, rgba(255,182,193,0.2) 100%)',
    minHeight: '100vh',
    borderRadius: '20px',
    boxShadow: '0 0 30px rgba(0,0,0,0.1)',
  };

  const tierSectionStyle = {
    marginBottom: '30px',
    padding: '20px',
    background: 'rgba(255,255,255,0.95)',
    borderRadius: '25px',
    boxShadow: '0 8px 20px rgba(255,192,203,0.2)',
    border: '2px solid rgba(255,192,203,0.2)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  };

  const tierTitleStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    position: 'relative',
    display: 'inline-block',
    padding: '15px 40px',
    background: 'linear-gradient(45deg, #FF1493, #FF69B4)',
    color: 'Pink',
    borderRadius: '15px',
    boxShadow: '0 5px 20px rgba(255,20,147,0.4)',
    textTransform: 'uppercase',
    letterSpacing: '4px',
    fontWeight: '800',
    border: '2px solid rgba(255,255,255,0.3)',
    transition: 'all 0.3s ease',
    WebkitTextStroke: '1px rgba(255,255,255,0.3)',
    textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
    transform: 'skew(-5deg)',
  };

  const tierDescriptionStyle = {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '30px',
    padding: '8px 25px',
    background: 'rgba(255,192,203,0.1)',
    borderRadius: '20px',
    border: '1px solid rgba(255,192,203,0.2)',
    display: 'inline-block',
    marginTop: '15px',
    fontWeight: '500',
    letterSpacing: '0.5px',
  };

  const gameGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  };

  const gameCardStyle = {
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '15px',
    padding: '15px',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255,192,203,0.3)',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
    maxWidth: '300px',
    margin: '0 auto',
  };

  const gameImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '15px',
  };

  const buttonStyle = {
    background: 'linear-gradient(45deg, #FF69B4, #FFB6C1)',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '25px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    marginTop: '15px',
    boxShadow: '0 2px 10px rgba(255,105,180,0.2)',
  };

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(8px)',
  };

  const modalContentStyle = {
    background: 'linear-gradient(135deg, #ffffff, #fff0f5)',
    padding: '30px',
    borderRadius: '20px',
    maxWidth: '500px',
    width: '90%',
    position: 'relative',
    color: '#333',
    boxShadow: '0 10px 25px rgba(255,192,203,0.3)',
    border: '1px solid rgba(255,192,203,0.5)',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: 'none',
    color: '#666',
    fontSize: '24px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  };

  const styleTag = `
    @keyframes titleGlow {
      0% { box-shadow: 0 5px 20px rgba(255,20,147,0.4); }
      50% { box-shadow: 0 5px 30px rgba(255,20,147,0.7), 0 0 20px rgba(255,20,147,0.4); }
      100% { box-shadow: 0 5px 20px rgba(255,20,147,0.4); }
    }

    @keyframes titleShine {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }

    .tier-title {
      animation: titleGlow 2s ease-in-out infinite;
      background: linear-gradient(
        90deg, 
        #FF1493, 
        #FF69B4, 
        #FF1493
      );
      background-size: 200% auto;
      animation: titleShine 3s linear infinite;
    }

    .tier-title:hover {
      transform: skew(-5deg) translateY(-3px);
      box-shadow: 0 8px 25px rgba(255,20,147,0.6);
      letter-spacing: 6px;
    }

    .tier-title::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, #FF1493, #FF69B4, #FF1493);
      z-index: -1;
      border-radius: 15px;
      filter: blur(10px);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .tier-title:hover::before {
      opacity: 1;
    }
  `;

  const responsiveStyle = `
    @media (max-width: 600px) {
      .tier-section {
        padding: 15px;
      }
      .container {
        max-width: 100%;
      }
    }
  `;

  return (
    <>
      <style>{styleTag}</style>
      <style>{responsiveStyle}</style>
      <div style={containerStyle} className="container">
        {Object.entries(gamesData).map(([tierId, tier]) => (
          <div key={tierId} style={tierSectionStyle} className="tier-section">
            <div style={{
              textAlign: 'center',
              marginBottom: '30px',
            }}>
              <h2 style={tierTitleStyle}>{tier.title}</h2>
              <div style={{
                width: '60px',
                height: '4px',
                background: 'linear-gradient(to right, #FF69B4, #FFB6C1)',
                margin: '15px auto',
                borderRadius: '2px',
              }}></div>
              <p style={tierDescriptionStyle}>{tier.description}</p>
            </div>
            <div style={gameGridStyle}>
              {tier.games.map((game, index) => (
                <div
                  key={index}
                  style={{
                    ...gameCardStyle,
                    backgroundImage: game.background,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(255,192,203,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                  }}
                >
                  <img 
                    src={game.background}
                    alt={game.title}
                    style={gameImageStyle}
                  />
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '10px',
                    color: '#FF69B4',
                  }}>{game.title}</h3>
                  <p style={{
                    color: '#666',
                    marginBottom: '15px'
                  }}>{game.description}</p>
                  <button
                    style={buttonStyle}
                    onClick={() => setSelectedGame(game)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 5px 15px rgba(255,105,180,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 10px rgba(255,105,180,0.2)';
                    }}
                  >
                    <FaInfoCircle /> ดูข้อมูลเพิ่มเติม
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {selectedGame && (
          <div style={modalOverlayStyle} onClick={() => setSelectedGame(null)}>
            <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
              <button 
                style={{
                  ...closeButtonStyle,
                  color: '#FF69B4'
                }}
                onClick={() => setSelectedGame(null)}
                onMouseEnter={e => e.currentTarget.style.transform = 'rotate(90deg)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'rotate(0)'}
              >
                <FaTimes />
              </button>
              <h2 style={{
                fontSize: '2rem',
                marginBottom: '20px',
                borderBottom: '2px solid rgba(255,105,180,0.2)',
                paddingBottom: '10px',
                color: '#FF69B4'
              }}>{selectedGame.title}</h2>
              <p style={{
                marginBottom: '15px',
                color: '#666'
              }}>{selectedGame.description}</p>
              <div style={{
                background: 'rgba(255,105,180,0.1)',
                padding: '15px',
                borderRadius: '10px',
                marginBottom: '20px'
              }}>
                <h4 style={{
                  marginBottom: '10px',
                  color: '#FF69B4'
                }}>Game ID:</h4>
                <p style={{color: '#666'}}>{selectedGame.gameId}</p>
              </div>
              <a 
                href={selectedGame.playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...buttonStyle,
                  textDecoration: 'none',
                  justifyContent: 'center'
                }}
              >
                <FaYoutube /> ดูคลิปการเล่น
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Games; 