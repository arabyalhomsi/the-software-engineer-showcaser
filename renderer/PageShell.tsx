import React from 'react';
import { PageContextProvider } from './usePageContext';
import type { PageContext } from './types';

// Global CSS
import './css/tailwind.css';
import './css/global.css';

// Fonts
import '@fontsource/kadwa/400.css';

export { PageShell };

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        {children}
      </PageContextProvider>
    </React.StrictMode>
  );
}
