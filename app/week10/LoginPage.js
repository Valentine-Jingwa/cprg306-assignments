"use client"

import { useUserAuth } from "./_utils/auth-context";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link"
import Week5 from "./week5";

const LoginPage = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
  
    const handleGitHubSignIn = async () => {
      await gitHubSignIn();
      router.push('/');
    };
  
    const handleFirebaseSignOut = async () => {
      await firebaseSignOut();
    };


  return (
    <main className="bg-white-400">

                {user ? (
                <>
                  <div className="md:min-h-screen flex items-center justify-center bg-[url('/Man.jpeg')] bg-center bg-contain bg-no-repeat text-gray-900">
                    <div className="opacity-90 hover:opacity-100 bg-white p-8 rounded-lg shadow-md w-[400px]">
                    <h1 className="text-2xl font-semibold mb-4">Log Out</h1>
                    <p>
                    Welcome, {user.displayName} ({user.email})
                    </p>
                    <Week5 />
                    <button
                    onClick={handleFirebaseSignOut}
                    className="mt-4 bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600"
                    >
                    Sign Out
                    </button>
                    </div>
                  </div>
                </>
                ) : (
                <>
                  <div className="md:min-h-screen flex items-center justify-center bg-[url('/Man.jpeg')] bg-center bg-contain bg-no-repeat text-gray-900">
                    <div className="opacity-90 hover:opacity-100 bg-white p-8 rounded-lg shadow-md w-[400px]">

                    {/* Back button at the top with header */}
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
                        <button type="button" className="text-white text-xl font-semibold rounded bg-black p-1 mb-4">
                                <Link href="/">Back</Link>
                        </button>
                    </div>
                    <div className="relative mt-8">
                    <label
                        htmlFor="username"
                        className={`absolute left-2 ${
                        name ? 'text-gray-600 text-xs' : 'text-gray-400 text-md'
                        } transition-all pointer-events-none`}
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        onChange={(e) => setName(e.target.value)}
                        required
                        className={`w-full px-2 py-1 text-gray-600 text-sm rounded focus:border-cyan-500 bg-white focus:outline-dashed ${name && 'pt-4'}`}
                    />
                    </div>
                    <div className="relative my-6">
                    <label
                        htmlFor="password"
                        className={`absolute left-2 ${
                        password ? 'text-gray-600 text-xs' : 'text-gray-400 text-md'
                        } transition-all pointer-events-none`}
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={`w-full px-2 py-1 text-gray-600 text-sm rounded focus:border-cyan-500 focus:outline-dashed${password && 'pt-4'}`}
                    />
                    </div>

                    <button
                    onClick={handleGitHubSignIn}
                    className="mt-8 bg-red-900 text-white font-semibold px-4 py-2 rounded hover:bg-red-800 w-full flex gap-4 justify-center items-center"
                    >
                    Sign In
                    </button>

                    <p className="text-sm text-gray-300 my-8 flex justify-center">-- Sign in with partners --</p>

                    <button
                    onClick={handleGitHubSignIn}
                    className="mt-4 bg-black text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 w-full flex gap-4 justify-center items-center"
                    >
                    Sign In with GitHub
                    </button>
                    <button
                    onClick={handleGitHubSignIn}
                    className="mt-4 bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 w-full flex gap-4 justify-center items-center"
                    >
                    Sign In with Google
                    </button>
                    </div>
                  </div>
                </>
                )}

    </main>
  );
};

export default LoginPage;
