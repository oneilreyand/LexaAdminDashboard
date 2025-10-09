import React, { useEffect } from 'react';
import CourseVideoList from '../components/molecules/CourseVideoList';
import {useLocation} from 'react-router-dom'

const ListVideoPage = () => {
  const location = useLocation();
  useEffect(() => {
    localStorage.setItem('pathVideo', location.pathname);
  }, [location]);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Course Videos
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explore our collection of course videos and continue your learning journey.
          </p>
        </div>

        <CourseVideoList />
      </div>
    </div>
  );
};

export default ListVideoPage;
