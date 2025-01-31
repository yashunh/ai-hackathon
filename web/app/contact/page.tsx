"use client"
import { Button } from "@/components/ui/button";
import { contact } from "../actions/contact";
import { useState } from "react";
import ColourfulText from "@/components/ui/colourful-text";

export default function Page() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [query, setQuery] = useState("")

    return (
        <div className="flex justify-center flex-col">
            <div className="flex justify-center mt-16">
                <div className="text-2xl md:text-5xl lg:text-7xl font-bold text-white relative z-2 font-sans w-max [filter:drop-shadow(0px_2px_4px_rgba(128,_90,_213,_0.4))]">
                    <ColourfulText text="Contact Us" />
                </div>
            </div>
            <div className="flex justify-center m-4">
                <div className="p-6 w-[350px] flex flex-col justify-center text-white border border-gray-800 shadow-sm font-sans rounded-lg ">
                    <div className="flex justify-between">
                        <div className="font-semibold text-2xl">
                            Contact Us
                        </div>
                        <div className="flex">
                            <div>
                                whatsapp
                            </div>
                            <div>
                                /insta
                            </div>
                        </div>
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
                        <Button onClick={async () => {
                            const response = await contact(name, email, query)
                            alert("Submitted successfully, Our team will contact you soon")
                            console.log(response)
                        }} variant="outline">Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}