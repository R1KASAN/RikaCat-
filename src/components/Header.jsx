import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

function Header() {
  const headerStyle = {
    position: 'relative',
    textAlign: 'center',
    padding: '80px 20px',
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const backgroundStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundImage: 'url("https://yt3.googleusercontent.com/eM85gNhQiiV9_dInWZ_nR1sDzHl_gBowhMkIt0wh9cZb0Jrbddkh6Pi8rxE0Fw1f0sAB_1ByDA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: 'brightness(0.7)',
    zIndex: 0,
    '@media (max-width: 768px)': {
      backgroundPosition: 'center center',
    },
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    marginBottom: '20px',
    color: '#fff',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    '@media (max-width: 768px)': {
      fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    },
  };

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: 'rgba(255, 255, 255, 0.9)',
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
    maxWidth: '600px',
    margin: '0 auto',
    '@media (max-width: 768px)': {
      fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
    },
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '20px',
    marginTop: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  };

  const socialIconStyle = {
    width: '45px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '22px',
    '@media (max-width: 768px)': {
      width: '40px',
      height: '40px',
      fontSize: '20px',
    },
  };

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/winning.kung.5',
      icon: <FaFacebookF style={{ color: '#4267B2' }} />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ark1.1412/',
      icon: <FaInstagram style={{ 
        background: '-webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }} />,
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@RikaSan1412',
      icon: <FaYoutube style={{ color: '#FF0000' }} />,
    },
  ];

  const styles = `
    @media (max-width: 768px) {
      .header-content {
        padding: 40px 15px;
      }
    }
    @media (max-width: 480px) {
      .header-content {
        padding: 30px 10px;
      }
    }
  `;

  return (
    <header style={headerStyle}>
      <style>
        {`
          ${styles}
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0); }
          }
          
          .social-icon {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease !important;
          }
          
          .social-icon:nth-child(1) { animation: float 3s ease-in-out infinite; animation-delay: 0s; }
          .social-icon:nth-child(2) { animation: float 3s ease-in-out infinite; animation-delay: 0.2s; }
          .social-icon:nth-child(3) { animation: float 3s ease-in-out infinite; animation-delay: 0.4s; }
          
          .social-icon:hover {
            transform: translateY(-5px) !important;
            background-color: rgba(255, 255, 255, 0.2) !important;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3) !important;
          }
        `}
      </style>
      <div style={backgroundStyle} />
      <div style={contentStyle} className="header-content">
        <h1 style={titleStyle}>เเนะนำตัว!</h1>
        <p style={subtitleStyle}>ชื่อ : Rika Chan</p>
        
        <div style={socialLinksStyle}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={socialIconStyle}
              className="social-icon"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
