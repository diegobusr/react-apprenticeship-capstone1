import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await fetch(url);
      const resultJson = await result.json();
      setData(resultJson.items);
    })();
  }, [url]);

  return { data };
}
