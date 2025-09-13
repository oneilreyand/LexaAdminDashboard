import React from 'react'
import Table from '../components/atoms/Table'
import TableSample from '../components/atoms/TableSample'

// Generate sample data
const generateSampleData = (count) => {
  const data = []
  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      role: i % 4 === 0 ? 'Admin' : i % 3 === 0 ? 'Editor' : i % 2 === 0 ? 'Moderator' : 'User',
      status: i % 5 === 0 ? 'Inactive' : 'Active',
      createdAt: `2023-01-${String(i % 28 + 1).padStart(2, '0')}`
    })
  }
  return data
}

const largeData = generateSampleData(100)

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status' },
  { key: 'createdAt', label: 'Created At' }
]

function TableDocPage() {
  const smallData = generateSampleData(20)

  const importSnippet = `import Table from '../components/atoms/Table'`

  const basicUsageSnippet = `const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' }
]

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
]

<Table data={data} columns={columns} />`

  const paginationSnippet = `<Table
  data={largeData}
  columns={columns}
  pagination={true}
  pageSize={10}
  showPageSizeOptions={true}
  pageSizeOptions={[7, 10, 25, 50]}
/>`

  const stylingSnippet = `<Table
  data={data}
  columns={columns}
  striped={true}
  hover={true}
  bordered={true}
  size="small"
/>`

  return (
    <div className="h-full">
      <div className="space-y-8 p-6 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Table Documentation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Komponen table yang fleksibel dengan fitur pagination dan styling options
          </p>
        </div>

        {/* Quick Demo */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
            Quick Demo
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">Basic Table</h3>
              <Table data={smallData.slice(0, 5)} columns={columns} pagination={false} />
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">Table with Pagination</h3>
              <Table
                data={largeData}
                columns={columns}
                pagination={true}
                pageSize={7}
                showPageSizeOptions={true}
                pageSizeOptions={[7, 10, 25, 50]}
              />
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">TableSample with Enhanced Features</h3>
              <TableSample />
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
                3. With Pagination
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{paginationSnippet}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                4. Styling Options
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{stylingSnippet}</code>
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
                <li><code>data</code> (array) - Array of objects representing table rows (default: [])</li>
                <li><code>columns</code> (array) - Array of objects with 'key' and 'label' for columns (default: [])</li>
                <li><code>pagination</code> (boolean) - Enable pagination (default: true)</li>
                <li><code>pageSize</code> (number) - Number of rows per page (default: 10)</li>
                <li><code>showPageSizeOptions</code> (boolean) - Show page size selector (default: true)</li>
                <li><code>pageSizeOptions</code> (array) - Available page sizes (default: [7, 10, 25, 50])</li>
                <li><code>striped</code> (boolean) - Alternate row colors (default: false)</li>
                <li><code>hover</code> (boolean) - Highlight rows on hover (default: true)</li>
                <li><code>bordered</code> (boolean) - Add borders to table (default: true)</li>
                <li><code>size</code> (string) - Table size: 'small', 'medium', 'large' (default: 'medium')</li>
                <li><code>responsive</code> (boolean) - Make table responsive (default: true)</li>
                <li><code>className</code> (string) - Additional CSS classes</li>
              </ul>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                Data Structure
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                The <code>data</code> prop should be an array of objects. Each object represents a row.
              </p>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{`const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
]`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                Columns Structure
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                The <code>columns</code> prop should be an array of objects with 'key' and 'label'.
              </p>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{`const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' }
]`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableDocPage
