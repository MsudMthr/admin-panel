import { useEffect } from "react";

const useTitle = (title, dep = null) => {
  useEffect(() => {
    document.title = title;
  }, [dep]);
};

export default useTitle;
