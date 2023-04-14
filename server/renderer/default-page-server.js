import { j as jsx, F as Fragment, a as jsxs } from "../chunks/ac9dafa4.js";
import ReactDOMServer from "react-dom/server";
import React from "react";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import "react/jsx-runtime";
const Context = React.createContext(void 0);
function PageContextProvider({
  pageContext,
  children
}) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
const tailwind = "";
const global = "";
const index = "";
function PageShell({
  children,
  pageContext
}) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children }) });
}
const logoUrl = "/assets/static/logo.bebe2e90.svg";
function DefaultLayout({ children }) {
  return /* @__PURE__ */ jsx("div", { children });
}
function EmptyLayout() {
  return /* @__PURE__ */ jsx(Fragment, {});
}
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const Layout = pageContext.exports.Layout || DefaultLayout;
  const OutOfLayout = pageContext.exports.OutOfLayout || EmptyLayout;
  if (!Page) {
    throw new Error("My render() hook expects pageContext.Page to be defined");
  }
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsxs(PageShell, { pageContext, children: [
      /* @__PURE__ */ jsx(OutOfLayout, {}),
      /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx(Page, { ...pageProps }) })
    ] })
  );
  const { documentProps } = pageContext.exports;
  const title = documentProps && documentProps.title || "Vite SSR app";
  const desc = documentProps && documentProps.description || "App using Vite + vite-plugin-ssr";
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
    }
  };
}
export {
  passToClient,
  render
};
