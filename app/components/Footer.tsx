'use client';

import { useState, useEffect } from 'react';
import './Footer.css';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="custom-footer" role="contentinfo">
      {/* Фоновые декоративные элементы */}
      <div className="footer-glow"></div>
      <div className="footer-top-line"></div>

      {/* Бегущая строка */}
      <div className="ticker-wrapper">
        <div className="ticker-track">
          <span className="ticker-item">
            ✦ AVAILABLE FOR WORK&nbsp;&nbsp;&nbsp;✦ OPEN TO COLLABORATE&nbsp;&nbsp;&nbsp;✦ FRIENDLY NEIGHBOURHOOD DESIGNER&nbsp;&nbsp;&nbsp;✦ INDIA&nbsp;&nbsp;&nbsp;
          </span>
          <span className="ticker-item">
            ✦ AVAILABLE FOR WORK&nbsp;&nbsp;&nbsp;✦ OPEN TO COLLABORATE&nbsp;&nbsp;&nbsp;✦ FRIENDLY NEIGHBOURHOOD DESIGNER&nbsp;&nbsp;&nbsp;✦ INDIA&nbsp;&nbsp;&nbsp;
          </span>
          <span className="ticker-item">
            ✦ AVAILABLE FOR WORK&nbsp;&nbsp;&nbsp;✦ OPEN TO COLLABORATE&nbsp;&nbsp;&nbsp;✦ FRIENDLY NEIGHBOURHOOD DESIGNER&nbsp;&nbsp;&nbsp;✦ INDIA&nbsp;&nbsp;&nbsp;
          </span>
          <span className="ticker-item">
            ✦ AVAILABLE FOR WORK&nbsp;&nbsp;&nbsp;✦ OPEN TO COLLABORATE&nbsp;&nbsp;&nbsp;✦ FRIENDLY NEIGHBOURHOOD DESIGNER&nbsp;&nbsp;&nbsp;✦ INDIA&nbsp;&nbsp;&nbsp;
          </span>
          <span className="ticker-item">
            ✦ AVAILABLE FOR WORK&nbsp;&nbsp;&nbsp;✦ OPEN TO COLLABORATE&nbsp;&nbsp;&nbsp;✦ FRIENDLY NEIGHBOURHOOD DESIGNER&nbsp;&nbsp;&nbsp;✦ INDIA&nbsp;&nbsp;&nbsp;
          </span>
          <span className="ticker-item">
            ✦ AVAILABLE FOR WORK&nbsp;&nbsp;&nbsp;✦ OPEN TO COLLABORATE&nbsp;&nbsp;&nbsp;✦ FRIENDLY NEIGHBOURHOOD DESIGNER&nbsp;&nbsp;&nbsp;✦ INDIA&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>

      <div className="footer-content">
        {/* Верхняя часть: Статус и Кнопка */}
        <div className="footer-header">
          <div className="status-badge">
            <div className="status-dot"></div>
            <span>Currently Interning @ HDFC Bank</span>
          </div>
          <a href="mailto:digvijayux@gmail.com" className="hello-btn">
            <span>👋</span> Say Hello
          </a>
        </div>

        {/* Имя */}
        <div className="name-section">
          <h1 className="big-name">DIGVIJAY</h1>
          <p className="role-title">Product Designer</p>
        </div>

        {/* Контакты и Бейдж */}
        <div className="contact-section">
          <div className="contact-info">
            <p className="label">Get in touch</p>
            <a href="mailto:digvijayux@gmail.com" className="email-link">digvijayux@gmail.com</a>
          </div>
          <div className="badge-container">
            <svg viewBox="0 0 86 86" width="86" height="86" className="badge-svg">
              <defs>
                <path id="badge-path" d="M 43,43 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" />
              </defs>
              <text fill="rgba(248,247,244,0.28)" fontSize="6.8" fontFamily="'DM Sans',sans-serif" fontWeight="700" letterSpacing="2.2">
                <textPath href="#badge-path">PORTFOLIO 2025 · DIGVIJAY · DESIGNER · </textPath>
              </text>
            </svg>
            <div className="badge-icon">✦</div>
          </div>
        </div>

        {/* Соцсети */}
        <div className="social-section">
          <p className="label">Find Me</p>
          <div className="social-links">
            <a href="https://x.com/digvijayux" className="social-link">
              <span>X</span>
            </a>
            <a href="https://www.linkedin.com/in/digvijayshelar/" className="social-link">
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/shelar1423" className="social-link">
              <span>GitHub</span>
            </a>
            <a href="mailto:digvijayux@gmail.com" className="social-link">
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="footer-bottom">
        <p>© 2026 Digvijay</p>
        <span className="time-display">India · {time}</span>
      </div>
    </footer>
  );
}
