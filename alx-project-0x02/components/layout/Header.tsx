import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Next.js Project
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link
              href="/home"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/home')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              About
            </Link>
            <Link
              href="/posts"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/posts')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Posts
            </Link>
            <Link
              href="/users"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/users')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Users
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

