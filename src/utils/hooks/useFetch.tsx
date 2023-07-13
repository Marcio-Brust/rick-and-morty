import { useEffect, useState } from "react";

type DataProps = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  url: string;
  created: string;
};

export function useFetch() {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    async function api(url: string) {
      const response = await fetch(url);
      const dataJson = await response.json();
      setData(dataJson.results.map((item: any) => item).slice(0, 6));
    }
    api("https://rickandmortyapi.com/api/character?page=1");
  }, []);

  return { data };
}
