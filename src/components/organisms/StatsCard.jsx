import React from 'react'
import Card from '../atoms/Card'
import AreaChart from '../molecules/AreaChart'
import { TrendingUp, DollarSign, Users, ShoppingCart } from 'lucide-react'

const StatsCard = ({ title, value, change, changeType, icon, chartData, chartCategories }) => {
  const getChangeColor = () => {
    if (changeType === 'positive') return 'text-green-600'
    if (changeType === 'negative') return 'text-red-600'
    return 'text-gray-600'
  }

  const getIconBg = () => {
    if (icon === 'dollar') return 'bg-snackbar-success/30'
    if (icon === 'users') return 'bg-blue-500/30'
    if (icon === 'cart') return 'bg-green-500/30'
    return 'bg-gray-500/30'
  }

  const getIconColor = () => {
    if (icon === 'dollar') return 'text-snackbar-success'
    if (icon === 'users') return 'text-blue-500'
    if (icon === 'cart') return 'text-green-500'
    return 'text-gray-500'
  }

  const renderIcon = () => {
    if (icon === 'dollar') return <DollarSign className="h-6 w-6" />
    if (icon === 'users') return <Users className="h-6 w-6" />
    if (icon === 'cart') return <ShoppingCart className="h-6 w-6" />
    return <DollarSign className="h-6 w-6" />
  }

  return (
    <Card>
      <div>
        <div className="flex items-center">
          <div className={`p-3 ${getIconBg()} rounded-lg`}>
            <span className={getIconColor()}>
              {renderIcon()}
            </span>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
            <p className="text-2xl font-bold text-sidebar-text dark:text-dark-text">{value}</p>
            {change && (
              <p className={`text-sm flex items-center ${getChangeColor()}`}>
                <TrendingUp className="h-4 w-4 mr-1" />
                {change}
              </p>
            )}
          </div>
        </div>
        {chartData && (
          <div id="orderChart" className="pb-3 pe-1" style={{ minHeight: '80px' }}>
            <AreaChart data={chartData} categories={chartCategories} height={80} />
          </div>
        )}
      </div>
    </Card>
  )
}

export default StatsCard
