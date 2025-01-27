import React from "react";
import ColourfulText from "@/components/ui/colourful-text";
import { Cover } from "@/components/ui/cover";

export default function LandingComponent() {
  return (
    <div className="h-screen w-full flex flex-col items-center relative overflow-hidden bg-black">
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold pt-40 text-white relative z-2 font-sans">
        W<ColourfulText text="hat " />
        T<ColourfulText text="he " />
        H<ColourfulText text="ack" />
      </h1>
      <h3 className="text-white text-2xl">
        A Hackathon for Social Well Being
      </h3>
      <a href="https://lu.ma/y5yw8ygc?tk=fZmJQQ"
      className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <Cover>Register</Cover>
      </a>
    </div>
  );
}
