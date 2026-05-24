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

export const otherProjects: CaseItem[] = [
  {
    title: 'Shoofi',
    description: 'Дубайская площадка по принципу Avito',
    tag: 'B2C',
    image: '/images/case-shoofi.png',
    href: '#shoofi',
    bg: '#edeeed',
    results: [
      { label: 'Время публикации', value: '-46%', tone: 'up' },
      { label: 'Активация новых юзеров', value: '+22%', tone: 'up' },
      { label: 'Глубина просмотра', value: '+18%', tone: 'up' },
    ],
  },
  {
    title: 'GuruCan',
    description: 'LMS для США рынка',
    tag: 'B2C',
    image: '/images/case-gurucan.png',
    href: '#gurucan',
    bg: '#e8eedf',
    results: [
      { label: 'Конверсия в покупку', value: '+24%', tone: 'up' },
      { label: 'Удержание учеников', value: '+17%', tone: 'up' },
      { label: 'NPS', value: '+12', tone: 'up' },
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

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  companyLogo?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Работали с Толей в одной продуктовой команде в 22-м. Вместе проводили интервью с пользователями и улучшали UX первой сессии. Работать было комфортно, весело и продуктивно. Подход Толи к работе на синьорском уровне — не просто «скажи что задизайнить», а начиная с понимания сегмента и проблемы, которую решаем, плюс использование JTBD.',
    name: 'Алексей',
    role: 'Менеджер продукта • Точка Банк',
    avatar: '/avatars/a1.jpg',
    companyLogo: '/logos/tochka.png',
  },
  {
    quote:
      'С Анатолием работали над ключевыми сценариями новой версии доски объявлений Shoofi в ОАЭ. Он переработал основные пользовательские флоу, сократив среднее время публикации. Провёл глубокое обновление дизайн-системы: сформировал принципы, выстроил процесс управления изменениями. Анатолий — редкий продуктовый дизайнер, сочетающий системное мышление, эстетику и фокус на метриках.',
    name: 'Давид',
    role: 'Head of Product Design at Shoofi',
    avatar: '/avatars/a2.jpg',
    companyLogo: '/logos/shoofi.png',
  },
  {
    quote:
      'Не делает квадратных колёс, всегда задаёт правильные вопросы и докапывается до сути продукта. Помогает сфокусироваться на том, что действительно даёт ценность бизнесу. Десятки UX/UI фиксов привели к лучшей конверсии в нашем проекте. С ним легко и приятно вести коммуникацию, в общем классный вайб!',
    name: 'Тимур',
    role: 'Founder of GuruCan',
    avatar: '/avatars/a3.jpg',
    companyLogo: '/logos/gurucan.png',
  },
  {
    quote:
      'Толя — тот самый дизайнер, который делает дизайн осмысленным. Он всегда копает вглубь, думает о пользователе и результате. С ним проекты не просто красивые, а работающие! Благодаря исследовательскому подходу и вниманию к данным помогает принимать продуктовые решения, которые реально влияют на метрики и рост бизнеса.',
    name: 'Антон',
    role: 'Product owner B2B • Cryptopay',
    avatar: '/avatars/a4.jpg',
    companyLogo: '/logos/cryptopay.png',
  },
  {
    quote:
      'Мы работали с Толей в Cryptopay несколько лет. Он смотрит на продукт с разных сторон — бизнеса, пользователей и разработки. Не спешит делать «картинку», а сначала отвечает на вопрос «зачем». Отличается системным мышлением, стремлением к автоматизации и участием во всём DesOps-цикле. Рекомендую для сложных проектов.',
    name: 'Павел',
    role: 'Lead designer Venus Protocol • Binance',
    avatar: '/avatars/a5.jpg',
    companyLogo: '/logos/cryptopay.png',
  },
  {
    quote:
      'Работал с Анатолием в сервисе IT-Park. Делали клиентское приложение с магазином и дизайн-систему. Анатолий зарекомендовал себя как ответственный и исполнительный UI/UX инженер и лидер. Всегда конструктивно относился к критике и шел навстречу разработчикам по всем вопросам и рабочим процессам.',
    name: 'Сергей',
    role: 'Ведущий инженер • Билайн ИТ',
    avatar: '/avatars/a6.jpeg',
    companyLogo: '/logos/itpark.png',
  },
  {
    quote:
      'Я работала с Анатолием над исследованием пользовательского поведения в приложении. Толя подготовил фреймворк, нашёл респондентов, подготовил сценарии и гипотезы для проверки, объяснил всем членам команды цели и ожидаемый результат. Это была очень продуктивная и эффективная работа.',
    name: 'Рената',
    role: 'Head of B2C support • Cryptopay',
    avatar: '/avatars/a7.jpeg',
    companyLogo: '/logos/cryptopay.png',
  },
  {
    quote:
      'Мы работали вместе в цифровом агентстве ENDY Branding над проектом для сети азиатских ресторанов. Меня впечатлили его скорость и фокус на результате. Сейчас мы в разных компаниях, но остаёмся на связи. В спорах о будущем индустрии иногда не согласны, но я очень хочу снова поработать с ним.',
    name: 'Александр',
    role: 'Senior Designer • AMD Silo AI',
    avatar: '/avatars/a1.jpg',
    companyLogo: '/logos/endylab.png',
  },
  {
    quote:
      'Мне посчастливилось работать c Анатолием более трёх лет, и он действительно выдающийся дизайнер. Он всегда внимателен к деталям, полон идей и глубоко погружён в каждый кейс, за который берётся. Работать с ним было очень вдохновляюще — он всегда привносил в команду креативность, точность и невероятную энергию.',
    name: 'Александр',
    role: 'Senior QA engineer • Cryptopay',
    avatar: '/avatars/a3.jpg',
    companyLogo: '/logos/cryptopay.png',
  },
];
