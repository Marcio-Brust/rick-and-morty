import React from "react";
import { HeaderStyle } from "./Header.style";
import logo from "../../../public/assets/b6740400-92d4-11ea-8a13-d5f6e0558e9b.png";
import Image from "next/image";
import Link from "next/link";
import fundo from "../../../public/assets/515-5152607_freetoedit-cute-rick-morty-rickandmorty-wallpaper-black-and.png";
import useMedia from "@/utils/hooks/useMedia";

export const Header = () => {
  const media = useMedia("(max-width: 50rem)");

  return (
    <HeaderStyle>
      <nav>
        <Link href="/">
          <Image src={logo} width={0} height={50} priority alt="logo" />
        </Link>
        <Image
          style={{
            position: "fixed",
            zIndex: "-10",
            opacity: "0.03",
            float: "left",
            left: "0%",
          }}
          alt="img"
          src={fundo}
          width={250}
          height={250}
        />
        <Image
          style={{
            position: "fixed",
            zIndex: "-10",
            opacity: "0.03",
            float: "left",
            left: "30%",
          }}
          alt="img"
          src={fundo}
          width={250}
          height={250}
        />
        <Image
          style={{
            position: "fixed",
            zIndex: "-10",
            opacity: "0.03",
            float: "left",
            left: "60%",
          }}
          alt="img"
          src={fundo}
          width={250}
          height={250}
        />
        <Image
          style={{
            position: "fixed",
            zIndex: "-10",
            opacity: "0.03",
            float: "left",
            left: "90%",
          }}
          alt="img"
          src={fundo}
          width={250}
          height={250}
        />
        <div>
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/about">
            <p>About</p>
          </Link>
          <Link href="/login">
            <p>Login</p>
          </Link>
        </div>
      </nav>
      <h1 style={{ fontSize: media ? "2rem" : "5rem" }}>The Rick and Morty</h1>
    </HeaderStyle>
  );
};
