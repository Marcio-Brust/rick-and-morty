"use client";
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
          <main key={item.id}>
            <Image
              src={item.image}
              width={200}
              height={200}
              priority
              alt="rickandmortyapi.com"
            />
            <section>
              <div>
                <h1>{item.name}</h1>
                <p>{item.status}</p>
              </div>
              <div>
                <span>Last known.location</span>
                <p>{item.location.name}</p>
              </div>
              <div>
                <span>First seen in:</span>
                <p>{item.origin.name}</p>
              </div>
            </section>
          </main>
        ))}
      </MainStyle>
    </>
  );
};
