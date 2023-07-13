import { useFetch } from "@/utils/hooks/useFetch";
import { MainStyle } from "./MainComponent.style";
import Image from "next/image";

export const MainComponent = () => {
  const { data } = useFetch();

  data.map((item) => item);
  return (
    <>
      <MainStyle>
        {data.map((item) => (
          <div key={item.id}>
            <Image
              src={item.image}
              width={200}
              height={200}
              priority
              alt="rickandmortyapi.com"
            />
            <p>{item.name}</p>
          </div>
        ))}
      </MainStyle>
    </>
  );
};
