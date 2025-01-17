import { Fragment, ReactNode } from 'react';
import MainLayout from '../../components/layouts/main-layout';
import ScrollProgressBar from './scroll-progress-bar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-2xl">Certifications</h1>
      </header>
      {children}
    </div>
  );
}
