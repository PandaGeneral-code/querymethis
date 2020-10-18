import React from "react";
import { useQueryCache } from "react-query";

const TestComponent = () => {
  const cache = useQueryCache();

  return (
    <div>
      <pre>
        {JSON.stringify(
          {
            result: cache.getQueryData("posts"),
          },
          null,
          2
        )}
      </pre>
    </div>
  );
};

export default TestComponent;
