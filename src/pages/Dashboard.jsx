import React, { useState } from 'react'
import StatsCard from '../components/organisms/StatsCard'
import CongratulationsCard from '../components/organisms/CongratulationsCard'
import TopCourses from '../components/organisms/TopCourses'
import HorizontalBarChartCard from '../components/organisms/HorizontalBarChartCard'
import PopularInstructorsCard from '../components/organisms/PopularInstructorsCard'

function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);

  // Sample data for charts
  const orderStatsData = [14, 55, 41, 17, 15]
  const orderStatsLabels = ['UI/UX Design', 'Front Ende Developer', 'Back End Developer', 'AI Enginer', 'QA']
  const orderStatsColors = ['#7183e8', '#7183e8', '#10B981', '#F59E0B', '#EF4444']
  const horizontalData = orderStatsLabels.map((name, i) => ({ name, value: orderStatsData[i], color: orderStatsColors[i] }))

  // Sample data for instructors
  const instructors = [
    {
      avatar: 'https://picsum.photos/40/40?random=1',
      name: 'John Doe',
      role: 'UI/UX Designer',
      courses: 12
    },
    {
      avatar: 'https://picsum.photos/40/40?random=2',
      name: 'Jane Smith',
      role: 'Frontend Developer',
      courses: 8
    },
    {
      avatar: 'https://picsum.photos/40/40?random=3',
      name: 'Bob Johnson',
      role: 'Backend Developer',
      courses: 15
    },
    {
      avatar: 'https://picsum.photos/40/40?random=4',
      name: 'Alice Brown',
      role: 'AI Engineer',
      courses: 10
    }
  ]

  // Sample data for profile report
  const dataTopCourses = [
    {
      title: 'Automation Cypress',
      category: 'QA',
      value: '12,3k',
      type: 'video'
    },
    {
      title: 'Basic Front-end Development',
      category: 'FE',
      value: '1,2k',
      type: 'video'
    },
    {
      title: 'Advance Dribble Base Visual',
      category: 'Design',
      value: '800',
      type: 'video'
    },
    {
      title: 'Unit test with Jest',
      category: 'FE',
      value: '200',
      type: 'video'
    },
    {
      title: 'Full stack web development',
      category: 'FE/BE',
      value: '100',
      type: 'video'
    }
  ]

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-sidebar-text dark:text-dark-text">Dashboard</h1>
        <div className="relative">
          <button onClick={() => setShowMenu(!showMenu)} className="text-sidebar-text hover:text-sidebar-text">
            <i className="bx bx-dots-vertical-rounded text-xl"></i>
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
              <div className="py-1">
                <button className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left" onClick={() => window.location.reload()}>
                  <i className="bx bx-refresh mr-2"></i>Refresh
                </button>
                <button className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left" onClick={() => navigator.share ? navigator.share({title: 'Dashboard', url: window.location.href}) : alert('Share not supported')}>
                  <i className="bx bx-share mr-2"></i>Share
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Top Section: 2 Stats and Congratulations */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-6">
        {/* Total Revenue */}
        <StatsCard
          title="Total Orders"
          value="75,000"
          change="+12.5%"
          changeType="positive"
          icon="dollar"
          chartData={[44, 55, 41, 17, 15]}
          chartCategories={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
        />

        {/* Congratulations Card */}
        <CongratulationsCard
          name="John"
          message="You have done 72% more sales today. Check your new badge in your profile."
          buttonText="View Badges"
        />
      </div>
      {/* Horizontal Bar Chart */}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">
        <div className="h-full">
          <HorizontalBarChartCard title="Topic you are interested in" data={horizontalData} />
        </div>
        <div>
          <PopularInstructorsCard instructors={instructors} />
        </div>
      </div>

      {/* Profile Report */}
      <div className="w-full">
        <TopCourses title="Top Courses" data={dataTopCourses} />
      </div>
    </div>
  )
}

export default Dashboard
