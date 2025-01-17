import { useEffect } from 'react';
import certifications from '../utils/certifications.json';

export default function CertificationPage({ params }: { params: { slug: string } }) {
  const certification = certifications.find((cert) => cert.slug === params.slug);

  if (!certification) {
    return <div>Certification not found.</div>;
  }

  return (
    <main>
      <h1>{certification.title}</h1>
      <p>{certification.description}</p>
      <ul>
        {certification.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <a href={certification.link} target="_blank" rel="noopener noreferrer">
        View Certification
      </a>
    </main>
  );
}
