export type CaseResult = {
  label: string;
  value: string;
  sub?: string;
  tone?: 'up' | 'down';
};

export type CaseItem = {
  title: string;
  description: string;
  tag: 'B2B' | 'B2C';
  image: string;
  href?: string;
  bg?: string;
  results?: CaseResult[];
};

export const cases: CaseItem[] = [];

export type CareerItem = {
  logo: string;
  company: string;
  description: string;
  duration: string;
  role: string;
  period: string;
  url?: string;
};

export const careerTrack: CareerItem[] = [
  {
    logo: '/logos/cryptopay.png',
    company: 'Cryptopay',
    description: 'B2B кабинет',
    duration: '3 года',
    role: 'Дизайнер продукта в B2B и B2C',
    period: '2022-2025',
    url: 'https://cryptopay.me/',
  },
  {
    logo: '/logos/shoofi.png',
    company: 'Shoofi',
    description: 'Основная навигация',
    duration: '1 год',
    role: 'Дизайнер продукта',
    period: '2021-2022',
    url: 'https://shoofi.com/ru/',
  },
  {
    logo: '/logos/tochka.png',
    company: 'Точка Банк',
    description: 'Комплаенс / Витрина',
    duration: '1 год',
    role: 'Дизайнер продукта',
    period: '2021-2022',
    url: 'https://tochka.com/',
  },
  {
    logo: '/logos/gurucan.png',
    company: 'GuruCan',
    description: 'Кабинеты креатора и ученика',
    duration: '2 года',
    role: 'Дизайнер продукта',
    period: '2019-2021',
    url: 'https://www.gurucan.com/',
  },
  {
    logo: '/logos/sber.png',
    company: 'СБЕР',
    description: 'Страховые продукты',
    duration: '0,5 года',
    role: 'Старший дизайнер',
    period: '2019',
    url: 'https://www.sberbank.ru/ru/person',
  },
  {
    logo: '/logos/itpark.png',
    company: 'IT-park',
    description: 'Дизайн всего продукта',
    duration: '4 года',
    role: 'UX/UI → Team Lead',
    period: '2015-2019',
    url: 'https://itpark.spb.ru/',
  },
  {
    logo: '/logos/endylab.png',
    company: 'Endy lab',
    description: 'Портал для Sushi Wok',
    duration: '1 год',
    role: 'UX/UI дизайнер',
    period: '2014-2015',
    url: 'https://endylab.ru/',
  },
];

export type Skill = { num: string; title: string; description: string };

export const skills: Skill[] = [
  {
    num: '01',
    title: 'Исследования',
    description: 'JBTD, CJM, CustDev, портреты, анализ рынка и конкурентов',
  },
  {
    num: '02',
    title: 'Дизайн системы',
    description:
      'Бренд и UI системы: мейнтейн компонентов, версионность, документация, StoryBook и коллаборация с фронтендом',
  },
  {
    num: '03',
    title: 'Web и mobile',
    description:
      'Масштабирование решений на все необходимые платформы. Карты экранов, стейты, с учётом дизайн системы и её гайдов',
  },
  {
    num: '04',
    title: 'Аналитика',
    description:
      'Amplitude, google analytics, hot jar, данные для создания гипотез и валидации решений',
  },
  {
    num: '05',
    title: 'Юзабиллити тесты',
    description:
      'Figma make и Cursor для создания прототипов. RITE и другие аналогичные фреймворки для проверки дизайна при помощи качественных исследований',
  },
  {
    num: '06',
    title: 'DesOps',
    description:
      'Формирование дизайн культуры и продуктовых процессов. Стратегическое управление дизайном: брендом, метриками, дорожной картой и отделом.',
  },
];

export type PhilosophyPiece = { text: string; emphasis?: boolean };

export const philosophyPieces: PhilosophyPiece[] = [
  { text: 'На' },
  { text: 'дизайн', emphasis: true },
  { text: 'смотрю, как на' },
  { text: 'дисциплину', emphasis: true },
  { text: 'упрощения: процессов, смыслов, вещей —' },
  { text: 'вообще всего!', emphasis: true },
];
