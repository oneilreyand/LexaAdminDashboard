import React from 'react'
import Tooltip from '../components/atoms/Tooltip'
import Button from '../components/atoms/Button'

function TooltipDocPage() {
  const importSnippet = `import Tooltip from '../components/atoms/Tooltip'`

  const basicUsageSnippet = `import Tooltip from '../components/atoms/Tooltip'

function Example() {
  return (
    <Tooltip content="This is a tooltip!">
      <button>Hover me</button>
    </Tooltip>
  )
}`

  const withButtonSnippet = `<Tooltip content="Click to save changes">
  <Button variant="primary">Save</Button>
</Tooltip>`

  const customStylingSnippet = `<Tooltip
  content="Custom styled tooltip"
  className="bg-blue-600 text-white"
>
  <span className="cursor-pointer">Hover for custom tooltip</span>
</Tooltip>`

  const positionSnippet = `<Tooltip content="Tooltip di atas" position="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Tooltip di bawah" position="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Tooltip di kiri" position="left">
  <Button>Left</Button>
</Tooltip>

<Tooltip content="Tooltip di kanan" position="right">
  <Button>Right</Button>
</Tooltip>`

  return (
    <div className="h-full">
      <div className="space-y-8 p-6 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Tooltip Documentation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Komponen tooltip untuk menampilkan informasi tambahan saat hover atau focus
          </p>
        </div>

        {/* Quick Demo */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
            Quick Demo
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Tooltip content="This is a simple tooltip">
              <Button variant="primary">Hover me</Button>
            </Tooltip>
            <Tooltip content="Another tooltip example">
              <span className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded cursor-pointer">
                Hover this text
              </span>
            </Tooltip>
            <Tooltip content="Tooltip with longer text content">
              <Button variant="secondary">Longer tooltip</Button>
            </Tooltip>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-3">
              Position Examples
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Tooltip content="Tooltip di atas" position="top">
                <Button variant="secondary">Top</Button>
              </Tooltip>
              <Tooltip content="Tooltip di bawah" position="bottom">
                <Button variant="secondary">Bottom</Button>
              </Tooltip>
              <Tooltip content="Tooltip di kiri" position="left">
                <Button variant="secondary">Left</Button>
              </Tooltip>
              <Tooltip content="Tooltip di kanan" position="right">
                <Button variant="secondary">Right</Button>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Usage Documentation */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Cara Penggunaan
          </h2>

          <div className="space-y-6">
            {/* Import */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                1. Import Komponen
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{importSnippet}</code>
              </pre>
            </div>

            {/* Basic Usage */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                2. Penggunaan Dasar
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{basicUsageSnippet}</code>
              </pre>
            </div>

            {/* With Button */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                3. Dengan Button
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{withButtonSnippet}</code>
              </pre>
            </div>

            {/* Custom Styling */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                4. Custom Styling (opsional)
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{customStylingSnippet}</code>
              </pre>
            </div>

            {/* Position */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                5. Posisi Tooltip (opsional)
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{positionSnippet}</code>
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
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 px-4 font-medium">Prop</th>
                      <th className="text-left py-2 px-4 font-medium">Type</th>
                      <th className="text-left py-2 px-4 font-medium">Default</th>
                      <th className="text-left py-2 px-4 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-600">
                      <td className="py-2 px-4"><code>content</code></td>
                      <td className="py-2 px-4">string</td>
                      <td className="py-2 px-4">-</td>
                      <td className="py-2 px-4">Teks yang akan ditampilkan dalam tooltip</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-600">
                      <td className="py-2 px-4"><code>className</code></td>
                      <td className="py-2 px-4">string</td>
                      <td className="py-2 px-4">''</td>
                      <td className="py-2 px-4">Kelas CSS tambahan untuk styling tooltip</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-600">
                      <td className="py-2 px-4"><code>position</code></td>
                      <td className="py-2 px-4">string</td>
                      <td className="py-2 px-4">'top'</td>
                      <td className="py-2 px-4">Posisi tooltip: 'top', 'bottom', 'left', 'right'</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4"><code>children</code></td>
                      <td className="py-2 px-4">ReactNode</td>
                      <td className="py-2 px-4">-</td>
                      <td className="py-2 px-4">Elemen trigger yang akan menampilkan tooltip saat hover/focus</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                Behavior
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>Tooltip muncul saat mouse hover atau focus pada elemen trigger</li>
                <li>Tooltip hilang saat mouse leave atau blur dari elemen trigger</li>
                <li>Tooltip dapat diposisikan di atas, bawah, kiri, atau kanan elemen trigger dengan arrow pointer</li>
                <li>Tooltip dapat diakses keyboard (focusable)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TooltipDocPage
