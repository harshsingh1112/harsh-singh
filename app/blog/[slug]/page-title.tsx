import fs from 'fs';
import path from 'path';

// Removed unused imports
// import { compileMDX } from 'next-mdx-remote/rsc';
// import rehypePrettyCode from 'rehype-pretty-code';
// import { components } from '../components/mdx';

export const certifications = [
  {
    name: "Artificial Intelligence Fundamentals",
    company: "IBM",
    issuedOn: "January 2025",
    skills: ["Artificial Intelligence (AI)", "Machine Learning", "Deep Learning"],
    link: "https://www.credly.com/badges/96b85431-1c59-4856-bcc1-6e27fea97914/linked_in_profile",
  },
  {
    name: "Data Analytics Essentials",
    company: "Cisco",
    issuedOn: "January 2025",
    skills: ["Data Analysis", "Tableau", "SQL", "Microsoft Excel", "Data Visualization"],
    link: "https://www.credly.com/badges/35bfb421-6412-43f6-9812-75fbb039581f/linked_in_profile",
  },
  {
    name: "Introduction to Tableau",
    company: "Simplilearn",
    issuedOn: "January 2025",
    skills: ["Tableau", "Data Analysis"],
    link: "",
  },
  {
    name: "Advanced Software Engineering Job Simulation",
    company: "Walmart USA (Forage)",
    issuedOn: "January 2025",
    skills: ["Java", "Python", "SQL"],
    link: "",
  },
  {
    name: "Solutions Architecture Job Simulation",
    company: "AWS APAC (Forage)",
    issuedOn: "December 2024",
    skills: [],
    link: "",
  },
  {
    name: "Prompt Engineering",
    company: "DeepLearning.AI",
    issuedOn: "December 2024",
    skills: ["Prompt Engineering", "AI", "Chatbot Development"],
    link: "",
  },
  {
    name: "Responsive Web Design",
    company: "freeCodeCamp",
    issuedOn: "December 2024",
    skills: ["HTML", "CSS", "Web Development", "Front-End Development"],
    link: "",
  },
  {
    name: "AWS Knowledge: Cloud Essentials",
    company: "AWS",
    issuedOn: "June 2024",
    skills: [],
    link: "",
  },
  {
    name: "Artificial Intelligence Job Simulation",
    company: "Forage",
    issuedOn: "June 2024",
    skills: [
      "Communication",
      "Data Analysis",
      "Data Modeling",
      "Machine Learning",
      "Data Visualization",
      "Model Interpretation",
      "Problem Solving",
      "Python",
    ],
    link: "",
  },
  {
    name: "Excel for Data & Analytics",
    company: "Chegg Inc.",
    issuedOn: "June 2024",
    skills: ["Microsoft Excel", "Data Analysis"],
    link: "",
  },
  {
    name: "Generative AI Fundamentals",
    company: "Google",
    issuedOn: "June 2024",
    skills: ["Artificial Intelligence"],
    link: "",
  },
  {
    name: "Introduction to Generative AI",
    company: "Google",
    issuedOn: "June 2024",
    skills: ["Artificial Intelligence"],
    link: "",
  },
  {
    name: "Introduction to Large Language Models",
    company: "Google",
    issuedOn: "June 2024",
    skills: ["Artificial Intelligence"],
    link: "",
  },
  {
    name: "Software Engineering Job Simulation",
    company: "J.P. Morgan (Forage)",
    issuedOn: "June 2024",
    skills: ["Python"],
    link: "",
  },
  {
    name: "Introduction to DBMS and SQL Fundamentals",
    company: "Udemy",
    issuedOn: "April 2024",
    skills: ["DBMS", "SQL"],
    link: "",
  },
  {
    name: "Introduction to IoT",
    company: "Cisco",
    issuedOn: "April 2024",
    skills: [],
    link: "",
  },
  {
    name: "AWS Academy Machine Learning Foundations",
    company: "AWS",
    issuedOn: "February 2024",
    skills: ["Machine Learning", "AI"],
    link: "",
  },
  {
    name: "DBMS Course",
    company: "Scaler",
    issuedOn: "January 2024",
    validUntil: "January 2030",
    skills: ["DBMS"],
    link: "",
  },
  {
    name: "Cyber Forensics",
    company: "Great Learning",
    issuedOn: "December 2023",
    skills: ["Cybersecurity"],
    link: "",
  },
  {
    name: "Introduction to Cryptography",
    company: "Great Learning",
    issuedOn: "December 2023",
    skills: ["Cybersecurity", "Cryptography"],
    link: "",
  },
  {
    name: "Introduction to Web Application Attacks",
    company: "Great Learning",
    issuedOn: "December 2023",
    skills: ["Cybersecurity"],
    link: "",
  },
  {
    name: "Linux Tutorial",
    company: "Great Learning",
    issuedOn: "December 2023",
    skills: ["Cybersecurity", "Linux Basics", "Kali Linux"],
    link: "",
  },
  {
    name: "Social Media Marketing",
    company: "Great Learning",
    issuedOn: "December 2023",
    validUntil: "December 2033",
    skills: ["Social Media Marketing"],
    link: "",
  },
  {
    name: "Introduction to Ethical Hacking",
    company: "Great Learning",
    issuedOn: "July 2023",
    skills: ["Cybersecurity", "Ethical Hacking"],
    link: "",
  },
  {
    name: "Python Internship",
    company: "upSkill Campus",
    issuedOn: "July 2023",
    skills: ["Python"],
    link: "",
  },
  {
    name: "Endpoint Security",
    company: "Cisco",
    issuedOn: "June 2023",
    skills: ["Anti-Malware Protection", "Linux Basics", "Endpoint Security"],
    link: "",
  },
  {
    name: "Introduction to Cybersecurity",
    company: "Cisco",
    issuedOn: "June 2023",
    skills: ["Cybersecurity"],
    link: "",
  },
  {
    name: "Networking Basics",
    company: "Cisco",
    issuedOn: "June 2023",
    skills: ["Networking"],
    link: "",
  },
  {
    name: "SSOC Season 2",
    company: "Social - Script Foundation",
    issuedOn: "May 2023",
    skills: [],
    link: "",
  },
  {
    name: "Python Basic Certification",
    company: "HackerRank",
    issuedOn: "March 2023",
    skills: [],
    link: "",
  },
  {
    name: "Data Analysis with Python",
    company: "freeCodeCamp",
    issuedOn: "September 2021",
    skills: [],
    link: "",
  },
  {
    name: "Fundamentals of Digital Marketing",
    company: "Google Digital Garage",
    issuedOn: "August 2021",
    skills: [],
    link: "",
  },
  {
    name: "Google Analytics Certification",
    company: "Google Digital Academy (Skillshop)",
    issuedOn: "June 2023",
    expiredOn: "June 2024",
    skills: ["Google Analytics"],
    link: "",
  },
];


export interface BlogPost { // Keep this interface only if needed later
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

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

export function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

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
