import partnersData from '../data/partners.json';

export type Partner = {
  slug: string;
  oldSlug: string;
  name: string;
  areas: AreaSlug[];
  location: string | null;
  states: string[];
  panIndia: boolean;
  since: string | null;
  sinceYear: number | null;
  website: string | null;
  links: string[];
  about: string[];
  projectTitle: string | null;
  project: string[];
  nurturing?: string[];
  images: string[];
};

export type AreaSlug = 'healthcare' | 'education-training' | 'livelihood-enhancement' | 'nurturing-excellence';

export const partners = (partnersData as Partner[]).slice().sort((a, b) => a.name.localeCompare(b.name));

export const site = {
  name: 'Motivation for Excellence',
  short: 'MFE',
  legalName: 'The RG Manudhane Foundation for Excellence',
  url: 'https://motivationforexcellence.org',
  email: 'info@motivationforexcellence.org',
  address: ['1201 Kritika Tower, VN Purav Marg', 'Sion Trombay Road, Chembur', 'Mumbai 400071, Maharashtra'],
  mapUrl: 'https://maps.google.com/?q=Kritika+Tower+VN+Purav+Marg+Chembur+Mumbai+400071',
  description:
    'Motivation for Excellence (MFE) partners with Indian NGOs bringing healthcare, education and livelihoods to rural and tribal communities.',
};

export const nav = [
  { href: '/about/', label: 'About' },
  { href: '/what-we-fund/', label: 'What we fund' },
  { href: '/partners/', label: 'Partners' },
  { href: '/work-with-us/', label: 'Work with us' },
  { href: '/contact/', label: 'Contact' },
];

export const areas: Record<
  AreaSlug,
  { title: string; short: string; tagline: string; intro: string; image: string; highlights: string[] }
> = {
  healthcare: {
    title: 'Healthcare',
    short: 'Healthcare',
    tagline: 'Care that reaches the last mile.',
    intro:
      'Primary care, mental health, eye care, nutrition and medical education for communities the health system struggles to reach. Our partners run a floating clinic on the Brahmaputra, district mental health programmes in Nagpur and community health work in Gadchiroli.',
    image: 'site/healthcare.webp',
    highlights: ['karuna-trust', 'tata-trusts-dmhp-rmhp', 'dr-apj-kalam-library-mgims'],
  },
  'education-training': {
    title: 'Education & Training',
    short: 'Education',
    tagline: 'Learning that changes what is possible.',
    intro:
      'Early childhood care, foundational literacy, girls’ education, school leadership and youth training. From Anganwadis in Yavatmal to classrooms in Rajasthan, we back partners who prove what works and then help it grow.',
    image: 'site/education.webp',
    highlights: ['quest', 'educate-girls', 'nirman'],
  },
  'livelihood-enhancement': {
    title: 'Livelihood Enhancement',
    short: 'Livelihoods',
    tagline: 'Income, water and dignity for rural families.',
    intro:
      'Watershed development, women’s collectives, sustainable farming and enterprise. Our partners help rural and tribal households build incomes that last, and the institutions to protect them.',
    image: 'site/livelihood.webp',
    highlights: ['wotr', 'pradan', 'chetana-vikas'],
  },
  'nurturing-excellence': {
    title: 'Nurturing Excellence',
    short: 'Excellence',
    tagline: 'Backing exceptional people and ideas.',
    intro:
      'Sprinters from the back of beyond, women leaders in Gram Panchayats, khadi artisans, tiny forests on degraded land and a 24-book series on Indian lives. This is where we back excellence in its many forms.',
    image: 'partners/bridges-of-sports/5.webp',
    highlights: ['bridges-of-sports', 'harper-collins', 'prakriti'],
  },
};

export const areaOrder: AreaSlug[] = ['healthcare', 'education-training', 'livelihood-enhancement', 'nurturing-excellence'];

export const values = [
  { title: 'Values', body: 'Integrity, and respect for the communities a programme serves, come first.' },
  { title: 'Effectiveness', body: 'Programmes that deliver results on the ground, not only on paper.' },
  { title: 'Validation', body: 'Evidence that an approach works, and the discipline to keep measuring it.' },
  { title: 'Innovation', body: 'New ideas that are pragmatic enough to work, and to grow.' },
  { title: 'Excellence', body: 'The pursuit of quality in every activity, however humble.' },
];

