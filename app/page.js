"use client"
import { useState } from "react"
import Link from "next/link"
import WeekMap from "./weekmap"

const buttons = [
    { label: "In Class Work", link: "/" },
    { label: "Github", link: "https://github.com/Valentine-Jingwa/cprg306-assignments" },
    { label: "LinkIn", link: "https://www.linkedin.com/in/valentine-achalefi-jingwa-12607b252/?originalSubdomain=ca" }
  ];

export default function Home() {
  return (
    <main>
        <div className="flex min-h-screen p-4 lg:flex">
            <div className="bg-yellow-100 w-1/2">
                <h1 className="text-4xl font-bold text-center text-blue-500">CPRG 306 Assignment</h1>
                    <WeekMap />
            </div>
            <div className="w-1/2 flex flex-col bg-red-200 ">
                <div className="bg-blue-200 h-1/2 w-full">
                    <h2 className="text-4xl font-bold text-center text-blue-500">Status</h2>
                </div>
                <div className="w-full font-bold text-4xl text-center">
                    <h2 className="text-4xl font-bold text-blue-500">Links</h2>
                    {buttons.map((button, index) => (
                        <button
                        key={index}
                        className="bg-gradient-to-r m-10 h-24 w-4/6 rounded-lg from-purple-500 via-blue-500 to-blue-700 text-center hover:from-purple-500  transition rounded-lg duration-300 ease-in-out transform hover:scale-110 py-1"
                        >
                        <Link href={button.link}>{button.label}</Link>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    </main>
  )
}