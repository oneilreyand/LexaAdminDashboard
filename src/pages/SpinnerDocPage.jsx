import React from 'react';
import Spinner from '../components/atoms/Spinner';
import Button from '../components/atoms/Button';

function SpinnerDocPage() {
  const importSnippet = `import Spinner from '../components/atoms/Spinner'`;

  const usageSnippet = `const Component = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3>Border Spinner</h3>
        <Spinner type="spinner" size="small" color="primary" />
        <Spinner type="spinner" size="medium" color="success" />
        <Spinner type="spinner" size="large" color="danger" />
      </div>
      <div>
        <h3>Growing Spinner</h3>
        <Spinner type="growing" size="small" color="primary" />
        <Spinner type="growing" size="medium" color="success" />
        <Spinner type="growing" size="large" color="danger" />
      </div>
    </div>
  );
}`;

  return (
    <div className="h-full">
      <div className="space-y-8 p-6 max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Spinner Documentation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Komponen spinner dengan dua tipe: border (spinner) dan growing, serta ukuran yang dapat disesuaikan.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
            Quick Demo
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">Types</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex flex-col items-center">
                  <Spinner type="spinner" size="medium" color="primary" />
                  <span className="text-sm mt-2">Spinner (Border)</span>
                </div>
                <div className="flex flex-col items-center">
                  <Spinner type="growing" size="medium" color="primary" />
                  <span className="text-sm mt-2">Growing</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex flex-col items-center">
                  <Spinner type="spinner" size="small" color="primary" />
                  <span className="text-sm mt-2">Small</span>
                </div>
                <div className="flex flex-col items-center">
                  <Spinner type="spinner" size="medium" color="primary" />
                  <span className="text-sm mt-2">Medium</span>
                </div>
                <div className="flex flex-col items-center">
                  <Spinner type="spinner" size="large" color="primary" />
                  <span className="text-sm mt-2">Large</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">Colors</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex flex-col items-center">
                  <Spinner type="spinner" size="medium" color="primary" />
                  <span className="text-sm mt-2">Primary</span>
                </div>
                <div className="flex flex-col items-center">
                  <Spinner type="spinner" size="medium" color="success" />
                  <span className="text-sm mt-2">Success</span>
                </div>
                <div className="flex flex-col items-center">
                  <Spinner type="spinner" size="medium" color="danger" />
                  <span className="text-sm mt-2">Danger</span>
                </div>
                <div className="flex flex-col items-center">
                  <Spinner type="spinner" size="medium" color="warning" />
                  <span className="text-sm mt-2">Warning</span>
                </div>
                <div className="flex flex-col items-center">
                  <Spinner type="spinner" size="medium" color="info" />
                  <span className="text-sm mt-2">Info</span>
                </div>
                <div className="flex flex-col items-center">
                  <Spinner type="spinner" size="medium" color="dark" />
                  <span className="text-sm mt-2">Dark</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">Button with Spinner</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary" styleType="label" loading={true} spinnerType="spinner" >
                  Loading Spinner
                </Button>
                <Button variant="primary" styleType="label" loading={true} spinnerType="growing" >
                  Loading Growing
                </Button>
              </div>
            </div>
          </div>
        </div>

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
                <code>{importSnippet}</code>
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                2. Gunakan dalam Component
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{usageSnippet}</code>
              </pre>
            </div>
          </div>
        </div>

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
                <li><code>type</code> (string) - Tipe spinner: 'spinner' (border) atau 'growing' (default: 'spinner')</li>
                <li><code>size</code> (string) - Ukuran spinner: 'small', 'medium', 'large' (default: 'medium')</li>
                <li><code>color</code> (string) - Warna spinner: 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark' (default: 'primary')</li>
                <li><code>className</code> (string) - Kelas CSS tambahan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpinnerDocPage;
