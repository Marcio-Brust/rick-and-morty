import { Header } from "@/components/Header/Header";
import { PageContexProvider } from "@/context/ContextPage";
import { GlobalStyle } from "@/styles/GlobalStyle";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <PageContexProvider>
        <Header />
        <Component {...pageProps} />
      </PageContexProvider>
    </>
  );
}
