import {
  cases,
  careerTrack,
  philosophyPieces,
  skills,
} from './data';
import Reveal from './components/Reveal';
import HeroTitle from './components/HeroTitle';
import TypewriterText from './components/TypewriterText';
import LinkRise from './components/LinkRise';
import CaseCard from './components/CaseCard';
import CareerRow from './components/CareerRow';
import PhilosophyText from './components/PhilosophyText';
import SkillItem from './components/SkillItem';
import Footer from './components/Footer';
import HeroReveal from './components/HeroReveal';

const HERO_WORDS = ['Hello', 'HR', 'Designers', 'Owners', 'World'];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-meta">
            {['{', 'p', 'r', 'o', 'd', 'u', 'c', 't', '}'].map((char, idx) => (
              <span 
                key={idx} 
                className={`product-text${char === '{' || char === '}' ? ' orange' : ''}`}
                style={{
                  display: 'inline-block',
                  opacity: 0,
                  transform: 'rotate(90deg)',
                  animation: `heroFadeIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${100 + idx * 50}ms forwards`
                }}
              >
                {char}
              </span>
            ))}
          </h1>

          <div className="hero-stage">
            <div className="hero-name-row">
              <span 
                className="hero-bubble-wrap"
                style={{
                  opacity: 0,
                  transform: 'translateX(100px)',
                  animation: 'heroFadeInRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) 400ms forwards'
                }}
              >
                <span className="hero-bubble">
                  <TypewriterText words={HERO_WORDS} fontSize={14} />
                </span>
                <svg
                  className="hero-bubble-arrow"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path d="M1.2 1.2 L14.5 6.4 L7.9 8.4 L5.6 14.6 Z" />
                </svg>
              </span>
              <span 
                className="hero-name"
                style={{
                  opacity: 0,
                  transform: 'translateX(100px)',
                  animation: 'heroFadeInRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) 500ms forwards'
                }}
              >
                Ivan Linkevich
              </span>
            </div>
            <HeroTitle>Designer</HeroTitle>
          </div>

          <div className="hero-footer">
            <nav 
              className="hero-contacts" 
              aria-label="Contacts"
            >
              <HeroReveal delay={700} fromLeft>
                <LinkRise href="https://t.me/GrossTol" target="_blank" rel="noopener noreferrer">
                  Telegram
                </LinkRise>
              </HeroReveal>
              <HeroReveal delay={550} fromLeft>
                <LinkRise href="mailto:grosstol@yandex.ru">Email</LinkRise>
              </HeroReveal>
              <HeroReveal delay={400} fromLeft>
                <LinkRise
                  href="https://disk.yandex.ru/d/llFnqvnjvEQV5A"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="accent"
                >
                  Download CV
                </LinkRise>
              </HeroReveal>
            </nav>

            <HeroReveal delay={600}>
              <p className="hero-tagline">
                Превращаю сложные данные в понятные продукты, которые помогают людям{"\n"}и приносят прибыль бизнесу
              </p>
            </HeroReveal>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases">
        <div className="container">
          <Reveal>
            <h2 className="section-title">Кейсы</h2>
          </Reveal>
          <div className="cases-grid">
            {cases.map((c, idx) => (
              <Reveal key={c.title} delay={idx * 80}>
                <CaseCard item={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER TRACK */}
      <section id="career">
        <div className="container">
          <Reveal>
            <h2 className="section-title">Карьерный трек</h2>
          </Reveal>
          <ul className="career-list">
            {careerTrack.map((c, idx) => (
              <Reveal key={c.company} delay={idx * 50} y={16}>
                <li>
                  <CareerRow item={c} />
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy" id="philosophy">
        <div className="container">
          <div className="philosophy-grid">
            <Reveal>
              <div className="philosophy-img">
                <img src="/images/socrates.png" alt="Socrates" />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <span className="philosophy-label">
                  <span className="philosophy-label__chev" aria-hidden>
                    <svg viewBox="0 0 24 16" fill="none">
                      <path
                        d="M9 1 L2 8 L9 15 M17 1 L10 8 L17 15"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Философия
                </span>
              </Reveal>
              <PhilosophyText pieces={philosophyPieces} />
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section" id="skills">
        <div className="container">
          <Reveal>
            <h2 className="skills-heading">Skills</h2>
          </Reveal>
          <div className="skills-grid">
            {skills.map((s, idx) => (
              <Reveal key={s.num} delay={idx * 70}>
                <SkillItem item={s} index={idx} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
