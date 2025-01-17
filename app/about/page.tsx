import path from 'path';
import { Fragment } from 'react';
import { readMDXFile } from '../blog/utils';
import { CustomMDX } from '../components/mdx';
import GithubContributions from './github-contributions/github-contributions';
import Occupation from './occupation';
import Resume from 'app/about/resume';

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
      <Resume />
      <GithubContributions />
    </Fragment>
  );
}
