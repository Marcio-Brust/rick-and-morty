import { MainComponent } from "@/components/Main/MainComponent";
import { NavPages } from "@/components/Main/NavPages/NavPages";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
      </Head>
      <MainComponent />
      <NavPages />
    </>
  );
}
