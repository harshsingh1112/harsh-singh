import React from 'react';
import styles from './ResumeLink.module.css';  // Import the CSS module

const ResumeLink: React.FC = () => {
  return (
    <div className={styles.resumeLinkContainer}>
      <a
        href="https://drive.google.com/file/d/1m4fhCcTWa_TwAFlQNddISnJ4UMnTMQfE/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.resumeLink}  // Apply the class from the CSS module
      >
        Resume
      </a>
    </div>
  );
};

export default ResumeLink;
