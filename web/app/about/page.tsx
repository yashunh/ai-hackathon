import Summary from "@/components/Summary";
import ColourfulText from "@/components/ui/colourful-text";

export default function Page() {
    return (
        <div className="pt-24">
            <h1 className="pb-10 text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
                W<ColourfulText text="hat" />
                T<ColourfulText text="he" />
                H<ColourfulText text="ack" />
            </h1>
            <Summary />
        </div>
    )
}