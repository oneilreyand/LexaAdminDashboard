import React, { useState, useMemo } from 'react';
import Table from './Table';
import Avatar from './Avatar';
import { DropdownMenu } from '../molecules/Ellipsis';

// Generate sample data
const generateSampleData = (count) => {
  const statuses = ['Active', 'Inactive', 'Pending', 'Suspended'];
  const roles = ['Admin', 'Editor', 'Moderator', 'User'];
  const data = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      avatar: `https://i.pravatar.cc/40?u=${i}`,
      role: roles[i % roles.length],
      status: statuses[i % statuses.length],
      createdAt: `2023-01-${String(i % 28 + 1).padStart(2, '0')}`
    });
  }
  return data;
};

const StatusBadge = ({ status }) => {
  const statusClasses = {
    Active: 'bg-green-100 text-green-800',
    Inactive: 'bg-red-100 text-red-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Suspended: 'bg-gray-100 text-gray-800'
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusClasses[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  );
};

const TableSample = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const data = useMemo(() => generateSampleData(100), []);

  const handleSelectRow = (id) => {
    setSelectedRows(prev =>
      prev.includes(id)
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedRows(prev =>
      prev.length === data.length ? [] : data.map(row => row.id)
    );
  };

  const columns = [
    {
      key: 'select',
      label: (
        <input
          type="checkbox"
          checked={selectedRows.length === data.length && data.length > 0}
          onChange={handleSelectAll}
          className="rounded"
        />
      ),
      render: (value, row) => (
        <input
          type="checkbox"
          checked={selectedRows.includes(row.id)}
          onChange={() => handleSelectRow(row.id)}
          className="rounded"
        />
      )
    },
    {
      key: 'avatar',
      label: 'Avatar',
      render: (value, row) => (
        <Avatar src={row.avatar} alt={row.name} size="small" />
      )
    },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    {
      key: 'status',
      label: 'Status',
      render: (value, row) => <StatusBadge status={row.status} />
    },
    {
      key: 'actions',
      label: 'Actions',
      render: () => <DropdownMenu />
    }
  ];

  const handleBulkDelete = () => {
    // For demo, just alert
    alert(`Deleting ${selectedRows.length} selected rows`);
    setSelectedRows([]);
  };

  const handleBulkExport = () => {
    alert(`Exporting ${selectedRows.length} selected rows`);
  };

  return (
    <div>
      {selectedRows.length > 0 && (
        <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <div className="flex items-center justify-between">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              Selected: {selectedRows.length} rows
            </p>
            <div className="flex space-x-2">
              <button
                onClick={handleBulkExport}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Export
              </button>
              <button
                onClick={handleBulkDelete}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <Table
        data={data}
        columns={columns}
        pagination={true}
        pageSize={10}
        showPageSizeOptions={true}
        pageSizeOptions={[10, 25, 50, 100]}
      />
    </div>
  );
};

export default TableSample;
