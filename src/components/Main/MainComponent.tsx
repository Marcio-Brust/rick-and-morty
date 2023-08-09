import { useFetch } from "@/utils/hooks/useFetch";
import { MainStyle } from "./MainComponent.style";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { useEffect, useContext } from "react";
import { PageContext } from "@/context/ContextPage";
import useMedia from "@/utils/hooks/useMedia";

export const MainComponent = () => {
  const { data } = useFetch();
  const { cont, setShowCharacter, showCharacter } = useContext(PageContext);
  const media = useMedia("(max-width: 50rem)");

  useEffect(() => {
    if (media) {
      setShowCharacter(20);
    }
  }, [media, setShowCharacter]);

  function initiScrollPage() {
    if (typeof window === "object") {
      const showid = setInterval(() => {
        setShowCharacter(20);
      }, 3000);
      if (showCharacter === 20) {
        clearInterval(showid);
      }
    }
  }
  const isBrowser = () => typeof window !== "undefined";

  if (isBrowser()) {
    if (showCharacter === 20) {
      window.removeEventListener("wheel", initiScrollPage);
    } else {
      window.addEventListener("wheel", initiScrollPage);
    }
  }

  useEffect(() => {
    window.scroll({
      top: -100,
      behavior: "instant",
    });
    setShowCharacter(10);
  }, [cont, setShowCharacter]);

  return (
    <>
      <MainStyle aria-expanded={media}>
        {data.map((item) => (
          <main key={item.id}>
            <Image
              src={item.image}
              width={media ? "300" : "200"}
              height={media ? "250" : "200"}
              priority
              alt="rickandmortyapi.com"
            />
            <section>
              <div>
                <h1>{item.name}</h1>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.status === "Alive" ? (
                    <GoDotFill size={20} fill="green" />
                  ) : item.status === "unknown" ? (
                    <GoDotFill size={20} fill="gray" />
                  ) : (
                    <GoDotFill size={20} fill="red" />
                  )}
                  <p>
                    {item.status === "Alive"
                      ? "Vivo"
                      : item.status === "unknown"
                      ? "Desconhecido"
                      : "Morto"}{" "}
                    -{" "}
                    {item.species === "Human"
                      ? "Humano"
                      : item.species === "Humanoid"
                      ? "Humanóide"
                      : item.species === "Robot"
                      ? "Robô"
                      : item.species === "Disease"
                      ? "Doença"
                      : item.species === "unknown"
                      ? "Desconhecido"
                      : item.species === "Mythological Creature"
                      ? "Criatura Mitológica"
                      : item.species}
                  </p>
                </div>
              </div>
              <div>
                <span>Última localização conhecida</span>
                <p>
                  {item.location.name === "unknown"
                    ? "Desconhecido"
                    : item.location.name}
                </p>
              </div>
              <div>
                <span>Visto pela primeira vez em:</span>
                <p>
                  {item.origin.name === "unknown"
                    ? "Desconhecido"
                    : item.origin.name}
                </p>
              </div>
            </section>
          </main>
        ))}
      </MainStyle>
    </>
  );
};
