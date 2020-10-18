import React from "react";
import { render } from "react-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

import App from "./App";
import GlobalStyle from "./components/GlobalStyle";

const queryCache = new QueryCache();

render(
  <React.StrictMode>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <GlobalStyle />
      <App />
    </ReactQueryCacheProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
