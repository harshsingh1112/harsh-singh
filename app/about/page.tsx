import path from 'path';
import { Fragment } from 'react';
import { readMDXFile } from '../blog/utils';
import { CustomMDX } from '../components/mdx';
import GithubContributions from './github-contributions/github-contributions';
import Occupation from './occupation';

const contentPath = path.join(process.cwd(), 'app', 'about', 'content.mdx');
const { content } = readMDXFile(contentPath);

export const metadata = {
  title: 'About',
  description: 'About Harsh Singh',
};

export default function Page() {
  return (
    <Fragment>
      <Occupation />
      <CustomMDX source={content} />
      <GithubContributions />
       {/* Resume Download Button */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="https://drive.google.com/file/d/1m_M-OAivyVGhphPNLTImkP2oFi6F75fm/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Download Resume
        </a>
      </div>
    </Fragment>
  );
}