export const people = {
  founder: {
    name: 'R.G. Manudhane',
    years: '1921 to 2012',
    role: 'Founder and visionary',
    line: 'A quiet, self-made man whose life was a continuous striving for values-based excellence.',
    image: 'team/rg-manudhane.webp',
  },
  tribute: {
    name: 'Shailaja Asave',
    years: '1952 to 2023',
    role: 'Former Trustee',
    line: 'The heart and soul of MFE.',
    image: 'team/shailaja-asave.webp',
  },
  trustees: [
    {
      name: 'Avi Manudhane Nash',
      role: 'Chairman',
      image: 'team/avi-nash.webp',
      bio: 'Avi founded a firm that has advised many of the world’s leading chemical companies on mergers and acquisitions, corporate finance and strategy, and also heads an investment-advisory firm. Earlier he was a partner at Goldman Sachs, where he helped lead the firm’s global chemical industry effort. He served as a director of Sigma-Aldrich Corporation. Besides MFE he heads the US-based Indira Foundation, which supports charitable activities in the US and India. He holds an MBA from Northwestern University, an MSc from Syracuse University and a BTech from IIT Bombay, which named him a Distinguished Alumnus.',
    },
    {
      name: 'Vivek Ragavan',
      role: 'Trustee',
      image: 'team/vivek-ragavan.webp',
      bio: 'Vivek is a telecommunications networking veteran and entrepreneur with more than 35 years of high-technology leadership. He has served as president and CEO of private and public companies and on many boards. He serves on the Advisory Council of the McCormick School of Engineering at Northwestern University and on the board of the Akanksha Fund in the US. He holds a BSc from Northwestern University and an MSc from Cornell University, both in electrical engineering.',
    },
    {
      name: 'Nick Nash',
      role: 'Trustee',
      image: 'team/nick-nash.webp',
      bio: 'Nick is president of Garena, a Singapore-based technology company. He is a member of the World Economic Forum’s working group on local capital markets integration and a term member of the Council on Foreign Relations. Earlier he spent more than a decade with GA, most recently as CEO of its Southeast Asia business, after starting at McKinsey & Company. He holds an MBA from Stanford, where he was an Arjay Miller Scholar, and a degree in chemistry and physics from Harvard. He and his wife co-founded Morph.org, whose Ramanujan Project nurtures exceptional mathematics talent in emerging markets such as India.',
    },
    {
      name: 'Dr. Nilima Ragavan',
      role: 'Trustee',
      image: 'team/nilima-ragavan.webp',
      bio: 'Dr. Ragavan is medical director of the Special Care Nursery at Lucile Packard Children’s Hospital, an attending neonatologist at its NICU at Stanford, and a clinical professor of pediatrics at the Stanford University School of Medicine. She received her medical degree at Grant Medical College, Mumbai, trained in pediatrics at Johns Hopkins and in neonatal-perinatal medicine at Georgetown. She has led several multidisciplinary medical teams to India to provide education and improve services.',
    },
    {
      name: 'Dr. Anand Bang',
      role: 'Trustee',
      image: 'team/anand-bang.webp',
      bio: 'Dr. Bang is a physician and public health specialist with the NGO SEARCH, focusing on public health research, training and service for tribal and rural communities in Gadchiroli. He is also an Advisor with the Tata Trusts.',
    },
    {
      name: 'Sandeep Kabra',
      role: 'Trustee',
      image: 'team/sandeep-kabra.webp',
      bio: 'Sandeep is managing director of Suhans Chemicals Pvt. Ltd. Active in Rotary, he has held leadership positions, regularly undertakes Rotary global grant service projects and is recognised as a major donor. He chairs the Bhartiya Vidya Bhavan, Jalgaon Kendra, and sits on the board of the Indian Red Cross Society, Jalgaon, which runs the largest charitable blood bank in the region.',
    },
  ],
  advisors: [
    {
      name: 'Nilesh Nimkar',
      role: 'Advisor',
      image: 'team/nilesh-nimkar.webp',
      bio: 'Nilesh has over 23 years of experience in early childhood education, elementary education, teacher education and curriculum development, with many programmes for teachers and children in rural and tribal areas. He is founder trustee and director of the Quality Education Support Trust (QUEST) and received the Maharashtra Foundation Award for outstanding social work in education.',
    },
    {
      name: 'Girish Sohani',
      role: 'Advisor',
      image: 'team/girish-sohani.webp',
      bio: 'Girish has over 40 years of experience in natural resource management and rural livelihoods, from village production systems and appropriate technology to agribusiness and farmer producer organisations. His policy work spans institutional development, governance and strategic planning. IIT Bombay gave him its Distinguished Alumnus Award in 2011 for contributions to rural and community development.',
    },
  ],
};

export const coFunders = [
  {
    name: 'Tata Trusts',
    body: 'Together we support QUEST’s Palavee Anganwadi education programme in Yavatmal and Amravati, and the District Mental Health Programme in Nagpur.',
  },
  {
    name: 'Central Square Foundation',
    body: 'We co-fund grants to non-profits working to improve learning outcomes for children from low-income communities.',
  },
];

export const stats = (() => {
  const states = new Set(partners.flatMap((p) => p.states));
  const years = partners.map((p) => p.sinceYear).filter((y): y is number => !!y);
  return {
    partners: partners.length,
    areas: areaOrder.length,
    states: states.size,
    since: Math.min(...years),
    stateList: [...states].sort(),
  };
})();

export function partnersIn(area: AreaSlug) {
  return partners.filter((p) => p.areas.includes(area));
}

export function bySlug(slug: string) {
  return partners.find((p) => p.slug === slug);
}

export function summary(p: Partner, max = 180) {
  const text = p.about[0] || p.project[0] || p.nurturing?.[0] || '';
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(' ')) + '…';
}

export function where(p: Partner) {
  if (p.location) return p.location;
  if (p.panIndia) return 'Pan-India';
  return null;
}
