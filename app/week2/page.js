import Link from 'next/link'; // Corrected the 'link' to 'Link' to follow standard casing
import StudentInfo from '../StudentInfo';
import Navbar from '../navbar'; // Make sure the path is correct and follow standard casing

export default function Home() {
  // Links for the navbar
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
          {/* Below is going to be links to different weeks of assignments week1-week14*/}
          <StudentInfo/>
        </div>
        {/* Return Button */}
      </div>
    </main>
  )
}
{/* 
  function MyApp({ Component, pageProps }) {
    return (
      <>
        <Navbar links={links} />
        <Component {...pageProps} />
      </>
    );
  }
 */}

  

  
  
  
  
  