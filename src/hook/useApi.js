import axios from "axios";
import { useEffect, useState } from "react";
const useApi = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => setData(response.data.data))
      .finally(() => setIsLoading(false));
  }, []);
  return { data, isLoading };
};

export default useApi;
