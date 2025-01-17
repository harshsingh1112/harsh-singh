import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
export default function PageTitle({ title }: { title: string }) {
  return <h1 className="text-3xl font-bold">{title}</h1>;
};
