import Link from 'next/link'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center">CPRG 306 Assignments</h1>
          {/* Below is going to be list of links to different weeks of assignments week1-week14*/}
          <ul className="flex flex-col items-center justify-center">
            <p className="hover:text-red-300 list-disc px-10 py-2 rounded-lg hover:bg-gray-200 hover:shadow-md"><Link href="/week2">Week 2 Assignment</Link></p>
            <p className="hover:text-orange-300 list-disc px-10 py-2 rounded-lg hover:bg-gray-200 hover:shadow-md"><Link href="/week3">Week 3 Assignment</Link></p>
            <p className="hover:text-yellow-300 list-disc px-10 py-2 rounded-lg hover:bg-gray-200 hover:shadow-md"><Link href="/week4">Week 4 Assignment</Link></p>
          </ul>
        </div>
      </div>
    </main>
  )
}
