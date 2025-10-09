import React from 'react'
import Card from '../atoms/Card'
import {DropdownMenu} from '../molecules/Ellipsis'
import { Users, ShoppingCart, CreditCard, Video } from 'lucide-react'

const TopCourses = ({ title, data }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'users':
        return <Users className="h-5 w-5 text-blue-600" />
      case 'orders':
        return <ShoppingCart className="h-5 w-5 text-green-600" />
      case 'sales':
        return <CreditCard className="h-5 w-5 text-yellow-600" />
      case 'video':
        return <Video className="h-5 w-5 text-purple-600" />
      default:
        return <Users className="h-5 w-5 text-blue-600" />
    }
  }

  const getIconBg = (type) => {
    switch (type) {
      case 'users':
        return 'bg-blue-100 dark:bg-blue-900'
      case 'orders':
        return 'bg-green-100 dark:bg-green-900'
      case 'sales':
        return 'bg-yellow-100 dark:bg-yellow-900'
      case 'video':
        return 'bg-blue-100 dark:bg-blue-900'
      default:
        return 'bg-blue-100 dark:bg-blue-900'
    }
  }

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold text-sidebar-text dark:text-dark-text">{title}</h3>
        </div>
        <DropdownMenu/>
      </div>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`w-10 h-10 ${getIconBg(item.type)} rounded-full flex items-center justify-center mr-3`}>
                {getIcon(item.type)}
              </div>
              <div>
                <p className="font-medium text-sidebar-text dark:text-dark-text">{item.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.category}
                </p>
              </div>
            </div>
            <span className="text-sm bg-primary text-white px-2 py-1 rounded-md">{item.value} views</span>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default TopCourses
