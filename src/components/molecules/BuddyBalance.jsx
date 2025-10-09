import React, { useMemo } from 'react';
import CardBalance from '../molecules/CardBalance';
import Card from '../atoms/Card';
import MonthlyEarningsTable from './MonthlyEarningsTable';

const BuddyBalance = ({
  balance = 0,
  currency = 'USD',
  className = '',
  ...props
}) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  // Generate sample data for monthly earnings
  const earningsData = useMemo(() => {
    const data = [];
    const statuses = ['Paid', 'Pending', 'Overdue'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (let i = 1; i <= 50; i++) {
      data.push({
        id: i,
        bulan: months[(i - 1) % 12],
        status: statuses[i % statuses.length],
        amount: Math.floor(Math.random() * 5000) + 1000,
      });
    }
    return data;
  }, []);

  const paidCount = useMemo(() => earningsData.filter(item => item.status === 'Paid').length, [earningsData]);
  const pendingCount = useMemo(() => earningsData.filter(item => item.status === 'Pending').length, [earningsData]);

  return (
    <div className={className} {...props}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Balance Card Container */}
       <CardBalance/>

        {/* Earnings Container */}
        <div className="space-y-6">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  Monthly Earnings
                </h3>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {formatCurrency(balance * 0.15)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This month
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Paid
                  </h3>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {paidCount}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Total paid earnings
                  </p>
                </div>
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Pending
                  </h3>
                  <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                    {pendingCount}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Total pending earnings
                  </p>
                </div>
                <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-600 dark:text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <MonthlyEarningsTable data={earningsData} />
    </div>
  );
};

export default BuddyBalance;
