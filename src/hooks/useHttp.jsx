import { useCallback, useState } from "react";

const useHttp = (processData) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const sendRequest = useCallback(
    async (params) => {
      try {
        const response = await fetch(params.url, params.initParams);
        if (!response.ok) {
          throw new Error("something went wrong. Please try again.");
        }
        const data = await response.json();
        processData(data);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    },
    [processData]
  );
  return {
    error,
    isLoading,
    sendRequest,
  };
};

export default useHttp;
