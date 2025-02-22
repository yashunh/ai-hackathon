"use client"
import { Button } from "@/components/ui/button";
import { contact } from "../actions/contact";
import { useState } from "react";
import ColourfulText from "@/components/ui/colourful-text";
import Image from "next/image";
import Spinner from "@/components/Spinner";
import Alert from "@/components/Alert";

export default function Page() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(false)

    if (loading) {
        return <div className="flex flex-col justify-center items-center h-screen w-full">
            <Spinner />
        </div>
    }

    return (
        <div className="flex justify-center flex-col">
            <div className="m-2 lg:m-4">
                {alert ? <Alert setAlert={setAlert} /> : <div />}
            </div>
            <div className="flex justify-center mt-8 lg:mt-12">
                <div className="text-2xl md:text-5xl lg:text-7xl font-bold text-white relative z-2 font-mono w-max [filter:drop-shadow(0px_2px_4px_rgba(128,_90,_213,_0.4))]">
                    <ColourfulText text="Contact Us" />
                </div>
            </div>
            <div className="flex justify-center m-4">
                <div className="p-6 w-[350px] flex flex-col justify-center text-white border border-gray-800 shadow-sm font-mono rounded-lg ">
                    <div className="flex justify-between">
                        <div className="font-semibold text-2xl">
                            Contact Us
                        </div>
                        <a className="rounded-full" href="https://chat.whatsapp.com/GDqMuiJDqYbIRsVm0vmX3j" title="whatsapp icons">
                            <Image src="/whatsapp.png"
                                alt="startup template"
                                width={24}
                                height={24}
                                className=""
                            />
                        </a>
                    </div>
                    <div className="py-2">
                        Ask your questions and solve all your quieres.
                    </div>
                    <label className="py-1" htmlFor="Name">Name</label>
                    <input placeholder="Enter Your Name" id="Name" onChange={(e) => {
                        setName(e.target.value)
                    }}
                        className="p-2 mb-3 border border-slate-800  bg-background rounded-lg" />
                    <label className="py-1" htmlFor="Email">Email</label>
                    <input placeholder="Enter Your Email" id="Email" onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                        className="p-2 mb-3 border border-slate-800  bg-background rounded-lg" />
                    {/* <label className="py-1" htmlFor="Phone Number">Phone Number</label>
                        <input placeholder="Enter Your Phone Number" id="Phone Number"
                            className="p-2 mb-3 border border-slate-800  bg-background rounded-lg"/> */}
                    <label className="py-1" htmlFor="Query">Query</label>
                    <textarea placeholder="Enter Your Query" id="Query" onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                        className="resize-none overflow-y-scroll no-scrollbar p-2 mb-3 border relative border-slate-800  bg-background rounded-lg" />
                    <div className="flex justify-center mt-2">
                        <Button
                            onClick={async () => {
                                if (!name || !email || !query) {
                                    window.alert("Please fill in all fields.");
                                    return;
                                }

                            else{
                                setLoading(true);
                                try {
                                    const response = await contact(name, email, query);
                                    console.log("Response:", response);
                                    setAlert(true);
                                } catch (error) {
                                    console.error("Error submitting form:", error);
                                }
                                setLoading(false);
                            }
                            }}
                            variant="outline"
                        >
                            Submit
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    );
}