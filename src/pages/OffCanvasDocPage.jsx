import React, { useState } from 'react'
import { OffCanvas } from '../components/atoms/OffCanvas'
import Button from '../components/atoms/Button'

function OffCanvasDocPage() {
  const [isOpenLeft, setIsOpenLeft] = useState(false)
  const [isOpenRight, setIsOpenRight] = useState(false)
  const [isOpenTop, setIsOpenTop] = useState(false)
  const [isOpenBottom, setIsOpenBottom] = useState(false)

  const [size, setSize] = useState('normal')

  return (
    <div className="h-full relative">
      <div className="p-6 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Off Canvas Documentation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Komponen off canvas dengan animasi slide dan berbagai posisi
          </p>
        </div>

        {/* Quick Demo */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
            Quick Demo
          </h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => setIsOpenLeft(true)}>Open Left</Button>
              <Button onClick={() => setIsOpenRight(true)}>Open Right</Button>
              <Button onClick={() => setIsOpenTop(true)}>Open Top</Button>
              <Button onClick={() => setIsOpenBottom(true)}>Open Bottom</Button>
            </div>
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-blue-800 dark:text-blue-300">
                Size:
              </label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded"
              >
                <option value="normal">Normal</option>
                <option value="large">Large</option>
              </select>
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Fitur Off Canvas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-blue-200 dark:border-blue-800 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
              <div className="flex items-center mb-2">
                <span className="text-2xl">📏</span>
                <span className="font-medium text-blue-800 dark:text-blue-300 ml-2">Sizes</span>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Dua ukuran: normal dan large.
              </p>
            </div>

            <div className="border border-green-200 dark:border-green-800 rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
              <div className="flex items-center mb-2">
                <span className="text-2xl">📍</span>
                <span className="font-medium text-green-800 dark:text-green-300 ml-2">Positions</span>
              </div>
              <p className="text-sm text-green-700 dark:text-green-400">
                Bisa muncul dari kiri, kanan, atas, atau bawah.
              </p>
            </div>

            <div className="border border-orange-200 dark:border-orange-800 rounded-lg p-4 bg-orange-50 dark:bg-orange-900/20">
              <div className="flex items-center mb-2">
                <span className="text-2xl">🎬</span>
                <span className="font-medium text-orange-800 dark:text-orange-300 ml-2">Animations</span>
              </div>
              <p className="text-sm text-orange-700 dark:text-orange-400">
                Efek slide in saat dibuka dan slide out saat ditutup.
              </p>
            </div>

            <div className="border border-red-200 dark:border-red-800 rounded-lg p-4 bg-red-50 dark:bg-red-900/20">
              <div className="flex items-center mb-2">
                <span className="text-2xl">👆</span>
                <span className="font-medium text-red-800 dark:text-red-300 ml-2">Auto Close</span>
              </div>
              <p className="text-sm text-red-700 dark:text-red-400">
                Tertutup otomatis saat klik di luar content/overlay.
              </p>
            </div>
          </div>
        </div>

        {/* Usage Documentation */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Cara Penggunaan
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                1. Import Component
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{`import OffCanvas from '../components/atoms/OffCanvas'`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                2. Gunakan dalam Component
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{`const [isOpen, setIsOpen] = useState(false)

return (
  <div>
    <Button onClick={() => setIsOpen(true)}>Open OffCanvas</Button>
    <OffCanvas
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      size="normal"
      position="right"
    >
      <div className="p-4">
        <h3>Content</h3>
        <p>Your content here</p>
      </div>
    </OffCanvas>
  </div>
)`}</code>
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
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-4">
                <li><code>isOpen</code> (boolean) - Mengontrol apakah off canvas terbuka</li>
                <li><code>onClose</code> (function) - Callback function saat off canvas ditutup</li>
                <li><code>size</code> (string) - Ukuran off canvas: 'normal' atau 'large' (default: 'normal')</li>
                <li><code>position</code> (string) - Posisi muncul: 'left', 'right', 'top', 'bottom' (default: 'right')</li>
                <li><code>children</code> (ReactNode) - Konten yang akan ditampilkan di dalam off canvas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* OffCanvas instances */}
        <OffCanvas
          isOpen={isOpenLeft}
          onClose={() => setIsOpenLeft(false)}
          size={size}
          position="left"
        >
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Left OffCanvas</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              This is a {size} off canvas from the left.
            </p>
            <Button onClick={() => setIsOpenLeft(false)}>Close</Button>
          </div>
        </OffCanvas>

        <OffCanvas
          isOpen={isOpenRight}
          onClose={() => setIsOpenRight(false)}
          size={size}
          position="right"
        >
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Right OffCanvas</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              This is a {size} off canvas from the right.
            </p>
            <Button onClick={() => setIsOpenRight(false)}>Close</Button>
          </div>
        </OffCanvas>

        <OffCanvas
          isOpen={isOpenTop}
          onClose={() => setIsOpenTop(false)}
          size={size}
          position="top"
        >
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Top OffCanvas</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              This is a {size} off canvas from the top.
            </p>
            <Button onClick={() => setIsOpenTop(false)}>Close</Button>
          </div>
        </OffCanvas>

        <OffCanvas
          isOpen={isOpenBottom}
          onClose={() => setIsOpenBottom(false)}
          size={size}
          position="bottom"
        >
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Bottom OffCanvas</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              This is a {size} off canvas from the bottom.
            </p>
            <Button onClick={() => setIsOpenBottom(false)}>Close</Button>
          </div>
        </OffCanvas>
      </div>
    </div>
  )
}

export default OffCanvasDocPage
