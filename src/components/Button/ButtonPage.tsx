import { PageContext } from "@/context/ContextPage";
import { useContext } from "react";
import { ButtonStyle } from "./ButtonPage.style";
import { VscTriangleRight, VscTriangleLeft } from "react-icons/vsc";
import { useFetch } from "@/utils/hooks/useFetch";

export const Button = () => {
  const { pages } = useFetch();
  const { ChangePageNext, ChangePagePrev, cont } = useContext(PageContext);

  const activeNext = cont === 42 ? true : false;
  const activePrev = cont === 1 ? true : false;

  return (
    <>
      <ButtonStyle disabled={activePrev} onClick={ChangePagePrev}>
        <VscTriangleLeft style={{ color: "gold" }} size={30} />
      </ButtonStyle>
      {pages
        .map((page, index) => (
          <button
            style={{
              padding: "20px",
              fontSize: "1rem",
              fontWeight: "500",
              background: "none",
              border: "none",
              color: `${page === cont ? "gold" : "rgb(255, 255, 255)"}`,
              cursor: "pointer",
            }}
            key={index}
          >
            {page}
          </button>
        ))
        .slice(cont - 1, cont + 3)}
      <ButtonStyle disabled={activeNext} onClick={ChangePageNext}>
        <VscTriangleRight style={{ color: "gold" }} size={30} />
      </ButtonStyle>
    </>
  );
};
