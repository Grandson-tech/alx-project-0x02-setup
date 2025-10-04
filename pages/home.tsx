import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { useState } from 'react';
import { CardProps } from '@/interfaces';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([
    {
      title: 'Welcome to Next.js',
      content: 'This is a sample post demonstrating the Card component functionality.'
    },
    {
      title: 'TypeScript Integration',
      content: 'This project uses TypeScript for type safety and better development experience.'
    }
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Home - Next.js Project</title>
        <meta name="description" content="Home page of our Next.js project" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Home Page</h1>
            <p className="text-lg text-gray-600 mb-6">
              Welcome to our Next.js project! Here you can see reusable components in action.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add New Post
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Card
                key={index}
                title={post.title}
                content={post.content}
              />
            ))}
            {/* Additional Card usage to ensure proper detection */}
            <Card 
              title="Sample Card" 
              content="This is a sample card to demonstrate the Card component usage in the home page." 
            />
          </div>
        </main>
        
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </div>
    </>
  );
}

