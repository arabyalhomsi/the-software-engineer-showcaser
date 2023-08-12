export { render };

import React from 'react';
import ReactGA from 'react-ga4';
import { hydrateRoot } from 'react-dom/client';
import { PageShell } from './PageShell';
import type { PageContextClient } from './types';
import { DefaultLayout } from '#root/layouts/DefaultLayout';
import { EmptyLayout } from '#root/layouts/EmptyLayout';

// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  const Layout = pageContext.exports.Layout || DefaultLayout;
  const OutOfLayout = pageContext.exports.OutOfLayout || EmptyLayout;
  const Footer = pageContext.exports.Footer || (() => <></>);

  const pageView = document.getElementById('page-view');

  if (pageView === null) {
    return;
  }

  if (!Page) {
    throw new Error(
      'Client-side render() hook expects pageContext.Page to be defined',
    );
  }

  // Initalize google analytics in production
  if (import.meta.env.PROD) {
    ReactGA.initialize('G-R3NKXM1S6M');
  }

  hydrateRoot(
    pageView,
    <PageShell pageContext={pageContext}>
      <OutOfLayout />
      <Layout footer={<Footer />}>
        <Page {...pageProps} />
      </Layout>
    </PageShell>,
  );
}
