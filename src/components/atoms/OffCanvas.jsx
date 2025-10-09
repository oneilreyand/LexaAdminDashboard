import React, { useEffect } from 'react'

export function OffCanvas({ isOpen, onClose, size = 'normal', position = 'left', children }) {
  // Size classes
  const sizeClasses = {
    normal: position === 'left' || position === 'right' ? 'w-80 min-h-screen' : 'h-80 w-full',
    large: position === 'left' || position === 'right' ? 'w-[28rem] min-h-screen' : 'h-96 w-full'
  }

  // Position classes
  const positionClasses = {
    left: 'inset-y-0 left-0',
    right: 'inset-y-0 right-0',
    top: 'top-0 inset-x-0',
    bottom: 'bottom-0 inset-x-0'
  }

  // Translate classes for animation
  const translateClasses = {
    left: isOpen ? 'translate-x-0' : '-translate-x-full',
    right: isOpen ? 'translate-x-0' : 'translate-x-full',
    top: isOpen ? 'translate-y-0' : '-translate-y-full',
    bottom: isOpen ? 'translate-y-0' : 'translate-y-full'
  }

  // Visibility classes
  const visibilityClasses = isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${visibilityClasses}`}
        onClick={onClose}
      />

      {/* OffCanvas Panel */}
      <div
        className={`fixed ${positionClasses[position]} ${sizeClasses[size]} bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-all duration-300 ease-in-out ${translateClasses[position]} ${visibilityClasses}`}
      >
        <div className="relative px-4 pb-4 pt-0 h-full overflow-auto">
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </>
  )
}
