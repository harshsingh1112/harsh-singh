// app/uses/page.tsx
import type { Metadata } from 'next';
import ExperienceTimeline from '../components/experience/ExperienceTimeline';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'My professional journey and detailed work history.',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Experience
        </h1>
        <p className="text-lg text-muted-foreground">
          A timeline of my professional journey, internships, and roles.
        </p>
      </section>

      <section>
        <ExperienceTimeline />
      </section>
    </main>
  );
}
