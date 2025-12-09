import Contact from 'app/components/contact';
import ExperienceTimeline from 'app/components/experience/ExperienceTimeline';
import EducationTimeline from 'app/components/education/EducationTimeline';
import Hero from 'app/components/hero/hero';
import Intro from 'app/components/intro';
import { ScrollProvider } from 'app/components/providers/ScrollProvider';
import Projects from 'app/projects/projects';
import AboutHero from 'app/components/about/AboutHero';
import Skills from 'app/components/skills/Skills';

// Assuming GithubContributions is not critical or not requested explicitly as "photo and myself and resume", 
// but "whatever was there" might imply it. The user specifically said "including my photo and myself, write that with also resume below".



import SectionReveal from 'app/components/SectionReveal';

export default function Page() {
  return (
    <ScrollProvider>
      <Hero />
      <Intro />

      {/* About Section */}
      <SectionReveal id="about" className="bg-white dark:bg-black py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 space-y-20">
          <AboutHero />

          <section>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4">
              <div className="h-[500px] overflow-hidden rounded-lg">
                <iframe
                  src="https://drive.google.com/file/d/1TEzD1f-uSBBdht1wB3qrxEPuLRrpE1qn/preview"
                  className="w-full h-full border-0"
                  title="Harsh Singh Resume"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </SectionReveal>

      {/* Experience Section */}
      <SectionReveal id="experience" className="bg-gray-50 dark:bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="mb-12 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
            Experience
          </h2>
          <ExperienceTimeline />
        </div>
      </SectionReveal>

      {/* Skills Section */}
      <SectionReveal id="skills" className="bg-white dark:bg-black py-16 md:py-24">
        <Skills />
      </SectionReveal>

      {/* Education Section */}
      <SectionReveal id="education" className="bg-white dark:bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="mb-12 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
            Education
          </h2>
          <EducationTimeline />
        </div>
      </SectionReveal>

      {/* Projects Section */}
      <SectionReveal id="projects" className="bg-white dark:bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="mb-12 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Projects />
          </div>
        </div>
      </SectionReveal>

      <Contact />
    </ScrollProvider>
  );
}
