"use client";
import React from "react";
import ColourfulText from "@/components/ui/colourful-text";
import { Cover } from "@/components/ui/cover";
import Countdown from "@/components/Countdown";

export default function Page() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center relative bg-black">
      <h1 className="text-4xl items-center md:text-7xl lg:text-9xl font-bold text-white relative z-2 font-fantasque">
        W<ColourfulText text="hat " />
        T<ColourfulText text="he " />
        H<ColourfulText text="ack" />
      </h1>
      <h3 className="text-white text-md lg:text-2xl text-center">
        A Hackathon for Social Well Being
      </h3>
      <a href="https://unstop.com/o/6wIhJke?lb=OGUy55pL&utm_medium=Share&utm_source=shortUrl"
        className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <Cover>Register</Cover>
      </a>
      <div className="flex items-center justify center">
        <Countdown />
        {/* <div className="text-white text-5xl p-4">
          left
        </div> */}
      </div>
      <div>
        <span className="flex tabular-num text-2xl md:text-5xl font-mono text-white mb-2 animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
          <span className="sr-only">100</span>+ Registration
        </span>
      </div>
    </div>
  );
}
