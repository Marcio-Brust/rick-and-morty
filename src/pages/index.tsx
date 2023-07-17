import { MainComponent } from "@/components/Main/MainComponent";
import { NavPages } from "@/components/NavPages/NavPages";
import Head from "next/head";



export default function Home() {
  return (
    <>
      <Head>
      
        <title>The Rick and Morty</title>
      </Head>
      <MainComponent />
      <NavPages />
    </>
  );
}
