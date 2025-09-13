import React from 'react'
import Card from '../atoms/Card'
import { HorizontalBarChart } from '../molecules/HorizontalBarChart'

const HorizontalBarChartCard = ({ title, data }) => {
  return (
    <Card className="h-full flex flex-col" padding="p-0">
      <div className="p-6 pb-4 flex-shrink-0">
        <h3 className="text-lg font-semibold text-sidebar-text dark:text-dark-text mb-0">{title}</h3>
      </div>
      <div className="flex-1 p-6 pt-0">
        <HorizontalBarChart data={data} height="100%" />
      </div>
    </Card>
  )
}

export default HorizontalBarChartCard
