import React from 'react';

export { SectionContainer };

type SectionContainerProps = { title: string; children?: React.ReactNode };
function SectionContainer({ title, children }: SectionContainerProps) {
  return (
    <section>
      <h2 className="text-xl uppercase">{title}</h2>
      <span className="mb-1 block h-0.5 w-full bg-black"></span>
      {children}
    </section>
  );
}
