import { PageContext } from "@/context/ContextPage";
import { useContext, useEffect, useState } from "react";

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

  const pages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42,
  ];

  const { cont } = useContext(PageContext);

  useEffect(() => {
    async function api(url: string) {
      const response = await fetch(url, {
        cache: "no-cache",
      });
      const dataJson = await response.json();
      setData(dataJson.results.map((item: any) => item).slice(0, 6));
    }
    api(`https://rickandmortyapi.com/api/character?page=${cont.toString()}`);
  }, [cont]);

  return { data, setData, pages };
}
