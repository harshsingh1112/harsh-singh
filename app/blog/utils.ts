import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';
import rehypePrettyCode from 'rehype-pretty-code';
import { components } from '../components/mdx';

export interface BlogPost {
  metadata: Metadata;
  slug: string;
  content: string;
}

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  draft: boolean;
  image?: string;
};

// Function to parse frontmatter from markdown files
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Partial<Metadata> = {};
  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    const trimmedKey = key.trim() as keyof Metadata;
    if (trimmedKey === 'draft') {
      metadata[trimmedKey] = value === 'true';
    } else {
      metadata[trimmedKey] = value;
    }
  });
  return { metadata: metadata as Metadata, content };
}

// Function to get all MDX files from a directory
function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

// Function to read an individual MDX file
export function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

// Function to get all MDX data
export function getMDXData(dir: string): BlogPost[] {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
}

// Function to get blog posts
export function getBlogPosts(): BlogPost[] {
  const posts = getMDXData(path.join(process.cwd(), 'app/blog/posts'));
  return posts
    .filter((post) => !post.metadata.draft)
    .sort((a, b) => {
      return (
        new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
      );
    });
}

// Function to format dates
export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();
  let formattedDate = '';
  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }
  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  if (!includeRelative) {
    return fullDate;
  }
  return `${fullDate} (${formattedDate})`;
}

// Function to get post data from a specific slug
export async function getPostFromSlug(slug: string) {
  const source = await fs.promises.readFile(
    path.join(process.cwd(), 'app/blog/posts', `${slug}.mdx`),
    'utf-8'
  );
  const { content, frontmatter } = await compileMDX<Metadata>({
    source,
    options: {
      parseFrontmatter: true,
      scope: {},
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: 'dracula',
            },
          ],
        ],
      },
    },
    components: components,
  });
  return {
    metadata: frontmatter,
    content,
  };
}

