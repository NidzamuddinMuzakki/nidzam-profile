"use client";

import { SVGProps } from "react";
// import clsx from "clsx";

// import { useIsSafari } from "@/lib/useIsSafari";

export function WideLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  // const isSafari = useIsSafari(true);
  console.log(props,className)
  return (
    <div
    style={{color:'#d1a7c2',  fontWeight:800, fontFamily:"Fun"}}
    >
      <div className="fullstack" style={{}}>
        FULLSTACK

      </div>
      <div className="developer" style={{}}>
        Developer

      </div>
    </div>
  );
}
