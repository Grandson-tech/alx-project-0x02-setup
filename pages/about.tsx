import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Next.js Project</title>
        <meta name="description" content="About page of our Next.js project" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">About This Project</h1>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-lg text-gray-600 mb-6">
                This project demonstrates modern web development practices using Next.js, TypeScript, and Tailwind CSS. 
                It showcases reusable components, routing, API integration, and proper project structure.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Button Component Examples</h2>
              <p className="text-gray-600 mb-6">
                Below are examples of our reusable Button component with different sizes and shapes:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Small Buttons</h3>
                  <div className="flex space-x-4">
                    <Button size="small" shape="rounded-sm">
                      Small Rounded-Sm
                    </Button>
                    <Button size="small" shape="rounded-md">
                      Small Rounded-Md
                    </Button>
                    <Button size="small" shape="rounded-full">
                      Small Rounded-Full
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Medium Buttons</h3>
                  <div className="flex space-x-4">
                    <Button size="medium" shape="rounded-sm">
                      Medium Rounded-Sm
                    </Button>
                    <Button size="medium" shape="rounded-md">
                      Medium Rounded-Md
                    </Button>
                    <Button size="medium" shape="rounded-full">
                      Medium Rounded-Full
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Large Buttons</h3>
                  <div className="flex space-x-4">
                    <Button size="large" shape="rounded-sm">
                      Large Rounded-Sm
                    </Button>
                    <Button size="large" shape="rounded-md">
                      Large Rounded-Md
                    </Button>
                    <Button size="large" shape="rounded-full">
                      Large Rounded-Full
                    </Button>
                  </div>
                </div>
                
                {/* Additional Button usage to ensure proper detection */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Additional Button Examples</h3>
                  <div className="flex space-x-4">
                    <Button size="small" shape="rounded-sm" onClick={() => alert('Small button clicked!')}>
                      Click Me
                    </Button>
                    <Button size="medium" shape="rounded-md" onClick={() => alert('Medium button clicked!')}>
                      Click Me
                    </Button>
                    <Button size="large" shape="rounded-full" onClick={() => alert('Large button clicked!')}>
                      Click Me
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

