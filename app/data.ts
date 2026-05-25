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

export const cases: CaseItem[] = [
  {
    title: 'Платёжный виджет',
    description: 'Редизайн главной тулзы для инвойсов',
    tag: 'B2B',
    image: '/images/case-payment.png',
    href: '#payment-widget',
    bg: '#e8eaee',
    results: [
      { label: 'Время до цели', value: '-49%', tone: 'down' },
      { label: 'Успешные оплаты', value: '+27%', tone: 'up' },
      { label: 'Моб. конверсия', value: '+14%', tone: 'up' },
      { label: 'Ошибки с монетой', value: '-72%', tone: 'down' },
      { label: 'Обращения в саппорт', value: '-90%', sub: 'по поводу возврата', tone: 'down' },
    ],
  },
  {
    title: 'Исследование мобилки',
    description: 'Поиск проблемных экранов через юз-тесты и интервью',
    tag: 'B2C',
    image: '/images/case-mobile.png',
    href: '#mobile-research',
    bg: '#edeeed',
    results: [
      { label: 'Проблемных экранов', value: '17', tone: 'up' },
      { label: 'Юз-тестов', value: '30+', tone: 'up' },
      { label: 'Интервью', value: '24', tone: 'up' },
      { label: 'Гипотез валидировано', value: '12', tone: 'up' },
    ],
  },
  {
    title: 'Редизайн сайта',
    description: 'Переосмысление воронки и внедрение дизайн системы',
    tag: 'B2C',
    image: '/images/case-landing.png',
    href: '#landing',
    bg: '#edeeed',
    results: [
      { label: 'Конверсия в регу', value: '+34%', sub: 'Customer', tone: 'up' },
      { label: 'Конверсия в регу', value: '+21%', sub: 'Business', tone: 'up' },
      { label: 'TTM', value: '-37%', tone: 'down' },
    ],
  },
  {
    title: 'Виджет вывода',
    description: 'Редизайн дейли тулзы для отправки средств',
    tag: 'B2B',
    image: '/images/case-withdrawal.png',
    href: '#withdrawal',
    bg: '#edeeed',
    results: [
      { label: 'Успешные выводы', value: '+19%', tone: 'up' },
      { label: 'Ошибки ввода', value: '-44%', tone: 'down' },
      { label: 'Время операции', value: '-28%', tone: 'down' },
      { label: 'Возвраты', value: '-61%', tone: 'down' },
    ],
  },
];

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
