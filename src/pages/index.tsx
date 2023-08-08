import { MainComponent } from "@/components/Main/MainComponent";
import { NavPages } from "@/components/NavPages/NavPages";
import Head from "next/head";
import icon from "../../public/assets/favicon.ico";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../../public/assets/favicon.ico" />
        <title>The Rick and Morty</title>
      </Head>

      <MainComponent />

      <NavPages />
    </>
  );
}
