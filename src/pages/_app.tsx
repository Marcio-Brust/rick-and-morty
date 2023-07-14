import { PageContexProvider } from "@/context/ContextPage";
import { GlobalStyle } from "@/styles/GlobalStyle";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <PageContexProvider>
        <Component {...pageProps} />
      </PageContexProvider>
    </>
  );
}
