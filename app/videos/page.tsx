import React from "react";
import YoutubeBackground from "./../../assets/Youtube_Background.png";
import RashadCircle from "./../../assets/Rashad_Circle.png";
import Text from "./../../assets/rashad_aldridge.svg";
import Image from "next/image";
import Subscribe from "./../../assets/Subscribe-button.svg";
import Facebook from "./../../assets/facebook.svg";
import Twitter from "./../../assets/twitter.svg";
import Linkedin from "./../../assets/linkedin.svg";
import Instagram from "./../../assets/instagram.svg";
import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-screen flex items-center relative text-white">
      <Image
        alt="Youtube Banner Background"
        src={YoutubeBackground}
        fill
        sizes="100%"
        className="h-full w-full absolute z-0"
      />
      <div className="min-h-[450px] border-t-8 my-10 border-b-8 border-[#FF0202] xl:px-20 relative z-10">
        <div className="relative z-10 py-16 grid gap-10 px-6 items-center lg:grid-cols-[minmax(280px,_290px)_3fr]">
          <div className="rounded-full p-3 border-4 border-white min-w-64 w-fit mx-auto">
            <Image
              src={RashadCircle}
              alt="Rashad"
              sizes="100%"
              className="h-64 w-64 rounded-full shrink-0"
            />
          </div>
          <div className="space-y-3 text-center lg:text-left">
            <div className="md:pl-10">
              <h6 className="text-xl lg:text-2xl tracking-widest italic font-medium uppercase">
                Motivational speaker
              </h6>
            </div>
            <Image
              src={Text}
              alt="RASHAD ALDRIDGE"
              sizes="100%"
              className="md:h-28 w-auto"
            />

            <div className="grid items-center md:grid-cols-3 gap-7">
              <div className="flex flex-col items-center gap-4">
                <Link
                  href={"https://www.youtube.com/@RashadaldridgeMotivation"}
                  className="hover:scale-105 transition-transform ease-in-out duration-150"
                >
                  <Image
                    src={Subscribe}
                    alt="subscribe"
                    sizes="100%"
                    className="h-10 md:h-14"
                  />
                </Link>
                <h6 className="text-base xl:text-xl tracking-widest italic font-medium uppercase">
                  & watch videos daily
                </h6>
              </div>
              <div className="flex flex-col mx-auto items-start gap-4">
                <Link href={"https://www.facebook.com/iamRashadaldridge/"}>
                  <Image
                    src={Facebook}
                    alt="subscribe"
                    sizes="100%"
                    className="h-11 w-auto"
                  />
                </Link>
                <Link href={""}>
                  <Image
                    src={Twitter}
                    alt="subscribe"
                    sizes="100%"
                    className="h-11 w-auto"
                  />
                </Link>
              </div>
              <div className="flex flex-col mx-auto items-start gap-4">
                <Link href={"https://www.linkedin.com/in/rashadaldridge/"}>
                  <Image
                    src={Linkedin}
                    alt="subscribe"
                    sizes="100%"
                    className="h-11 w-auto"
                  />
                </Link>
                <Link href={"https://www.instagram.com/rashadaldridge247"}>
                  <Image
                    src={Instagram}
                    alt="subscribe"
                    sizes="100%"
                    className="h-11 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
