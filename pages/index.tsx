import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Project Setup</title>
        <meta name="description" content="Welcome to our Next.js project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Next.js Project Setup
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This project demonstrates modern web development with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <div className="space-x-4">
            <Link 
              href="/home" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go to Home
            </Link>
            <Link 
              href="/about" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

