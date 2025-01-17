import path from 'path';
import { Fragment } from 'react';
import { readMDXFile } from '../blog/utils';
import { CustomMDX } from '../components/mdx';
import UsesTitle from './uses-title';

const contentPath = path.join(process.cwd(), 'app', 'uses', 'content.mdx');
const { content } = readMDXFile(contentPath);

export const metadata = {
  title: 'Experience',
  description: 'My Experience',
};

export default function Page() {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <UsesTitle />
        <div className="prose">
          <CustomMDX source={content} />
        </div>
      </div>
    </Fragment>
  );
}
