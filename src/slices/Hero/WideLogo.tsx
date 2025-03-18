"use client";

import { SVGProps } from "react";
import clsx from "clsx";

import { useIsSafari } from "@/lib/useIsSafari";

export function WideLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  const isSafari = useIsSafari(true);
  return (
    <div
    style={{color:'#d1a7c2', fontSize:'250px', fontWeight:800, fontFamily:"Fun"}}
    >
      <div style={{marginTop:'-100px',transform:'rotate(-20deg)',}}>
        FULLSTACK

      </div>
      <div style={{marginLeft:'50%',marginTop:'-150px',fontSize:'150px',transform:'rotate(-20deg)',}}>
        Developer

      </div>
    </div>
  );
}
