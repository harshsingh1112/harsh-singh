import { ProjectModal } from './types';

interface ProjectProps {
  index: number;
  title: string;
  url: string;
  role: string;
  setModal: (modal: ProjectModal) => void;
}

export default function ProjectItem({ index, title, url, role, setModal }: ProjectProps) {
  return (
    <a
      href={url}
      target="_blank"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="group relative flex h-full min-h-[200px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-gray-200/50 bg-white/40 p-8 backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] dark:border-gray-800/50 dark:bg-gray-900/30 dark:hover:border-pink-500/30 dark:hover:shadow-[0_0_50px_rgba(236,72,153,0.2)] md:min-h-[250px]"
      rel="noreferrer"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-orange-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 transition-colors group-hover:text-pink-600 dark:text-gray-100 dark:group-hover:text-pink-400 sm:text-3xl">
          {title}
        </h2>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-600 underline decoration-gray-300 underline-offset-4 transition-all group-hover:text-pink-500 group-hover:decoration-pink-500 dark:text-gray-300">
          View Project
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 -rotate-45 transform text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-0 group-hover:text-pink-500"
        >
          <path
            d="M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5L19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </a>
  );
}
