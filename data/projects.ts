export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  category: string[]
  year: number
  color: string
  accentColor: string
  image: string
  link: string
  github: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 3,
    title: 'trackmebaby',
    description: 'A background desktop app that watches your projects folder and keeps track of what you are working on. Ask AI questions about your work history',
    longDescription:
      'trackmebaby is a lightweight desktop app that quietly watches your projects folder to build a rich history of your work. Say goodbye 👋 to manually opening and closing todos, forgetting where you left off, and maintaining a separate Notion page just to jot things down related to your project.',

    tech: ['elcrobun.js', 'Gemini', 'TypeScript', 'SQLite', 'TailwindCss', 'ReactJS'],
    category: ['AI', 'Fullstack'],
    year: 2024,
    color: '#6366f1',
    accentColor: '#818cf8',
    image: '/tmb.jpg',
    link: 'https://github.com/Feynmunh/trackmebaby',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Kropify',
    description: 'AI-powered Crop Yield Prediction and Recommendation System',
    longDescription:
      'Kropify is an intelligent crop yield prediction and recommendation system that helps farmers make informed decisions about their crops. It uses machine learning models to predict crop yields based on historical data, weather conditions, and soil properties. It also provides recommendations to farmers on how to improve their crop yields.',
    tech: ['Node.js', 'React', 'Next.js', 'Machine Learning', 'FastAPI,'],
    category: ['AI', 'Machine Learning'],
    year: 2024,
    color: '#10b981',
    accentColor: '#34d399',
    image: '/kropify.png',
    link: 'https://kropify.vercel.app/',
    github: '#',
    featured: true,
  },
  {
    id: 1,
    title: 'evee',
    description: 'evee is an AI-agent which find potential customers for your products through conversations on social media',
    longDescription:
      'A data analytics platform that lets non-technical users query complex datasets using natural language. Translates questions into SQL, executes them, and renders results as beautiful interactive charts. Built with a Python/FastAPI backend, React frontend, and LangChain for query orchestration.',
    tech: ['React', 'Next.js', 'mastra', 'bunjs'],
    category: ['Data', 'Fullstack'],
    year: 2024,
    color: '#f59e0b',
    accentColor: '#fbbf24',
    image: '/evee.png',
    link: 'https://evee.superplexer.com',
    github: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'BillAudit',
    description: 'AI tools spend auditing Platform',
    longDescription:
      ' Most startups don’t know they’re overspending on AI tools. So i build BillAudit a tool which helps you quickly figure out whether your company is overspending on AI tools before renewals. You can also share your report on your email.    ',
    tech: ['Next.js', 'React', 'Node.js',],
    category: ['Frontend'],
    year: 2023,
    color: '#ec4899',
    accentColor: '#f472b6',
    image: '/billaudit.png',
    link: 'https://billaudit.bemohit.dev/',
    github: '#',
    featured: false,
  },

]

export const categories = ['All', 'AI', 'Fullstack', 'Developer Tools', 'Data', 'Realtime', 'SaaS', 'Voice']
