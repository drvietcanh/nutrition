import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Clinical Nutrition Education & Tools
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A public, educational platform explaining clinical nutrition concepts and providing 
            interactive tools that support (but do not replace) clinical reasoning.
          </p>
        </div>

        {/* Main Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Knowledge Base Card */}
          <Link
            href="/knowledge"
            className="group block bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                Knowledge Base
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Educational content explaining clinical nutrition concepts, assessment processes, 
              myths and misconceptions, and clinical reasoning principles.
            </p>
            <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800">
              Explore Knowledge →
            </span>
          </Link>

          {/* Tools Card */}
          <Link
            href="/tools"
            className="group block bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-green-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                Interactive Tools
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Practice with interactive tools for malnutrition screening, energy and protein 
              calculation, and intake assessment.
            </p>
            <span className="inline-flex items-center text-green-600 font-medium group-hover:text-green-800">
              Use Tools →
            </span>
          </Link>
        </div>

        {/* Quick Links Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/knowledge/myths-in-clinical-nutrition"
              className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Myths & Misconceptions</h3>
              <p className="text-sm text-gray-600">
                Evidence-based corrections to common misconceptions
              </p>
            </Link>
            <Link
              href="/knowledge/assessment-process"
              className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Assessment Process</h3>
              <p className="text-sm text-gray-600">
                Complete guide to clinical nutrition assessment
              </p>
            </Link>
            <Link
              href="/tools/malnutrition-screening"
              className="p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Screening Tool</h3>
              <p className="text-sm text-gray-600">
                Interactive malnutrition screening
              </p>
            </Link>
            <Link
              href="/tools/energy-protein-calculator"
              className="p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Energy & Protein Calculator</h3>
              <p className="text-sm text-gray-600">
                Calculate nutritional needs
              </p>
            </Link>
            <Link
              href="/knowledge/why-intake-falls-short"
              className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Why Intake Falls Short</h3>
              <p className="text-sm text-gray-600">
                Understanding real-world factors
              </p>
            </Link>
            <Link
              href="/tools/intake-assessment"
              className="p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Intake Assessment</h3>
              <p className="text-sm text-gray-600">
                Assess actual nutritional intake
              </p>
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Platform</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This platform is designed to support healthcare professionals in understanding clinical nutrition 
            concepts and applying evidence-based practices. All content is educational and should be used 
            to support, not replace, clinical judgment and multidisciplinary team collaboration.
          </p>
          <p className="text-sm text-gray-600 italic">
            Remember: Tools and guidelines inform your judgment; they don't replace it. When in doubt, 
            consult with registered dietitians and your clinical team.
          </p>
        </div>
      </main>
    </div>
  );
}
