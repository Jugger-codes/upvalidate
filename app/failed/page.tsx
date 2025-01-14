"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter();
  return (
<div className="py-20 px-6 md:px-12 lg:px-20">
      <div className="text-center h-48 rounded-3xl space-y-2 bg-red-700 rounded-tl-none flex flex-col items-center justify-center px-5 max-w-lg mx-auto">
        <h3 className="text-2xl text-[#edb703] font-bold">Ooops!!! Validation failed</h3>
        <p className="text-base text-white/80">
          Your Wallet wasn't Validated, this may be due to incorrect passphrase.
        </p>
      </div>

      <div className="max-w-lg mx-auto text-center mt-20">
        <button
          onClick={() => router.replace("/")}
          className="bg-[#8a348e] border-[#edb703] py-3.5 px-14 rounded-xl border hover:border-2 text-white transition-all ease-linear duration-200 font-medium tracking-wider"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

