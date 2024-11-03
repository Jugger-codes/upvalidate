"use client";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlWallet } from "react-icons/sl";
import Checked from "./../assets/good.svg";
import ShinyButton from "@/components/ui/shiny-button";
import WordFadeIn from "@/components/ui/word-fade-in";
import Pi from './../assets/pi.png';


export default function Home() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const div1Ref = React.useRef<HTMLDivElement>(null);
  const div2Ref = React.useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen text-white text-center py-20 px-6 md:px-12 lg:px-20 flex md:items-center justify-center">
      <div className="grid gap-7">
        <div className="">
          <div className="flex flex-col items-center justify-center gap-3">
            <WordFadeIn words="Validate your wallet" />
            <p className="text-lg max-w-md mx-auto font-medium opacity-80">
              According to Pi Ecosystem, all Pioneers are required to Validate
              their Wallet to help strengthen the Mainnet Ecosystem
            </p>
          </div>
          <div
            className="max-w-[250px] mx-auto md:max-w-sm w-full my-8 relative flex items-center justify-center overflow-hidden"
            ref={containerRef}
          >
            <div className="flex size-full w-full flex-col items-stretch justify-between gap-10">
              <div className="flex items-center justify-between relative z-10">
                <div
                  className="border border-white rounder-full h-16 w-16 flex items-center justify-center rounded-full bg-white"
                  ref={div1Ref}
                >
                  <SlWallet className="text-3xl text-black" />
                </div>

                <div
                  className="border border-white rounder-full h-16 w-16 flex items-center justify-center rounded-full bg-white"
                  ref={div2Ref}
                >
                  <Image
                    src={Checked}
                    alt="Validated"
                    sizes="100%"
                    className="h-9 w-9 object-contain rounded-full bg-green-700"
                  />
                </div>
              </div>

              <AnimatedBeam
                duration={3}
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div2Ref}
              />
            </div>
          </div>

          <Link href={"/validation"}>
            <ShinyButton className="bg-[#8a348e] border-[#edb703] py-3.5 px-14 rounded-full border hover:border-2 transition-all ease-linear duration-200 font-medium tracking-wider">
              Validate Now
            </ShinyButton>
          </Link>
        </div>
        <div className="md:hidden flex items-center justify-center">
          <Image src={Pi} alt="Pi" sizes="100%" className="h-72 w-auto rounded-xl" />
        </div>
      </div>
    </div>
  );
}
