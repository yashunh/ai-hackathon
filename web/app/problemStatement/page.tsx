import ColourfulText from "@/components/ui/colourful-text";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="mt-16 text-2xl md:text-5xl lg:text-7xl font-bold text-white relative z-2 font-mono w-max [filter:drop-shadow(0px_2px_4px_rgba(128,_90,_213,_0.4))]">
                <ColourfulText text="Problem Statement" />
            </div>
            {/* <div className="w-48 h-64 perspective-1000 font-mono bg-black">
                <div className="relative w-full h-full text-center transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180">
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 border border-coral rounded-xl shadow-lg backface-hidden">
                        <p className="text-xl font-extrabold text-coral">FLIP CARD</p>
                        <p>Hover Me</p>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800 border border-coral rounded-xl shadow-lg text-white transform rotate-y-180 backface-hidden">
                        <p className="text-xl font-extrabold">BACK</p>
                        <p>Leave Me</p>
                    </div>
                </div>
            </div> */}
            <div className="text-white text-lg">
                coming soon...
            </div>
        </div>
    );
}
