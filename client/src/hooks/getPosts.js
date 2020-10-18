import { useQuery } from "react-query";

import { get } from "../utils/api";

const usePosts = () => {
  return useQuery("posts", async () => await get("posts"));
};

export default usePosts;
