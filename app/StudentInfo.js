import Link from 'next/link';
import Image from 'next/image';

export default function StudentInfo() {
  return (
    <main>
      <div className="flex items-center justify-center">
        <div className="w-3/4">
          <h1>Student Information</h1>
          <p>Name: Valentine</p>
          <p>Sait ID: 000892676</p>
          <p>Course: Software development</p>
          <p className="text-blue-500 hover:text-red-300"><Link href="https://github.com/Valentine-Jingwa" rel="stylesheet">Github Repos</Link></p>
        </div>
        <div className="w-1/4">
          <Image href="/images/valentine.jpg" alt="Valentine" width={200} height={200} />
        </div>
      </div>
      <Link className="text-blue-500 hover:text-red-300"href="/">Back to Home</Link>
    </main>
  );
}
