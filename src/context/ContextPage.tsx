import { ReactNode, createContext, useState } from "react";

type PageContextTypes = {
  cont: number;
  ChangePageNext: (event: React.MouseEvent<HTMLElement>) => void;
  ChangePagePrev: (event: React.MouseEvent<HTMLElement>) => void;
};

const InitialValue = {
  cont: 1,
  ChangePageNext: () => {
    ``;
  },
  ChangePagePrev: () => {
    ``;
  },
};

interface ChildProps {
  children: ReactNode;
}

export const PageContext = createContext<PageContextTypes>(InitialValue);

export function PageContexProvider({ children }: ChildProps) {
  const [cont, setCont] = useState<number | any>(InitialValue.cont);

  function ChangePageNext() {
    setCont(cont + 1);
  }

  function ChangePagePrev() {
    setCont(cont - 1);
  }

  return (
    <PageContext.Provider value={{ ChangePageNext, ChangePagePrev, cont }}>
      {children}
    </PageContext.Provider>
  );
}
