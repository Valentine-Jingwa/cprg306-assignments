'use client'
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import Navbar from '../navbar';

export default function Home() {
    const links = [
        { label: 'Home', url: '/' },
        { label: 'Shopping List', url: '/week3' },
        { label: 'Contact', url: '/contact' },
        { label: 'More', url: './extra/more' },
    ];
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Navbar links={links} />
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-center">Shop</h1>
                    {/* Below is going to be list of links to different weeks of assignments week1-week14*/}
                    <ul className="flex flex-col items-center justify-center">
                        <p className="hover:text-orange-300 list-disc">Stuff</p>
                    </ul>
                </div>
            </div>
        </main>
    )
}