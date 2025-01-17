import certifications from '../utils/certifications.json';

const CertificationsPage = () => {
  return (
    <div>
      <h1>Certifications</h1>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index}>
            <h2>{cert.name}</h2>
            <p>
              <strong>Issued by:</strong> {cert.company}
            </p>
            <p>
              <strong>Issued On:</strong> {cert.issuedOn}
            </p>
            <p>
              <strong>Skills:</strong> {cert.skills.join(', ')}
            </p>
            {cert.link && (
              <p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificationsPage;
