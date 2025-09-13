import React from 'react'
import useSnackbar from '../hooks/useSnackbar'
import Button from '../components/atoms/Button'

function SnackbarDocPage() {
  const { showSuccess, showError, showWarning, showInfo, showMessage } = useSnackbar()

  // Function to test multiple snackbars appearing sequentially
  const testMultipleSnackbars = () => {
    showInfo('Loading data...', 1000)
    setTimeout(() => showSuccess('Data loaded successfully!', 1000), 500)
    setTimeout(() => showWarning('Some data might be outdated', 1000), 1000)
    setTimeout(() => showError('Failed to load some reports', 1000), 1500)
    setTimeout(() => showMessage('Do you want to retry?', 'question', 2000), 2000)
  }

  // Move code examples into strings so JSX parser tidak kebingungan
  const importSnippet = `import useSnackbar from '../hooks/useSnackbar'`

  const usageSnippet = `const Component = () => {
  const { showSuccess, showError, showWarning, showInfo, showMessage } = useSnackbar()

  return (
    <div>
      <button onClick={() => showSuccess('Pesan sukses!')}>
        Tampilkan Success
      </button>
      <button onClick={() => showError('Pesan error!')}>
        Tampilkan Error
      </button>
      <button onClick={() => showWarning('Pesan warning!')}>
        Tampilkan Warning
      </button>
      <button onClick={() => showInfo('Pesan info!')}>
        Tampilkan Info
      </button>
      <button onClick={() => showMessage('Pesan custom', 'question')}>
        Tampilkan Custom
      </button>
    </div>
  )
}`

  const customDurationSnippet = `// Default: 4000ms (4 detik)
showSuccess('Pesan 2 detik', 2000)
showError('Pesan 5 detik', 5000)
showMessage('Custom type dan duration', 'warning', 3000)`

  return (
    <div className="h-full">
      <div className="space-y-8 p-6 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Snackbar Documentation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Komponen snackbar untuk menampilkan notifikasi sementara kepada pengguna
          </p>
        </div>

        {/* Quick Demo Buttons */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
            Quick Demo
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="success"
              onClick={() => showSuccess('Operasi berhasil diselesaikan!')}
            >
              Success
            </Button>
            <Button
              variant="danger"
              onClick={() => showError('Terjadi kesalahan pada sistem!')}
            >
              Error
            </Button>
            <Button
              variant="warning"
              onClick={() => showWarning('Ini adalah peringatan penting!')}
            >
              Warning
            </Button>
            <Button
              variant="info"
              onClick={() => showInfo('Ini adalah informasi penting')}
            >
              Info
            </Button>
            <Button
              variant="secondary"
              onClick={() => showMessage('Apakah Anda yakin?', 'question')}
            >
              Question
            </Button>
            <Button
              variant="primary"
              onClick={testMultipleSnackbars}
            >
              Multiple Snackbars
            </Button>
          </div>
        </div>

        {/* Types Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Jenis-jenis Snackbar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Success */}
            <div className="border border-green-200 dark:border-green-800 rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-2">
                  ✓
                </div>
                <span className="font-medium text-green-800 dark:text-green-300">Success</span>
              </div>
              <p className="text-sm text-green-700 dark:text-green-400">
                Untuk pesan sukses atau konfirmasi berhasil
              </p>
              <div className="mt-2 text-xs text-green-600 dark:text-green-500">
                Warna: Hijau (#71DD37)
              </div>
            </div>

            {/* Error */}
            <div className="border border-red-200 dark:border-red-800 rounded-lg p-4 bg-red-50 dark:bg-red-900/20">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white mr-2">
                  ✕
                </div>
                <span className="font-medium text-red-800 dark:text-red-300">Error</span>
              </div>
              <p className="text-sm text-red-700 dark:text-red-400">
                Untuk pesan error atau kesalahan sistem
              </p>
              <div className="mt-2 text-xs text-red-600 dark:text-red-500">
                Warna: Merah (#EF4444)
              </div>
            </div>

            {/* Warning */}
            <div className="border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 bg-yellow-50 dark:bg-yellow-900/20">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white mr-2">
                  ⚠
                </div>
                <span className="font-medium text-yellow-800 dark:text-yellow-300">Warning</span>
              </div>
              <p className="text-sm text-yellow-700 dark:text-yellow-400">
                Untuk peringatan atau alert penting
              </p>
              <div className="mt-2 text-xs text-yellow-600 dark:text-yellow-500">
                Warna: Kuning (#F59E0B)
              </div>
            </div>

            {/* Info */}
            <div className="border border-blue-200 dark:border-blue-800 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2">
                  i
                </div>
                <span className="font-medium text-blue-800 dark:text-blue-300">Info</span>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Untuk informasi umum atau status
              </p>
              <div className="mt-2 text-xs text-blue-600 dark:text-blue-500">
                Warna: Biru (#3B82F6)
              </div>
            </div>

            {/* Question */}
            <div className="border border-purple-200 dark:border-purple-800 rounded-lg p-4 bg-purple-50 dark:bg-purple-900/20">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white mr-2">
                  ?
                </div>
                <span className="font-medium text-purple-800 dark:text-purple-300">Question</span>
              </div>
              <p className="text-sm text-purple-700 dark:text-purple-400">
                Untuk pertanyaan atau konfirmasi user
              </p>
              <div className="mt-2 text-xs text-purple-600 dark:text-purple-500">
                Warna: Ungu (#8B5CF6)
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
                1. Import Hook
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{importSnippet}</code>
              </pre>
            </div>

            {/* Hook Usage */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                2. Gunakan dalam Component
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{usageSnippet}</code>
              </pre>
            </div>

            {/* Custom Duration */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                3. Custom Duration (opsional)
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{customDurationSnippet}</code>
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
                useSnackbar() Hook
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Mengembalikan object dengan method berikut:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li><code>showSuccess(message, duration = 4000)</code> - Snackbar success</li>
                <li><code>showError(message, duration = 4000)</code> - Snackbar error</li>
                <li><code>showWarning(message, duration = 4000)</code> - Snackbar warning</li>
                <li><code>showInfo(message, duration = 4000)</code> - Snackbar info</li>
                <li><code>showMessage(message, type = 'info', duration = 4000)</code> - Custom snackbar</li>
              </ul>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                Parameter
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li><code>message</code> (string) - Pesan yang akan ditampilkan</li>
                <li><code>type</code> (string) - Jenis snackbar: 'success', 'error', 'warning', 'info', 'question'</li>
                <li><code>duration</code> (number) - Durasi tampil dalam milidetik (default: 4000)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SnackbarDocPage
