import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (params) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(params)
    const fetchData = async () => {
      setIsLoading(true);
      const options = {
        method: 'GET',
        url: 'https://api.weatherstack.com/current?access_key=1444aa8157b4663fcf0c4479128a9d96',
        params: {
          query: params,
        }
      };
      try {
        const response = await axios.request(options);
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params]);

  return { data, isLoading, error };
};

export default useFetchData;