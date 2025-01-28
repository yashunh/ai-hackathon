import { ContactCard } from "@/components/ContactCard";
import Title from "@/components/Title";

export default function Page() {
    return (
        <div>
            <div className="flex justify-center">
                <Title title="Contact" />
            </div>
            <div>
                <div className="flex">
                    <ContactCard />
                    <div className="ml-5 w-[350px] flex flex-col justify-center text-white border border-gray-600 shadow-sm font-sans rounded-lg p-6">
                        <div className="font-semibold text-2xl">
                            Contact Us
                        </div>
                        <div className="py-2">
                            Ask your questions and solve all your quieres.
                        </div>
                        <label className="py-1" htmlFor="Name">Name</label>
                        <input placeholder="Enter Your Name" id="Name"
                            className="p-2 mb-3 border border-slate-600 border-input bg-background rounded-lg"></input>
                        <label className="py-1" htmlFor="Email">Email</label>
                        <input placeholder="Enter Your Email" id="Email"
                            className="p-2 mb-3 border border-slate-600 border-input bg-background rounded-lg"></input>
                        <label className="py-1" htmlFor="Phone Number">Phone Number</label>
                        <input placeholder="Enter Your Phone Number" id="Phone Number"
                            className="p-2 mb-3 border border-slate-600 border-input bg-background rounded-lg"></input>
                        <label className="py-1" htmlFor="Query">Query</label>
                        <textarea placeholder="Enter Your Query" id="Query"
                            className="resize-none overflow-y-scroll no-scrollbar p-2 mb-3 border relative border-slate-600 border-input bg-background rounded-lg"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}
