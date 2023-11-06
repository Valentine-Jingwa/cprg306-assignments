"use client"
import React, { useState } from 'react';
import Navbar from '../navbar';
import Newpage from './week5';

const MyShoppingPage = () => {
  const links = [
    { label: 'Home', url: '/' },
    { label: 'Shopping List', url: '/week3' },
    { label: 'Updated', url: './'},
    { label: 'Contact', url: './extra/contact' },
    { label: 'More', url: './extra/more' },
  ];
  return (
    <main className="flex min-h-screen items-center justify-between p-2 mx-24">
    <Navbar links={links} />
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <Newpage />
        </div>
    </main>
  );
};

export default MyShoppingPage;