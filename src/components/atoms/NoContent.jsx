import React from 'react'

const NoContent = () => {
  return (
    <div className="w-full min-h-full flex-grow flex items-center justify-center text-gray-500 dark:text-gray-400 p-6">
      <div className="text-center">
        <p className="text-lg font-medium">No Content Available</p>
        <p className="text-sm">This section is currently empty.</p>
      </div>
    </div>
  )
}

export default NoContent
