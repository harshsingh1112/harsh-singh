export default async function Blog(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;

  return (
    <section>
      <h1>{slug}</h1> {/* Displays the slug as blog title for now */}

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
