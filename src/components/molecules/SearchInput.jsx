import React from 'react';
import { Search } from 'lucide-react';
import Input from '../atoms/Input';

const SearchInput = ({ placeholder = "Search...", className = '', ...props }) => {
  return (
    <div className={`flex items-center w-full bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2 ${className}`}>
      <Search className="h-5 w-5 text-slate dark:text-gray-400" />
      <Input
        type="text"
        placeholder={placeholder}
        className="ml-2 flex-1 text-custom-blue-600 dark:text-gray-300"
        {...props}
      />
    </div>
  );
};

export default SearchInput;
