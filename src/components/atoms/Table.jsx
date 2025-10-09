import React, { useState, useMemo } from 'react';
import Pagination from '../molecules/Pagination';

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

      {pagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          pageSize={currentPageSize}
          onPageSizeChange={handlePageSizeChange}
          pageSizeOptions={pageSizeOptions}
          showPageSizeOptions={showPageSizeOptions}
          totalItems={data.length}
        />
      )}
    </div>
  );
};

export default Table;
