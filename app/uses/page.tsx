import path from 'path';
import { Fragment } from 'react';
import { readMDXFile } from '../blog/utils';
import { CustomMDX } from '../components/mdx';
import UsesTitle from './uses-title';

const contentPath = path.join(process.cwd(), 'app', 'uses', 'content.mdx');
const { content } = readMDXFile(contentPath);

// Debugging log
if (!content) {
  console.error('MDX content is null or undefined');
}

export const metadata = {
  title: 'Experience',
  description: 'My Experience',
};

export default function Page() {
  if (!content) {
    return <div>Error: Content could not be loaded</div>;
  }

  return (
    <Fragment>
      <UsesTitle />
      <CustomMDX source={content} />
    </Fragment>
  );
}
