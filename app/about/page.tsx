import React from "react";
import AboutMe from "./../../assets/About_Me.png";
import AboutBack from "./../../assets/about_back.png";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Rashad/Footer";
import AboutBanner from "./../../assets/Banner_Image.png";
import YoutubeIcon from "./../../assets/youtube_icon.svg";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export default function page() {
  return (
    <main className="w-screen overflow-hidden">
      <div className="pt-40 overflow-hidden bg-[#161616] relative">
        <Image
          src={AboutBack}
          alt="About Me"
          sizes="100%"
          fill
          className="h-full w-full object-cover object-bottom absolute z-0"
        />
        <div className="absolute top-20">
          <VelocityScroll
            text="HI, I’M RASHAD"
            default_velocity={2}
            className="font-display text-center text-[150px] lg:text-[200px] font-bold tracking-[-0.02em] text-white/10"
          />
        </div>
        <div className="grid md:grid-cols-[minmax(280px,_300px)_1fr] lg:grid-cols-[minmax(300px,_550px)_1fr] items-end gap-5 relative z-20 px-6 md:px-10 xl:px-20">
          <div>
            <Image
              src={AboutMe}
              alt="About Me"
              sizes="100%"
              className="max-h-[600px] h-full w-full object-contain object-center"
            />
          </div>
          <div className="space-y-4 text-white pb-12">
            <h3 className="text-5xl font-medium">About me</h3>
            <p className="text-base md:text-lg xl:text-3xl opacity-65">
              Rashad Aldridge is a renowned motivational speaker with a gift for
              transforming lives through the power of storytelling, resilience,
              and action-oriented strategies. From overcoming personal struggles
              to achieving remarkable professional success.
            </p>
            <div>
              <Link href={""}>
                <button className="bg-rashad py-4 flex items-center gap-5 text-white text-base px-12 rounded-full">
                  <p className="font-semibold">Speak with Rashad</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1A1C1F] py-7 flex items-center flex-wrap md:flex-nowrap justify-center gap-5 md:gap-10 xl:gap-24 px-6 text-center">
        <p className="text-base xl:text-2xl text-white">
          The Path to Success is Just One Click Away
        </p>
        <Link href={""}>
          <button className="bg-rashad py-4 flex items-center gap-5 text-white text-base px-10 xl:px-16 rounded-lg">
            <p className="font-semibold">Start My Journey</p>
          </button>
        </Link>
      </div>
      <section className="py-20 md:py-40">
        <div className="grid md:grid-cols-[1fr_minmax(250px,_320px)] xl:grid-cols-[1fr_minmax(400px,_500px)] items-center gap-4 md:gap-0">
          <div className="rounded-3xl overflow-hidden relative h-full">
            <div className="h-full w-full absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 via-80% to-90% to-rashad " />
            <Image
              src={AboutBanner}
              alt="About Banner"
              sizes="100%"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="p-5 xl:p-10 bg-white rounded-l-3xl h-full flex items-center ">
            <p className="text-base xl:text-2xl opacity-60 leading-[1.3] xl:leading-[1.6]">
              Rashad’s message goes beyond motivation; it’s about impact and
              long-lasting change. With a unique blend of real-life experiences
              and actionable insights, Rashad connects deeply with audiences,
              leaving them with a renewed sense of purpose and tangible steps to
              achieve their goals.
            </p>
          </div>
          <div className="p-5 xl:p-10 bg-white rounded-r-3xl h-full flex items-center">
            <p className="text-base xl:text-2xl opacity-60 leading-[1.3] xl:leading-[1.6]">
              Rashad Aldridge has touched the lives of thousands, inspiring
              individuals from all walks of life to overcome adversity, discover
              their purpose, and unlock their full potential. Through his
              powerful storytelling and genuine connection.
            </p>
          </div>
          <div className="bg-gradient-to-tl from-black to-rashad via-black via-80% after:hidden md:after:block to-90% min-h-52 h-full rounded-2xl flex items-center justify-center relative after:h-28 after:w-28 after:bg-gradient-to-b after:from-rashad after:via-rashad after:to-rashad after:-top-16 after:-left-16 after:-z-10 after:absolute">
            <Link href={"https://www.youtube.com/@RashadaldridgeMotivation"}>
              <Image
                src={YoutubeIcon}
                alt="Icon"
                sizes="100%"
                className="h-14 w-auto"
              />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
