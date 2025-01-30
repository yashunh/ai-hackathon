export default function Title({ title }: { title: string }) {
    return (
        <div className="mt-16 flex justify-center">
            <div className=" text-2xl md:text-5xl lg:text-7xl font-bold text-white relative z-2 font-sans w-max [filter:drop-shadow(0px_2px_4px_rgba(128,_90,_213,_0.4))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 py-4 [text-shadow:0_0_2px_rgba(0,0,0,0.4)]">
                    <span className="">{title}</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 py-4">
                    <span className="">{title}</span>
                </div>
            </div>
        </div>
    );
}
