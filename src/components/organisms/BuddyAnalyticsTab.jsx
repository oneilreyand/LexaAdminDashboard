import React from 'react';
import AreaChart from '../molecules/AreaChart';

const BuddyAnalyticsTab = ({ analytics }) => {
  // Sample yearly income data
  const yearlyIncomeData = [12000, 15000, 18000, 14000, 20000, 25000, 22000, 28000, 26000, 30000, 32000, 35000];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Analytics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Total Projects</h4>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{analytics.totalProjects}</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-green-800 dark:text-green-200">Completed</h4>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">{analytics.completedProjects}</p>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Average Rating</h4>
          <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{analytics.averageRating}</p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200">Total Views</h4>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{analytics.totalViews.toLocaleString()}</p>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Monthly Growth</h4>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">{analytics.monthlyGrowth}%</span>
          <span className="text-green-600">↗ Growth</span>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h4 className="font-semibold mb-4">Yearly Income</h4>
        <AreaChart data={yearlyIncomeData} categories={months} height={300} />
      </div>
    </div>
  );
};

export default BuddyAnalyticsTab;
