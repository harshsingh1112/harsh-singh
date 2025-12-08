// app/uses/page.tsx
import type { Metadata } from 'next';
import UsesTitle from './uses-title';

export const metadata: Metadata = {
  title: 'Uses',
  description: 'Tools, gear, and software I use regularly.',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-10">
      <section className="space-y-3">
        <UsesTitle />
        <p className="text-muted-foreground">
          A curated list of the hardware, software, and services I use day to day.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Workstation</h2>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          <li>MacBook (M1)</li>
          <li>VS Code with a minimal setup</li>
          <li>Chrome for dev + testing</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Development</h2>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          <li>TypeScript, React, Next.js</li>
          <li>Tailwind CSS for styling</li>
          <li>GitHub for version control</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Productivity</h2>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          <li>Notion for notes & planning</li>
          <li>Figma for quick UI ideas</li>
        </ul>
      </section>
    </main>
  );
}
