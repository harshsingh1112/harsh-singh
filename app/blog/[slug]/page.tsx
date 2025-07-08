export default async function Blog() {
  return (
    <section>
      <h1>Blog Title</h1>

      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Published Date
        </p>
      </div>

      <article className="prose md:max-w-5xl">
        Blog content goes here...
      </article>
    </section>
  );
}
