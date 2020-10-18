import React from "react";

import TestComponent from "./components/TestComponent/TestComponent";
import usePosts from "./hooks/getPosts";

const App = () => {
  const { data, error, status } = usePosts();

  return (
    <div>
      <pre>{JSON.stringify({ data, error, status }, null, 2)}</pre>
      <TestComponent />
    </div>
  );
};

export default App;
