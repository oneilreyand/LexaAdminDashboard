import React, { useState, useMemo } from 'react';
import Button from './Button';

const Table = ({
  data = [],
  columns = [],
  pagination = true,
  pageSize = 10,
  showPageSizeOptions = true,
  pageSizeOptions = [7, 10, 25, 50],
  striped = false,
  hover = true,
  bordered = true,
  size = 'medium',
  responsive = true,
  className = '',
  ...props
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSize, setCurrentPageSize] = useState(pageSize);

  const totalPages = Math.ceil(data.length / currentPageSize);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * currentPageSize;
    return data.slice(startIndex, startIndex + currentPageSize);
  }, [data, currentPage, currentPageSize]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePageSizeChange = (newSize) => {
    setCurrentPageSize(newSize);
    setCurrentPage(1);
  };

  const tableClasses = [
    'w-full',
    'text-sm',
    'text-left',
    'text-gray-500',
    'dark:text-gray-400',
    striped && 'divide-y divide-gray-200 dark:divide-gray-700',
    bordered && 'border border-gray-200 dark:border-gray-700',
    size === 'small' && 'text-xs',
    size === 'large' && 'text-base',
    className
  ].filter(Boolean).join(' ');

  const tbodyClasses = [
    'bg-white dark:bg-gray-800',
    striped && 'divide-y divide-gray-200 dark:divide-gray-700',
    hover && 'hover:bg-gray-50 dark:hover:bg-gray-700'
  ].filter(Boolean).join(' ');

  const wrapperClasses = [
    responsive && 'overflow-x-auto',
    'relative'
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses} {...props}>
      <table className={tableClasses}>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((column, index) => (
              <th key={column.key || index} scope="col" className="px-6 py-3">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={row.id || rowIndex} className={tbodyClasses}>
              {columns.map((column, colIndex) => (
                <td key={column.key || colIndex} className="px-6 py-4 whitespace-nowrap">
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {pagination && totalPages > 1 && (
        <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 sm:px-6">
          <div className="flex items-center">
            {showPageSizeOptions && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">Show</span>
                <select
                  value={currentPageSize}
                  onChange={(e) => handlePageSizeChange(Number(e.target.value))}
                  className="block w-20 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                >
                  {pageSizeOptions.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                <span className="text-sm text-gray-700 dark:text-gray-300">entries</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="secondary"
              size="small"
              styleType="outline"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => {
                  const start = Math.max(1, currentPage - 2);
                  const end = Math.min(totalPages, currentPage + 2);
                  return page >= start && page <= end;
                })
                .map((page) => (
                  <Button
                    key={page}
                    variant={page === currentPage ? 'primary' : 'secondary'}
                    size="small"
                    styleType={page === currentPage ? 'basic' : 'outline'}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                ))}
            </div>

            <Button
              variant="secondary"
              size="small"
              styleType="outline"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
