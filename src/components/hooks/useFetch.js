import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    callApi();
  }, []);
  const callApi = async () => {
    try {
      const response = await fetch(url);
      const resData = await response.json();

      setData(resData);
      setIsLoading(false);
      setFetchError(false);
    } catch (err) {
      setFetchError(true);
    }
  };
  return { data, isLoading, setData, fetchError };
};
