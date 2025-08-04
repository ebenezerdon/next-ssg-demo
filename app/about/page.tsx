/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About This Demo
        </h1>

        <div className="prose prose-lg mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What is Static Site Generation (SSG)?
            </h2>
            <p className="text-gray-600 mb-4">
              Static Site Generation is a method of building websites where all
              pages are pre-rendered at build time. This results in faster
              loading times, better SEO, and improved security since there&#39;s
              no server-side processing required at runtime.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Benefits of SSG with Next.js 15
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <strong>Performance:</strong> Pre-rendered HTML files load
                instantly
              </li>
              <li>
                <strong>SEO:</strong> Search engines can easily crawl static
                content
              </li>
              <li>
                <strong>Security:</strong> No server-side vulnerabilities
              </li>
              <li>
                <strong>Scalability:</strong> Static files can be served from
                CDNs globally
              </li>
              <li>
                <strong>Cost-effective:</strong> Lower hosting costs with static
                hosting
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Technologies Used
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Frontend</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Next.js 15</li>
                  <li>• React 19</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  Build & Deploy
                </h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Static Export</li>
                  <li>• ESLint</li>
                  <li>• PostCSS</li>
                  <li>• App Router</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ready to Deploy
            </h2>
            <p className="text-gray-600 mb-4">
              This demo is configured for static export and can be deployed to
              any static hosting service like Vercel, Netlify, GitHub Pages, or
              AWS S3.
            </p>
            <p className="text-gray-600">
              Run{' '}
              <code className="bg-gray-200 px-2 py-1 rounded">
                npm run build
              </code>{' '}
              to generate the static files in the{' '}
              <code className="bg-gray-200 px-2 py-1 rounded">out</code> folder.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
