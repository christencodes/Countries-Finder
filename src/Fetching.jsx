import { useEffect, useState } from "react";

//creating a custom hook allows each component to fetch data independently
//context would have forced them all to update with the same data
//useContext is not appropriate for fetching data , especially when different components need
//different types of data

//we will pass this where needed - custom hook type shit
export default function useFetch(url) {
  const [isLoading, setLoading] = useState(false);
  const [isData, setData] = useState(null);
  const [isError, setError] = useState(null);

  useEffect(() => {
    async function fetchCountryData() {
      try {
        //set loading to true - changes component behavir
        setLoading(true);
        const response = await fetch(url);
        //checking response - if !response throw error -> skips to catch block
        if (!response.ok)
          throw new Error("there was an error during fetching....");
        const dataContainer = await response.json();
        setData(dataContainer);
      } catch (e) {
        console.log(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchCountryData();
    console.log(isData);
  }, [url]);

  return { isLoading, isError, isData };
}
