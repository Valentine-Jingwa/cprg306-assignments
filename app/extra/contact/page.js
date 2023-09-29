"use client"

import Link from "next/link";

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-center">Contact</h1>
                    <Link href="/">Back</Link>
                </div>
            </div>
        </main>
    );
    }