import React, { useEffect } from 'react'

export function Modal({ isOpen, onClose, children }) {
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

  // Visibility classes for fade-in/out
  const visibilityClasses = isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'

  return (
    <>
      {/* Backdrop and Modal Content Wrapper */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${visibilityClasses}`}
        onClick={onClose}
      >
        <div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative p-6">
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
      </div>
    </>
  )
}
