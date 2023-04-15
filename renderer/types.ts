export type { PageContextServer };
export type { PageContextClient };
export type { PageContext };
export type { PageProps };

import type {
  PageContextBuiltIn,
  /*
  // When using Client Routing https://vite-plugin-ssr.com/clientRouting
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient
  /*/
  // When using Server Routing
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient,
  //*/
} from 'vite-plugin-ssr/types';

type Page = (pageProps: PageProps) => React.ReactElement;
type PageProps = object;

export type DocumentProps = {
  title?: string;
  description?: string;
};

export type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  urlPathname: string;
  exports: {
    documentProps?: DocumentProps;
    Layout?: ({
      children,
      footer,
    }: {
      children: React.ReactNode;
      footer?: React.ReactNode;
    }) => JSX.Element;
    OutOfLayout?: () => JSX.Element;
    Footer?: () => JSX.Element;
  };
};

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;
