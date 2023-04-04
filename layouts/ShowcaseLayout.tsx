import React from 'react';

export { ShowcaseLayout };

function ShowcaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="paper:w-paper mx-auto origin-top scale-125 font-serif paper:py-20">
      <div className="paper:h-paper bg-white p-16 pt-10 shadow-none paper:shadow-2xl print:shadow-none">
        {children}
      </div>
    </div>
  );
}
