import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type PageContextTypes = {
  cont: number;
  ChangePageNext: (event: React.MouseEvent<HTMLElement>) => void;
  ChangePagePrev: (event: React.MouseEvent<HTMLElement>) => void;
  handlePage: (event: React.MouseEvent<HTMLElement>) => void;
  contPrev: number;
  contNext: number;
  showCharacter: number;
  setShowCharacter: Dispatch<SetStateAction<number>>;
};

const InitialValue = {
  cont: 1,
  ChangePageNext: () => {},
  ChangePagePrev: () => {},
  handlePage: () => {},
  contNext: 4,
  contPrev: 0,
  showCharacter: 10,
  setShowCharacter: () => {},
};

interface ChildProps {
  children: ReactNode;
}

export const PageContext = createContext<PageContextTypes>(InitialValue);

export function PageContexProvider({ children }: ChildProps) {
  const [cont, setCont] = useState<number | any>(InitialValue.cont);
  const [showCharacter, setShowCharacter] = useState<number>(10);

  const contPrev = cont - 1;
  const contNext = cont + 3;

  function handlePage({ target }: any) {
    setCont(+target.innerHTML);
  }

  function ChangePageNext() {
    setCont(cont + 1);
  }

  function ChangePagePrev() {
    setCont(cont - 1);
  }

  return (
    <PageContext.Provider
      value={{
        ChangePageNext,
        ChangePagePrev,
        cont,
        contPrev,
        contNext,
        handlePage,
        showCharacter,
        setShowCharacter,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}
