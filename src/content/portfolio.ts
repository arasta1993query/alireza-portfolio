export const profile = {
  name: 'Alireza Asghari Tabrizi',
  title: 'Senior Software Engineer',
  location: 'Muscat, Oman',
  timezone: 'UTC+04',
  email: 'alias1371@gmail.com',
  linkedin: 'https://www.linkedin.com/in/alireza-asghari-tabrizi',
  github: 'https://github.com/arasta1993query',
  summary: 'I build web products with React, Next.js, Vue and .NET. My work spans high-volume commerce, streaming and bilingual booking platforms.',
}

export const metrics = [
  { label: 'Years in software engineering', value: '7' },
  { label: 'Daily sellers using the app I built', value: '1,000', suffix: '+' },
  { label: 'Daily orders across two storefronts', value: '100,000', suffix: '+' },
]

export const featuredProject = {
  name: 'SeaJoy',
  context: 'LIVE PROJECT / ATHRA STUDIO',
  description: 'A bilingual website for discovering tours in Oman. Visitors can submit a booking request in English or Arabic, and the operator receives an email with the details for follow-up.',
  technologies: ['Nuxt', '.NET', 'Arabic RTL'],
  url: 'https://seajoyoman.com',
  domain: 'seajoyoman.com',
  image: './media/seajoy-home.webp',
}

export type Diagram = 'architecture' | 'merchant' | 'invoice'

interface Project {
  name: string
  context: string
  description: string
  technologies: string[]
  diagram: Diagram
  url?: string
}

export const projects: Project[] = [
  {
    name: 'Storefront migration',
    context: 'OKALA / PLATFORM ARCHITECTURE',
    description: 'Designed a phased Next.js 11 to 15 migration for two storefronts handling 100,000+ daily orders, using shared packages and Nginx routing to support a zero-downtime cutover.',
    technologies: ['Next.js', 'TypeScript', 'Nginx'],
    diagram: 'architecture',
  },
  {
    name: 'Merchant workspace',
    context: 'OKALA / RETAIL OPERATIONS',
    description: 'Built and launched a React workspace used daily by 1,000+ sellers, with real-time order notifications and custom audio alerts.',
    technologies: ['React', 'Vite', 'Real-time events'],
    diagram: 'merchant',
  },
  {
    name: 'Ghappan',
    context: 'IN DEVELOPMENT / FINANCE & INVENTORY',
    description: 'Building a workflow that turns photos of invoices and bank receipts into draft purchase, sales, and settlement records for review.',
    technologies: ['Document extraction', 'Inventory', 'Human review'],
    diagram: 'invoice',
    url: 'https://athra.studio/en/projects/ghappan',
  },
]

interface Job {
  company: string
  role: string
  dates: string
  description: string
  url?: string
}

export const experience: Job[] = [
  {
    company: 'Athra Studio',
    role: 'Founder & Lead Software Engineer',
    dates: 'Oct 2026 — Present',
    description: 'Lead client delivery and internal product development from Muscat. Delivered SeaJoy’s bilingual tour discovery and booking-request experience and am developing Ghappan.',
    url: 'https://athra.studio',
  },
  {
    company: 'Okala',
    role: 'Senior Full-Stack Developer',
    dates: 'Nov 2022 — Sep 2026',
    description: 'Led frontend architecture for a phased storefront upgrade, shipped the merchant app independently, migrated an Angular back office to React, and built a .NET reservation system.',
  },
  {
    company: 'Gapfilm',
    role: 'Front-End Developer',
    dates: 'Oct 2020 — Oct 2022',
    description: 'Developed a server-rendered Vue and Nuxt streaming frontend and adapted it for the constraints of Samsung Tizen TVs.',
  },
  {
    company: 'Irantic',
    role: 'Full-Stack Developer',
    dates: 'Nov 2019 — Nov 2020',
    description: 'Built the event-ticketing frontend independently with Vue, Laravel server rendering, and custom CSS.',
  },
]

export const skills = [
  { name: 'Frontend', items: ['TypeScript', 'React', 'Next.js', 'Vue', 'Nuxt', 'Vite', 'Tailwind CSS', 'SSR & RSC', 'RTL interfaces', 'Web performance'] },
  { name: 'Backend & data', items: ['C# / .NET', 'REST APIs', 'Entity Framework', 'PostgreSQL', 'SQL Server', 'Redis', 'Kafka', 'Flink'] },
  { name: 'Infrastructure', items: ['Docker', 'Nginx', 'Cloudflare', 'Kubernetes', 'GitHub Actions', 'ArgoCD'] },
]

export const background = [
  { name: 'Education', items: ['B.Sc. Chemistry, Shahid Beheshti University · 2017', 'React Bootcamp, MAPSAHR Group · 2021'] },
  { name: 'Languages', items: ['Persian · Native', 'English · Professional working proficiency'] },
]

export const resumes = [
  {
    title: 'Frontend résumé',
    file: 'Alireza_Asghari_Tabrizi_Frontend_Resume.pdf',
    description: 'React, Next.js and TypeScript',
  },
  {
    title: 'Full-stack résumé',
    file: 'Alireza_Asghari_Tabrizi_Fullstack_Resume.pdf',
    description: 'React, Nuxt and .NET',
  },
]
