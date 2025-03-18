import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import React from "react";
import { asImageSrc } from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Logo } from "@/components/Logo";
import { Bounded } from "./Bounded";
import { FooterPhysics } from "./FooterPhysics";

export async function Footer() {
  // const client = createClient();
  // const settings = await client.getSingle("settings");

  // const boardTextureURLs = settings.data.footer_skateboards
  //   .map((item) => asImageSrc(item.skateboard, { h: 600 }))
  //   .filter((url): url is string => Boolean(url));

  return (
    <footer className="bg-texture bg-zinc-900 text-white overflow-hidden">
      
      <Bounded as="nav">
        <ul className="flex flex-wrap justify-center gap-8 ~text-lg/xl">
        &#169;CopyRight ZAKI
          {/* {settings.data.navigation.map((item) => (
            <li key={item.link.text} className="hover:underline">
              <PrismicNextLink field={item.link} />
            </li>
          ))} */}
        </ul>
      </Bounded>
      {/* List of links */}
    </footer>
  );
}
