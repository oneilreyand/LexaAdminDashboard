import React, { useState } from 'react'
import { Modal } from '../components/atoms/Modal'
import Button from '../components/atoms/Button'

function ModalDocPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="h-full relative">
      <div className="p-6 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Modal Documentation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Komponen modal dengan efek fade in saat dibuka
          </p>
        </div>

        {/* Quick Demo */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
            Quick Demo
          </h2>
          <div className="space-y-4">
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          </div>
        </div>

        {/* Features Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Fitur Modal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-blue-200 dark:border-blue-800 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
              <div className="flex items-center mb-2">
                <span className="text-2xl">🌟</span>
                <span className="font-medium text-blue-800 dark:text-blue-300 ml-2">Fade In</span>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Efek fade in yang smooth saat modal dibuka.
              </p>
            </div>

            <div className="border border-green-200 dark:border-green-800 rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
              <div className="flex items-center mb-2">
                <span className="text-2xl">🎯</span>
                <span className="font-medium text-green-800 dark:text-green-300 ml-2">Centered</span>
              </div>
              <p className="text-sm text-green-700 dark:text-green-400">
                Modal selalu terpusat di tengah layar.
              </p>
            </div>

            <div className="border border-orange-200 dark:border-orange-800 rounded-lg p-4 bg-orange-50 dark:bg-orange-900/20">
              <div className="flex items-center mb-2">
                <span className="text-2xl">⌨️</span>
                <span className="font-medium text-orange-800 dark:text-orange-300 ml-2">Keyboard</span>
              </div>
              <p className="text-sm text-orange-700 dark:text-orange-400">
                Tekan ESC untuk menutup modal.
              </p>
            </div>

            <div className="border border-red-200 dark:border-red-800 rounded-lg p-4 bg-red-50 dark:bg-red-900/20">
              <div className="flex items-center mb-2">
                <span className="text-2xl">👆</span>
                <span className="font-medium text-red-800 dark:text-red-300 ml-2">Auto Close</span>
              </div>
              <p className="text-sm text-red-700 dark:text-red-400">
                Klik di luar modal untuk menutup.
              </p>
            </div>

            <div className="border border-purple-200 dark:border-purple-800 rounded-lg p-4 bg-purple-50 dark:bg-purple-900/20">
              <div className="flex items-center mb-2">
                <span className="text-2xl">🌙</span>
                <span className="font-medium text-purple-800 dark:text-purple-300 ml-2">Dark Mode</span>
              </div>
              <p className="text-sm text-purple-700 dark:text-purple-400">
                Mendukung tema gelap dan terang.
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
                <code>{`import { Modal } from '../components/atoms/Modal'`}</code>
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
    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className="p-4">
        <h3>Modal Title</h3>
        <p>Your content here</p>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </div>
    </Modal>
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
                <li><code>isOpen</code> (boolean) - Mengontrol apakah modal terbuka</li>
                <li><code>onClose</code> (function) - Callback function saat modal ditutup</li>
                <li><code>children</code> (ReactNode) - Konten yang akan ditampilkan di dalam modal</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal instance */}
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Modal Title</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              This is a modal with fade-in effect. You can close it by clicking the close button, pressing ESC, or clicking outside the modal.
            </p>
            <div className="flex justify-end">
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default ModalDocPage
