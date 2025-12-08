// app/about/page.tsx
import type { Metadata } from 'next';
import GithubContributions from './github-contributions/github-contributions';
import Occupation from './occupation';
import Resume from './resume';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Harsh Singh',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-12">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="text-muted-foreground">
          I’m Harsh Singh, a developer who enjoys building fast, clean, and
          thoughtful products. I care about performance, UX, and writing code
          that’s easy to reason about.
        </p>
      </section>

      <section>
        {/* Your current role / timeline */}
        <Occupation />
      </section>

      <section>
        {/* GitHub graph section */}
        <GithubContributions />
      </section>

      <section>
        {/* Resume / download / highlights */}
        <Resume />
      </section>
    </main>
  );
}
