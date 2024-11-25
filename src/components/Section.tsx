interface SectionProps {
  id: string;
  title: string;
  content: string;
}

export default function Section({ id, title, content }: SectionProps) {
  return (
    <section
      id={id}
      className='border-t border-border bg-dark px-6 py-20 text-light'
    >
      <div className='mx-auto max-w-7xl px-4 text-center sm:px-6'>
        <h2 className='mb-4 text-2xl font-bold lg:text-4xl'>{title}</h2>
        <p className='text-base lg:text-lg'>{content}</p>
      </div>
    </section>
  );
}
