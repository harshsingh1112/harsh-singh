export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white">
      {children}
    </h1>
  );
}
