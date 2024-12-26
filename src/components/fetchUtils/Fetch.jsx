import { useEffect, useState } from "react";

const useData = (url, renderDependencies) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    (async function () {
      try {
        let response = await fetch(url, controller.signal);
        if (!response.ok)
          throw new Error(`HTTP error: status ${response.status}`);
        response = await response.json();
        setData(response);
        setErrorMessage(null);
      } catch (error) {
        if (error.name === "AbortError") return;
        setErrorMessage(error.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    })();

    setIsLoading(true);
    return () => controller.abort();
  }, [...renderDependencies]);

  return { data, isLoading, errorMessage };
};

export default useData;
