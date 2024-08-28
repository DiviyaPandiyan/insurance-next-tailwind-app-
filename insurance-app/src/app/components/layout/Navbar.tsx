import NextLink from "next/link";
import React from "react";

import { FaHeart} from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

type Props = {};

export default function Navbar({}: Props) {
  return (<>
  <nav className="w-full bg-white flex justify-between align-items: center drop-shadow-md ">
    
      <section className="text-black justify-center">
        <ul className="inline-flex  ml-16 mb-6 mt-6 ">
          <li><NextLink href={"/"} className="pl-4" >My Personal Protection </NextLink></li>
          <li><NextLink href={"/"} className="pl-4">My Corporate Cover </NextLink></li>
        </ul>
      </section>
      <section className="flex items-center gap-4 justify-between pr-4 mr-14">
      <FaHeart className="text-2xl " />AFR
      <div>|</div>
      <RxAvatar  className="bg-D9D9D9 text-6xl" />USD
      </section>
    </nav>
    </>
    
  );
}

