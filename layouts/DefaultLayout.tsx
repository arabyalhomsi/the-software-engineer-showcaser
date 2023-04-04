import React from 'react';

export { DefaultLayout };

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
