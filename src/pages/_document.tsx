import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pr-BR">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;700&family=Roboto:wght@400;500;700;900&display=swap"
      />
      <link rel="icon" type="icon" href="/../../public/assets/favicon.ico" />

      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
