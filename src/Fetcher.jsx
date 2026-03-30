import { useEffect, useState } from "react";

export default function useFetch(url, query) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetcher() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error("no country of that name....");
        const unpacked = await response.json();
        setData(unpacked);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (query != "") {
      fetcher();
    }
  }, [url]);

  return { loading, error, data };
}
