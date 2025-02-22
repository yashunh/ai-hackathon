import ColourfulText from "@/components/ui/colourful-text";
import { Meteors } from "@/components/ui/meteors";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `What the Hack is a hackathon focused on leveraging technology and innovation for social good. Participants collaborate to develop solutions that address various social challenges, such as healthcare access, environmental sustainability, education, and community empowerment. The event encourages creativity, teamwork, and the use of technology to make a positive impact on society. Participants often include programmers, designers, and subject matter experts who work together over a specified period to prototype and present their solutions to a panel of judges on the following domains:\n`;

const domains = [
    "Healthcare,",
    " Disaster Response,",
    " Education,",
    " Environmental Sustainability,",
    " Social Justice,",
    " Civic Engagement,",
    " Financial Inclusion,",
    " Urban Development,",
    " AgriTech,",
    " Clean Energy."
];

export default function Page() {
    return (
        <div className="">
            <div className="flex justify-center mt-8 lg:mt-16 ">
                <div className="text-2xl md:text-5xl lg:text-7xl font-bold text-white relative z-2 font-mono w-max [filter:drop-shadow(0px_2px_4px_rgba(128,_90,_213,_0.4))]">
                    <ColourfulText text="WhatTheHack" />
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-5 lg:pl-10  mb-10">
                <div className="col-span-3 px-4">
                    <TextGenerateEffect duration={0.5} words={words + domains.join("")} />
                </div>
                <div className="col-span-2 flex flex-col mx-4 md:ml-8 lg:ml-20 mt-4">
                    <div className="w-full relative max-w-xs">
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                            <div className="animate-fade-in">
                                <h1 className="font-bold text-white relative pb-2 z-50 text-lg md:text-xl lg:text-3xl text-center z-2 font-mono ">
                                    DateTime And Venue
                                </h1>
                                <h2 className="pb-2 text-lg md:text-xl lg:text-2xl font-bold text-white relative z-50 pl-4">
                                    27 - 28 Feb  10 AM
                                </h2>
                                <p className="pb-2 text-lg md:text-xl lg:text-2xl font-bold text-white relative z-50 pl-4">
                                    Room No. 314
                                </p>
                                <p className="pb-2 text-lg md:text-xl lg:text-2xl font-bold text-white relative z-50 pl-4">
                                    B5 Block
                                </p>
                                <p className="pb-2 text-lg md:text-xl lg:text-2xl font-bold text-white relative z-50 pl-4">
                                    Chandigarh University
                                </p>
                                <p className="pb-2 text-lg md:text-xl lg:text-2xl font-bold text-white relative z-50 pl-4">
                                    Chandigarh, India
                                </p>
                            </div>
                            <Meteors number={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}