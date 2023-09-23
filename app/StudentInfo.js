import Link from 'next/link';

export default function StudentInfo() {
  return (
    <main>
      <h1>Student Information</h1>
      {/* Student details */}
      <div>
        <h1>Student Information</h1>
        <p>Name: Valentine</p>
        <p>Sait ID: 000892676</p>
        <p>Course: Software development</p>
      </div>
      <Link className="hover:text-red-300"href="/">Back to Home</Link>
    </main>
  );
}
