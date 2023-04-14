export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname'];

import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { PageShell } from './PageShell';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import logoUrl from './logo.svg';
import type { PageContextServer } from './types';
import { DefaultLayout } from '#root/layouts/DefaultLayout';
import { EmptyLayout } from '#root/layouts/EmptyLayout';

const WEBSITE_LINK = 'https://arabi.alhumsi.me/resume';

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  const Layout = pageContext.exports.Layout || DefaultLayout;
  const OutOfLayout = pageContext.exports.OutOfLayout || EmptyLayout;

  if (!Page) {
    throw new Error('My render() hook expects pageContext.Page to be defined');
  }

  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <OutOfLayout />
      <Layout>
        <Page {...pageProps} />
      </Layout>
    </PageShell>,
  );

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || 'Vite SSR app';
  const desc =
    (documentProps && documentProps.description) ||
    'App using Vite + vite-plugin-ssr';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg" />
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
        <meta property="og:title" content="${title}" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="${desc}" />
        <meta property="og:url" content="${WEBSITE_LINK}" />
        <meta property="og:image" content="/assets/images/screenshot.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="2776" />
        <meta property="og:image:height" content="1666" />

        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}
