import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import React from "react";

export default function page() {
  return (
    <div className="h-screen flex items-center justify-center">
      <VelocityScroll
        text="Coming Soon"
        default_velocity={5}
        className="font-display text-center text-4xl font-bold text-black drop-shadow-sm dark:text-white md:text-[150px] md:leading-[1.2]"
      />
    </div>
  );
}
