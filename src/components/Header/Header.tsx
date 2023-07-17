import React from "react";
import { HeaderStyle } from "./Header.style";
import logo from "../../../public/assets/b6740400-92d4-11ea-8a13-d5f6e0558e9b.png";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <HeaderStyle>
      <nav>
        <Link href="/">
          <Image src={logo} width={0} height={50} priority alt="logo" />
        </Link>
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
    </HeaderStyle>
  );
};
