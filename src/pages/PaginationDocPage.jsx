import React, { useState } from 'react'
import Pagination from '../components/molecules/Pagination'

// Sample data for demo
const sampleData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  description: `Description for item ${i + 1}`
}))

function PaginationDocPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const totalPages = Math.ceil(sampleData.length / pageSize)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize)
    setCurrentPage(1)
  }

  const importSnippet = `import Pagination from '../components/molecules/Pagination'`

  const basicUsageSnippet = `const [currentPage, setCurrentPage] = useState(1)
const [pageSize, setPageSize] = useState(10)

const totalPages = Math.ceil(data.length / pageSize)

const handlePageChange = (page) => {
  setCurrentPage(page)
}

const handlePageSizeChange = (newSize) => {
  setPageSize(newSize)
  setCurrentPage(1)
}

<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={handlePageChange}
  pageSize={pageSize}
  onPageSizeChange={handlePageSizeChange}
  totalItems={data.length}
/>`

  const withTableSnippet = `import React, { useState, useMemo } from 'react'
import Table from '../components/atoms/Table'
import Pagination from '../components/molecules/Pagination'

const DataTableWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const data = useMemo(() => generateData(100), [])
  const totalPages = Math.ceil(data.length / pageSize)

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize
    return data.slice(startIndex, startIndex + pageSize)
  }, [data, currentPage, pageSize])

  return (
    <div>
      <Table
        data={paginatedData}
        columns={columns}
        pagination={false} // Disable built-in pagination
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        pageSize={pageSize}
        onPageSizeChange={(newSize) => {
          setPageSize(newSize)
          setCurrentPage(1)
        }}
        totalItems={data.length}
      />
    </div>
  )
}`

  const customOptionsSnippet = `<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={handlePageChange}
  pageSize={pageSize}
  onPageSizeChange={handlePageSizeChange}
  pageSizeOptions={[5, 10, 25, 50, 100]}
  showPageSizeOptions={true}
  totalItems={data.length}
  className="custom-pagination-class"
/>`

  return (
    <div className="h-full">
      <div className="space-y-8 p-6 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Pagination Documentation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Komponen pagination yang reusable untuk navigasi halaman data
          </p>
        </div>

        {/* Quick Demo */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
            Quick Demo
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">
                Basic Pagination
              </h3>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  pageSize={pageSize}
                  onPageSizeChange={handlePageSizeChange}
                  totalItems={sampleData.length}
                />
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-400 mt-2">
                Current Page: {currentPage}, Page Size: {pageSize}, Total Items: {sampleData.length}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">
                Pagination with Custom Page Size Options
              </h3>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  pageSize={pageSize}
                  onPageSizeChange={handlePageSizeChange}
                  pageSizeOptions={[5, 10, 25, 50]}
                  totalItems={sampleData.length}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Usage Examples
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                1. Import
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{importSnippet}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                2. Basic Usage
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{basicUsageSnippet}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                3. With Table Component
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{withTableSnippet}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                4. Custom Options
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{customOptionsSnippet}</code>
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
                <li><code>currentPage</code> (number, required) - Halaman saat ini</li>
                <li><code>totalPages</code> (number, required) - Total jumlah halaman</li>
                <li><code>onPageChange</code> (function, required) - Handler untuk perubahan halaman</li>
                <li><code>pageSize</code> (number) - Jumlah item per halaman (default: 10)</li>
                <li><code>onPageSizeChange</code> (function) - Handler untuk perubahan page size</li>
                <li><code>pageSizeOptions</code> (array) - Opsi page size (default: [7, 10, 25, 50])</li>
                <li><code>showPageSizeOptions</code> (boolean) - Tampilkan selector page size (default: true)</li>
                <li><code>totalItems</code> (number) - Total jumlah item untuk info display</li>
                <li><code>className</code> (string) - Custom CSS classes</li>
                <li><code>...props</code> - Props HTML div lainnya</li>
              </ul>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                Features
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>Navigasi Previous/Next</li>
                <li>Page number buttons dengan smart display (max 5 pages)</li>
                <li>Page size selector</li>
                <li>Info display showing current range and total items</li>
                <li>Responsive design</li>
                <li>Dark mode support</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                State Management
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Komponen ini tidak mengelola state internal. Parent component harus mengelola <code>currentPage</code> dan <code>pageSize</code>.
              </p>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{`const [currentPage, setCurrentPage] = useState(1)
const [pageSize, setPageSize] = useState(10)

// Calculate total pages
const totalPages = Math.ceil(data.length / pageSize)

// Handle page changes
const handlePageChange = (page) => setCurrentPage(page)
const handlePageSizeChange = (newSize) => {
  setPageSize(newSize)
  setCurrentPage(1) // Reset to first page
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaginationDocPage
