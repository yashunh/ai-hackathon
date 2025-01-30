import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { contact } from "../actions/contact";
import { useState } from "react";

export default async function Page() {
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[query, setQuery] = useState("")
    
    return (
        <div className="flex justify-center flex-col">
            <Title title="Contact Us" />
            <div className="flex justify-center">
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
                    <input placeholder="Enter Your Name" id="Name" onChange={(e)=>{
                        setName(e.target.value)
                    }}
                        className="p-2 mb-3 border border-slate-800  bg-background rounded-lg" />
                    <label className="py-1" htmlFor="Email">Email</label>
                    <input placeholder="Enter Your Email" id="Email" onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                        className="p-2 mb-3 border border-slate-800  bg-background rounded-lg" />
                    {/* <label className="py-1" htmlFor="Phone Number">Phone Number</label>
                        <input placeholder="Enter Your Phone Number" id="Phone Number"
                            className="p-2 mb-3 border border-slate-800  bg-background rounded-lg"/> */}
                    <label className="py-1" htmlFor="Query">Query</label>
                    <textarea placeholder="Enter Your Query" id="Query" onChange={(e)=>{
                        setQuery(e.target.value)
                    }}
                        className="resize-none overflow-y-scroll no-scrollbar p-2 mb-3 border relative border-slate-800  bg-background rounded-lg" />
                    <div className="flex justify-center mt-2">
                        <Button onClick={async()=>{
                            const response = await contact(name,email,query)
                            console.log(response)
                        }} variant="outline">Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}