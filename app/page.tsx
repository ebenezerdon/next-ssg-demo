import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Next.js 15 SSG
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          This is a simple static site generation demo built with Next.js 15,
          TypeScript, and Tailwind CSS. The entire site is pre-rendered at build
          time.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ⚡ Static Generation
            </h2>
            <p className="text-gray-600 mb-4">
              All pages are pre-rendered at build time for optimal performance
              and SEO.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🎨 Tailwind CSS
            </h2>
            <p className="text-gray-600 mb-4">
              Beautiful, responsive design with utility-first CSS framework.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              📱 App Router
            </h2>
            <p className="text-gray-600 mb-4">
              Built with Next.js 15 App Router for modern React patterns.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🚀 TypeScript
            </h2>
            <p className="text-gray-600 mb-4">
              Type-safe development with full TypeScript support.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/about"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}
