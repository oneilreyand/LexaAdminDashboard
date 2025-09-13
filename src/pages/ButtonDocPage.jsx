import React from 'react'
import Button from '../components/atoms/Button'

function ButtonDocPage() {
  // Function to test button interactions
  const handleClick = (variant) => {
    console.log(`Button ${variant} clicked`)
  }

  // Move code examples into strings so JSX parser tidak kebingungan
  const importSnippet = `import Button from '../components/atoms/Button'`

  const usageSnippet = `const Component = () => {
  return (
    <div>
      <Button variant="primary" onClick={() => console.log('Clicked')}>
        Primary Button
      </Button>
      <Button variant="secondary" styleType="outline">
        Outline Button
      </Button>
      <Button variant="success" size="large">
        Large Success Button
      </Button>
    </div>
  )
}`

  const customPropsSnippet = `// Contoh penggunaan dengan props tambahan
<Button
  variant="danger"
  styleType="label"
  size="small"
  rounded={true}
  disabled={false}
  className="custom-class"
  onClick={handleClick}
>
  Custom Button
</Button>`

  return (
    <div className="h-full">
      <div className="space-y-8 p-6 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Button Documentation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Komponen button yang fleksibel dengan berbagai varian, ukuran, dan gaya
          </p>
        </div>

        {/* Quick Demo Buttons */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
            Quick Demo
          </h2>
          <div className="space-y-6">
            {/* Variants */}
            <div>
              <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  onClick={() => handleClick('primary')}
                >
                  Primary
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleClick('secondary')}
                >
                  Secondary
                </Button>
                <Button
                  variant="success"
                  onClick={() => handleClick('success')}
                >
                  Success
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleClick('danger')}
                >
                  Danger
                </Button>
                <Button
                  variant="warning"
                  onClick={() => handleClick('warning')}
                >
                  Warning
                </Button>
                <Button
                  variant="info"
                  onClick={() => handleClick('info')}
                >
                  Info
                </Button>
                <Button
                  variant="dark"
                  onClick={() => handleClick('dark')}
                >
                  Dark
                </Button>
              </div>
            </div>

            {/* Style Types */}
            <div>
              <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">Style Types</h3>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  styleType="basic"
                  onClick={() => handleClick('basic')}
                >
                  Basic
                </Button>
                <Button
                  variant="primary"
                  styleType="label"
                  onClick={() => handleClick('label')}
                >
                  Label
                </Button>
                <Button
                  variant="primary"
                  styleType="outline"
                  onClick={() => handleClick('outline')}
                >
                  Outline
                </Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  variant="primary"
                  size="small"
                  onClick={() => handleClick('small')}
                >
                  Small
                </Button>
                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => handleClick('medium')}
                >
                  Medium
                </Button>
                <Button
                  variant="primary"
                  size="large"
                  onClick={() => handleClick('large')}
                >
                  Large
                </Button>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">States</h3>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  disabled
                  onClick={() => handleClick('disabled')}
                >
                  Disabled
                </Button>
                <Button
                  variant="primary"
                  rounded
                  onClick={() => handleClick('rounded')}
                >
                  Rounded
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Variants Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Varian Button
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Primary */}
            <div className="border border-blue-200 dark:border-blue-800 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
              <div className="flex items-center mb-2">
                <Button variant="primary" size="small" className="mr-2">
                  P
                </Button>
                <span className="font-medium text-blue-800 dark:text-blue-300">Primary</span>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Button utama untuk aksi penting
              </p>
              <div className="mt-2 text-xs text-blue-600 dark:text-blue-500">
                Warna: Biru (#2563EB)
              </div>
            </div>

            {/* Secondary */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900/20">
              <div className="flex items-center mb-2">
                <Button variant="secondary" size="small" className="mr-2">
                  S
                </Button>
                <span className="font-medium text-gray-800 dark:text-gray-300">Secondary</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Button sekunder untuk aksi tambahan
              </p>
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-500">
                Warna: Abu-abu (#4B5563)
              </div>
            </div>

            {/* Success */}
            <div className="border border-green-200 dark:border-green-800 rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
              <div className="flex items-center mb-2">
                <Button variant="success" size="small" className="mr-2">
                  S
                </Button>
                <span className="font-medium text-green-800 dark:text-green-300">Success</span>
              </div>
              <p className="text-sm text-green-700 dark:text-green-400">
                Button untuk konfirmasi atau sukses
              </p>
              <div className="mt-2 text-xs text-green-600 dark:text-green-500">
                Warna: Hijau (#16A34A)
              </div>
            </div>

            {/* Danger */}
            <div className="border border-red-200 dark:border-red-800 rounded-lg p-4 bg-red-50 dark:bg-red-900/20">
              <div className="flex items-center mb-2">
                <Button variant="danger" size="small" className="mr-2">
                  D
                </Button>
                <span className="font-medium text-red-800 dark:text-red-300">Danger</span>
              </div>
              <p className="text-sm text-red-700 dark:text-red-400">
                Button untuk aksi berbahaya atau hapus
              </p>
              <div className="mt-2 text-xs text-red-600 dark:text-red-500">
                Warna: Merah (#DC2626)
              </div>
            </div>

            {/* Warning */}
            <div className="border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 bg-yellow-50 dark:bg-yellow-900/20">
              <div className="flex items-center mb-2">
                <Button variant="warning" size="small" className="mr-2">
                  W
                </Button>
                <span className="font-medium text-yellow-800 dark:text-yellow-300">Warning</span>
              </div>
              <p className="text-sm text-yellow-700 dark:text-yellow-400">
                Button untuk peringatan atau alert
              </p>
              <div className="mt-2 text-xs text-yellow-600 dark:text-yellow-500">
                Warna: Kuning (#D97706)
              </div>
            </div>

            {/* Info */}
            <div className="border border-cyan-200 dark:border-cyan-800 rounded-lg p-4 bg-cyan-50 dark:bg-cyan-900/20">
              <div className="flex items-center mb-2">
                <Button variant="info" size="small" className="mr-2">
                  I
                </Button>
                <span className="font-medium text-cyan-800 dark:text-cyan-300">Info</span>
              </div>
              <p className="text-sm text-cyan-700 dark:text-cyan-400">
                Button untuk informasi atau detail
              </p>
              <div className="mt-2 text-xs text-cyan-600 dark:text-cyan-500">
                Warna: Cyan (#0891B2)
              </div>
            </div>

            {/* Dark */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900/20">
              <div className="flex items-center mb-2">
                <Button variant="dark" size="small" className="mr-2">
                  D
                </Button>
                <span className="font-medium text-gray-800 dark:text-gray-300">Dark</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Button dengan tema gelap
              </p>
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-500">
                Warna: Hitam (#111827)
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
                <li><code>variant</code> (string) - Varian warna: 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark' (default: 'primary')</li>
                <li><code>styleType</code> (string) - Gaya button: 'basic', 'label', 'outline' (default: 'basic')</li>
                <li><code>size</code> (string) - Ukuran button: 'small', 'medium', 'large' (default: 'medium')</li>
                <li><code>disabled</code> (boolean) - Apakah button disabled (default: false)</li>
                <li><code>rounded</code> (boolean) - Apakah button rounded full (default: false)</li>
                <li><code>className</code> (string) - Custom CSS classes tambahan</li>
                <li><code>children</code> (node) - Konten di dalam button</li>
                <li><code>...props</code> - Props HTML button lainnya (onClick, etc.)</li>
              </ul>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                Style Types
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li><code>basic</code> - Background solid dengan warna variant</li>
                <li><code>label</code> - Background light dengan text warna variant</li>
                <li><code>outline</code> - Border dengan text warna variant, background transparent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonDocPage
