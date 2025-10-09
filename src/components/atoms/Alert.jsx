import React from 'react';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

const Alert = ({ type, title, children }) => {
  const styles = {
    info: 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900',
    warning: 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900',
    danger: 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900',
  };

  const textColors = {
    info: 'text-blue-600 dark:text-blue-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    danger: 'text-red-600 dark:text-red-400',
  };

  const icons = {
    info: <Info className="h-5 w-5" />,
    warning: <AlertCircle className="h-5 w-5" />,
    danger: <AlertTriangle className="h-5 w-5" />,
  };

  return (
    <div className={`border ${styles[type]} p-6 w-full`}>
      <div className={`flex items-center gap-2 ${textColors[type]} mb-4`}>
        {icons[type]}
        <h3 className="font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default Alert;