// Certifications data
const certifications = [
  {
    slug: 'ai-fundamentals',
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM',
    issued: 'Jan 2025',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning'],
    link: 'https://www.credly.com/badges/96b85431-1c59-4856-bcc1-6e27fea97914/linked_in_profile',
  },
  {
    slug: 'data-analytics-essentials',
    title: 'Data Analytics Essentials',
    issuer: 'Cisco',
    issued: 'Jan 2025',
    skills: ['Data Analysis', 'Tableau', 'SQL', 'Microsoft Excel', 'Data Visualization'],
    link: 'https://www.credly.com/badges/35bfb421-6412-43f6-9812-75fbb039581f/linked_in_profile',
  },
  {
    slug: 'tableau-intro',
    title: 'Introduction to Tableau',
    issuer: 'Simplilearn',
    issued: 'Jan 2025',
    skills: ['Tableau', 'Data Analysis'],
    link: null,
  },
  {
    slug: 'software-engineering-simulation',
    title: 'Advanced Software Engineering Job Simulation',
    issuer: 'Walmart USA (Forage)',
    issued: 'Jan 2025',
    skills: ['Java', 'Python', 'SQL'],
    link: null,
  },
  {
    slug: 'aws-solutions-architecture',
    title: 'Solutions Architecture Job Simulation',
    issuer: 'AWS APAC (Forage)',
    issued: 'Dec 2024',
    skills: null,
    link: null,
  },
  {
    slug: 'prompt-engineering',
    title: 'Prompt Engineering',
    issuer: 'DeepLearning.AI',
    issued: 'Dec 2024',
    skills: ['Prompt Engineering', 'AI', 'Chatbot Development'],
    link: null,
  },
  {
    slug: 'responsive-web-design',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    issued: 'Dec 2024',
    skills: ['HTML', 'CSS', 'Web Development', 'Front-End Development'],
    link: null,
  },
  {
    slug: 'cloud-essentials',
    title: 'AWS Knowledge: Cloud Essentials',
    issuer: 'AWS',
    issued: 'Jun 2024',
    skills: null,
    link: null,
  },
  {
    slug: 'ai-job-simulation',
    title: 'Artificial Intelligence Job Simulation',
    issuer: 'Forage',
    issued: 'Jun 2024',
    skills: [
      'Communication',
      'Data Analysis',
      'Data Modeling',
      'Machine Learning',
      'Data Visualization',
      'Model Interpretation',
      'Problem Solving',
      'Python',
    ],
    link: null,
  },
  {
    slug: 'excel-data-analytics',
    title: 'Excel for Data & Analytics',
    issuer: 'Chegg Inc.',
    issued: 'Jun 2024',
    skills: ['Microsoft Excel', 'Data Analysis'],
    link: null,
  },
  {
    slug: 'generative-ai-fundamentals',
    title: 'Generative AI Fundamentals',
    issuer: 'Google',
    issued: 'Jun 2024',
    skills: ['Artificial Intelligence'],
    link: null,
  },
  {
    slug: 'generative-ai-intro',
    title: 'Introduction to Generative AI',
    issuer: 'Google',
    issued: 'Jun 2024',
    skills: ['Artificial Intelligence'],
    link: null,
  },
  {
    slug: 'large-language-models-intro',
    title: 'Introduction to Large Language Models',
    issuer: 'Google',
    issued: 'Jun 2024',
    skills: ['Artificial Intelligence'],
    link: null,
  },
  {
    slug: 'software-engineering-intro',
    title: 'Software Engineering Job Simulation',
    issuer: 'J.P. Morgan (Forage)',
    issued: 'Jun 2024',
    skills: ['Python'],
    link: null,
  },
  {
    slug: 'dbms-sql-intro',
    title: 'Introduction to DBMS and SQL Fundamentals',
    issuer: 'Udemy',
    issued: 'Apr 2024',
    skills: ['DBMS', 'SQL'],
    link: null,
  },
  {
    slug: 'iot-intro',
    title: 'Introduction to IoT',
    issuer: 'Cisco',
    issued: 'Apr 2022024',
    skills: null,
    link: null,
  },
  {
    slug: 'ml-foundations',
    title: 'AWS Academy Machine Learning Foundations',
    issuer: 'AWS',
    issued: 'Feb 2024',
    skills: ['Machine Learning', 'AI'],
    link: null,
  },
  {
    slug: 'dbms-course',
    title: 'DBMS Course',
    issuer: 'Scaler',
    issued: 'Jan 2024',
    validUntil: 'Jan 2030',
    skills: ['DBMS'],
    link: null,
  },
  {
    slug: 'cyber-forensics',
    title: 'Cyber Forensics',
    issuer: 'Great Learning',
    issued: 'Dec 2023',
    skills: ['Cybersecurity'],
    link: null,
  },
  {
    slug: 'cryptography-intro',
    title: 'Introduction to Cryptography',
    issuer: 'Great Learning',
    issued: 'Dec 2023',
    skills: ['Cybersecurity', 'Cryptography'],
    link: null,
  },
  {
    slug: 'web-app-attacks',
    title: 'Introduction to Web Application Attacks',
    issuer: 'Great Learning',
    issued: 'Dec 2023',
    skills: ['Cybersecurity'],
    link: null,
  },
  {
    slug: 'linux-basics',
    title: 'Linux Tutorial',
    issuer: 'Great Learning',
    issued: 'Dec 2023',
    skills: ['Cybersecurity', 'Linux Basics', 'Kali Linux'],
    link: null,
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    issuer: 'Great Learning',
    issued: 'Dec 2023',
    validUntil: 'Dec 2033',
    skills: ['Social Media Marketing'],
    link: null,
  },
  {
    slug: 'ethical-hacking-intro',
    title: 'Introduction to Ethical Hacking',
    issuer: 'Great Learning',
    issued: 'Jul 2023',
    skills: ['Cybersecurity', 'Ethical Hacking'],
    link: null,
  },
  {
    slug: 'python-internship',
    title: 'Python Internship',
    issuer: 'upSkill Campus',
    issued: 'Jul 2023',
    skills: ['Python'],
    link: null,
  },
  {
    slug: 'endpoint-security',
    title: 'Endpoint Security',
    issuer: 'Cisco',
    issued: 'Jun 2023',
    skills: ['Anti-Malware Protection', 'Linux Basics', 'Endpoint Security'],
    link: null,
  },
  {
    slug: 'cybersecurity-intro',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    issued: 'Jun 2023',
    skills: ['Cybersecurity'],
    link: null,
  },
  {
    slug: 'networking-basics',
    title: 'Networking Basics',
    issuer: 'Cisco',
    issued: 'Jun 2023',
    skills: ['Networking'],
    link: null,
  },
  {
    slug: 'python-certification',
    title: 'Python Basic Certification',
    issuer: 'HackerRank',
    issued: 'Mar 2023',
    skills: ['Python'],
    link: null,
  },
  {
    slug: 'data-analysis-python',
    title: 'Data Analysis with Python',
    issuer: 'freeCodeCamp',
    issued: 'Sep 2021',
    skills: ['Python', 'Data Analysis'],
    link: null,
  },
  {
    slug: 'digital-marketing',
    title: 'Fundamentals of Digital Marketing',
    issuer: 'Google Digital Garage',
    issued: 'Aug 2021',
    skills: ['Digital Marketing'],
    link: null,
  },
  {
    slug: 'google-analytics',
    title: 'Google Analytics Certification',
    issuer: 'Google Digital Academy - Skillshop',
    issued: 'Jun 2023',
    validUntil: 'Jun 2024',
    skills: ['Google Analytics'],
    link: null,
  },
];

export default certifications;
