import React, { useEffect, useState } from 'react';

function Channel() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 15;
      const y = (e.clientY / window.innerHeight) * 15;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerStyle = {
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
  };

  const backgroundStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '110%',
    height: '110%',
    transform: `translate(-50%, -50%) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
    backgroundImage: 'url("https://pbs.twimg.com/media/GCpRcDdaQAAYW-w?format=jpg&name=4096x4096")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(0.7)',
    transition: 'transform 0.3s ease-out',
    zIndex: -1,
  };

  const channelStyle = {
    padding: '30px',
    maxWidth: '1200px',
    margin: 'auto',
    color: '#fff',
    position: 'relative',
    zIndex: 1,
  };

  const mainTitleStyle = {
    fontSize: '3.5rem',
    textAlign: 'center',
    marginBottom: '50px',
    background: 'linear-gradient(45deg, #ff6b6b, #ffd93d, #6bff6b, #6b6bff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
    animation: 'rainbow 6s linear infinite',
  };

  const channelGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    padding: '20px',
  };

  const channelCardStyle = {
    background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 217, 61, 0.1), rgba(107, 255, 107, 0.1))',
    borderRadius: '25px',
    padding: '30px',
    backdropFilter: 'blur(8px)',
    border: 'none',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
  };

  const channelLogoStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    marginBottom: '25px',
    border: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
    background: 'linear-gradient(45deg, #ff6b6b, #ffd93d, #6bff6b, #6b6bff)',
    padding: '3px',
  };

  const titleStyle = {
    fontSize: '2rem',
    marginBottom: '10px',
    background: 'linear-gradient(45deg, #ff6b6b, #ffd93d)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const subtitleStyle = {
    fontSize: '1.8rem', // เพิ่มขนาดตัวอักษรเพื่อให้โดดเด่นขึ้น
    color: '#B0CEFF',
    marginBottom: '20px', // เพิ่มระยะห่างด้านล่าง
    fontWeight: '700', // ปรับให้หนาขึ้น
    textShadow: '2px 2px 5px rgba(250,88,154, 0.7)', // ปรับเงาให้เบลอขึ้นและเข้มขึ้น
    WebkitTextStroke: '1px #B0CEFF', // เพิ่มขนาดเส้นขอบ
    textStroke: '2px #B0CEFF', // รองรับบางเบราว์เซอร์
    letterSpacing: '1px', // เพิ่มช่องว่างระหว่างตัวอักษร
    textTransform: 'uppercase', // เปลี่ยนข้อความเป็นตัวพิมพ์ใหญ่
    backgroundImage: 'linear-gradient(45deg, #FFB9DE, #B0CEFF)', // เพิ่มพื้นหลังเกรเดียนท์
    backgroundClip: 'text', // ใช้พื้นหลังเกรเดียนท์กับข้อความ
    WebkitBackgroundClip: 'text', // สำหรับเบราว์เซอร์ที่รองรับ
    color: 'transparent', // ทำให้สีตัวอักษรเป็นโปร่งใสเพื่อให้เกรเดียนท์แสดงผล
    padding: '5px', // เพิ่มพื้นที่รอบข้อความ
  };
  

  const descriptionStyle = {
    fontSize: '1.1rem',
    marginBottom: '25px',
    color: 'rgba(255, 255, 255, 0.95)',
    lineHeight: '1.6',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '12px 35px',
    background: 'linear-gradient(45deg, rgba(255, 107, 107, 0.3), rgba(107, 107, 255, 0.3))',
    color: 'white',
    borderRadius: '30px',
    border: 'none',
    fontSize: '1.1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(5px)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)',
  };

  const favoriteVideosSection = {
    marginTop: '50px',
    padding: '30px',
  };

  const videoGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '30px',
  };

  const videoCardStyle = {
    background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(107, 107, 255, 0.1))',
    borderRadius: '20px',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: 'none',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  };

  const thumbnailStyle = {
    width: '100%',
    aspectRatio: '16/9',
    objectFit: 'cover',
  };

  const videoContentStyle = {
    padding: '20px',
  };

  const favoriteVideos = [
    {
      title: "My Favorite Video 1",
      url: "https://youtu.be/AT89xAokKtE?si=tDtNbVwOCcP_remy",
      thumbnail: "https://i.ytimg.com/vi/AT89xAokKtE/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAGj6ILgf-qpI3akoou1jf_6buX_Q",
      reason: "เป็นคลิปที่ทำให้ผมได้เรียนรู้เทคนิคใหม่ๆ ในการทำคอนเทนต์"
    },
    {
      title: "My Favorite Video 2",
      url: "https://youtu.be/Z4xeSOKzRBs?si=goPicwyrUVRJuzJ-",
      thumbnail: "https://i.ytimg.com/vi/Z4xeSOKzRBs/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDKQ7UfANfl-2h7hF_WezeUxy5ZOw",
      reason: "คลิปนี้เป็นจุดเริ่มต้นที่ทำให้ผมอยากทำช่อง YouTube"
    }
  ];

  const videoTitleStyle = {
    background: 'linear-gradient(45deg, #fff, #e3f2fd)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '10px',
    fontSize: '1.3rem',
    fontWeight: '600',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
  };

  const videoReasonStyle = {
    color: 'rgba(255, 255, 255, 0.95)',
    fontSize: '1rem',
    lineHeight: '1.6',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
  };

  const channelData = [
    {
      title: 'ช่องหลัก',
      name: 'Rika San',
      description: 'แชแนลหลักที่มีทั้งวีดีโอและไฟ์สตรีมต่างๆของเรา',
      buttonText: 'ติดตาม',
      channelUrl: 'https://www.youtube.com/@RikaSan1412',
      logoUrl: 'https://yt3.googleusercontent.com/XxdIQKSkjk9n_viUaGvvfW_pugualNJTBj5TYAbtI6kU-hlLOtvy1k9P7zmDyDLGHv2JrmP-N8Y=s160-c-k-c0x00ffffff-no-rj'
    }
  ];

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
        `}
      </style>
      <div style={backgroundStyle} />
      <div style={channelStyle}>
        <h1 style={mainTitleStyle}>ช่องทางต่างๆ</h1>
        
        <div style={channelGridStyle}>
          {channelData.map((channel, index) => (
            <div
              key={index}
              style={channelCardStyle}
              onMouseEnter={(e) => {
                const card = e.currentTarget;
                const logo = card.querySelector('img');
                
                card.style.transform = 'translateY(-5px)';
                card.style.background = 'linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(255, 217, 61, 0.2), rgba(107, 255, 107, 0.2))';
                card.style.boxShadow = '0 8px 30px rgba(255, 255, 255, 0.15)';
                if (logo) {
                  logo.style.transform = 'scale(1.05) rotate(5deg)';
                  logo.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                const logo = card.querySelector('img');
                
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = 'none';
                if (logo) {
                  logo.style.transform = 'scale(1)';
                  logo.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                }
              }}
            >
              <img 
                src={channel.logoUrl}
                alt={`${channel.name} logo`}
                style={channelLogoStyle}
              />
              <h3 style={titleStyle}>{channel.title}</h3>
              <h4 style={subtitleStyle}>{channel.name}</h4>
              <p style={descriptionStyle}>{channel.description}</p>
              <a 
                href={channel.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button 
                  style={buttonStyle}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(45deg, rgba(255, 107, 107, 0.8), rgba(107, 107, 255, 0.8))';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(45deg, rgba(255, 107, 107, 0.3), rgba(107, 107, 255, 0.3))';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {channel.buttonText}
                </button>
              </a>
            </div>
          ))}
        </div>

        <div style={favoriteVideosSection}>
          <h2 style={{
            ...mainTitleStyle,
            fontSize: '2.5rem',
            marginBottom: '30px'
          }}>
            คลิปที่ชื่นชอบ
          </h2>
          
          <div style={videoGridStyle}>
            {favoriteVideos.map((video, index) => (
              <a 
                key={index}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div 
                  style={videoCardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(107, 107, 255, 0.2))';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 255, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    style={thumbnailStyle}
                  />
                  <div style={videoContentStyle}>
                    <h3 style={videoTitleStyle}>{video.title}</h3>
                    <p style={videoReasonStyle}>{video.reason}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Channel; 