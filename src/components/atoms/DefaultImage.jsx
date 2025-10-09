import React from 'react';

const DefaultImage = ({
  width = 400,
  height = 225,
  text = '',
  className = '',
  ...props
}) => {
  return (
    <div
      className={`bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg ${className}`}
      style={{ width: '100%', height: `${height}px`, aspectRatio: `${width}/${height}` }}
      {...props}
    >
      <div className="text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{text}</p>
      </div>
    </div>
  );
};

export default DefaultImage;
