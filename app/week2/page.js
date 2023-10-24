import StudentInfo from '../week1/StudentInfo';
import Navbar from '../navbar'; // Make sure the path is correct and follow standard casing

export default function Home() {
  const links = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
    { label: 'More', url: '/more' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Adding Navbar here */}
      <Navbar links={links} />

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center">Student Info</h1>
          <StudentInfo/>
        </div>
        {/* Return Button */}
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <Link href="/">GO Back</Link>
      </button>
      </div>
    </main>
  )
}


  

  
  
  
  
  