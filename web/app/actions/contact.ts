"use server";

import client from "@/db"

export async function contact(name: string, email: string,query: string) {
    const user = await client.query.create({
        data: {
            name: name,
            email: email,
            query: query
        }
    });

    console.log(user);

    return "Signed up!"
}