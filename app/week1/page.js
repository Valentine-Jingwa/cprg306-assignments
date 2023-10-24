import Link from "next/link";

export default function Home(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-4xl font-bold mb-4">Welcome to CPRG 306 Assignments</h1>
      <p className="text-xl mb-4">
        This is the home page for CPRG 306 assignments. Here youll find all the
        resources and links to succeed in this course.
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <Link href="/">GO Back</Link>
      </button>
    </div>
  );
};
