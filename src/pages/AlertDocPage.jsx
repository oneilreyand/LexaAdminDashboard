import React from 'react'
import Alert from '../components/atoms/Alert'

function AlertDocPage() {
  // Move code examples into strings so JSX parser tidak kebingungan
  const importSnippet = `import Alert from '../components/atoms/Alert'`

  const usageSnippet = `const Component = () => {
  return (
    <div>
      <Alert type="info" title="Information">
        This is an informational alert.
      </Alert>
      <Alert type="warning" title="Warning">
        This is a warning alert.
      </Alert>
      <Alert type="danger" title="Danger">
        This is a danger alert.
      </Alert>
    </div>
  )
}`

  const customPropsSnippet = `// Contoh penggunaan dengan props tambahan
<Alert
  type="warning"
  title="Custom Alert"
  className="custom-class"
>
  <p>Custom content with additional elements.</p>
  <button>Action Button</button>
</Alert>`

  return (
    <div className="h-full">
      <div className="space-y-8 p-6 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Alert Documentation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Komponen alert yang fleksibel untuk menampilkan pesan informasi, peringatan, dan bahaya
          </p>
        </div>

        {/* Quick Demo Alerts */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
            Quick Demo
          </h2>
          <div className="space-y-4">
            {/* Info Alert */}
            <Alert type="info" title="Information Alert">
              This is an informational message to inform users about something important.
            </Alert>

            {/* Warning Alert */}
            <Alert type="warning" title="Warning Alert">
              This is a warning message to alert users about potential issues.
            </Alert>

            {/* Danger Alert */}
            <Alert type="danger" title="Danger Alert">
              This is a danger message to warn users about critical actions or errors.
            </Alert>
          </div>
        </div>

        {/* Variants Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Varian Alert
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Info */}
            <div className="border border-blue-200 dark:border-blue-800 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
              <div className="flex items-center mb-2">
                <Alert type="info" title="Info" className="mb-2">
                  Sample info alert
                </Alert>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Alert untuk informasi umum
              </p>
              <div className="mt-2 text-xs text-blue-600 dark:text-blue-500">
                Warna: Biru (#3B82F6)
              </div>
            </div>

            {/* Warning */}
            <div className="border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 bg-yellow-50 dark:bg-yellow-900/20">
              <div className="flex items-center mb-2">
                <Alert type="warning" title="Warning" className="mb-2">
                  Sample warning alert
                </Alert>
              </div>
              <p className="text-sm text-yellow-700 dark:text-yellow-400">
                Alert untuk peringatan
              </p>
              <div className="mt-2 text-xs text-yellow-600 dark:text-yellow-500">
                Warna: Kuning (#F59E0B)
              </div>
            </div>

            {/* Danger */}
            <div className="border border-red-200 dark:border-red-800 rounded-lg p-4 bg-red-50 dark:bg-red-900/20">
              <div className="flex items-center mb-2">
                <Alert type="danger" title="Danger" className="mb-2">
                  Sample danger alert
                </Alert>
              </div>
              <p className="text-sm text-red-700 dark:text-red-400">
                Alert untuk pesan bahaya atau error
              </p>
              <div className="mt-2 text-xs text-red-600 dark:text-red-500">
                Warna: Merah (#EF4444)
              </div>
            </div>
          </div>
        </div>

        {/* Usage Documentation */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Cara Penggunaan
          </h2>

          <div className="space-y-6">
            {/* Basic Usage */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                1. Import Component
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{importSnippet}</code>
              </pre>
            </div>

            {/* Component Usage */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                2. Gunakan dalam Component
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{usageSnippet}</code>
              </pre>
            </div>

            {/* Custom Props */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                3. Custom Props (opsional)
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{customPropsSnippet}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* API Reference */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            API Reference
          </h2>

          <div className="space-y-4">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                Props
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li><code>type</code> (string) - Tipe alert: 'info', 'warning', 'danger' (required)</li>
                <li><code>title</code> (string) - Judul alert (optional)</li>
                <li><code>children</code> (node) - Konten di dalam alert (required)</li>
                <li><code>className</code> (string) - Custom CSS classes tambahan (optional)</li>
              </ul>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                Alert Types
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li><code>info</code> - Alert biru untuk informasi umum</li>
                <li><code>warning</code> - Alert kuning untuk peringatan</li>
                <li><code>danger</code> - Alert merah untuk pesan bahaya atau error</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlertDocPage
