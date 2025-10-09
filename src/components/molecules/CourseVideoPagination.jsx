import React, { useState, useMemo, useEffect } from 'react';
import Pagination from './Pagination';
import CourseCard from './CourseCard';

const CourseVideoPagination = ({ videos, onCardClick }) => {
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem('courseVideoCurrentPage');
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const [pageSize, setPageSize] = useState(() => {
    const savedPageSize = localStorage.getItem('courseVideoPageSize');
    return savedPageSize ? parseInt(savedPageSize, 10) : 6;
  });

  const totalPages = Math.ceil(videos.length / pageSize);

  const paginatedVideos = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return videos.slice(startIndex, startIndex + pageSize);
  }, [videos, currentPage, pageSize]);

  // Save current page and page size to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('courseVideoCurrentPage', currentPage.toString());
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem('courseVideoPageSize', pageSize.toString());
  }, [pageSize]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedVideos.map((video) => (
          <CourseCard
            key={video.id}
            image={video.posterUrl}
            category={video.category}
            rating={video.rating}
            reviewCount={video.reviewCount}
            title={video.title}
            description={video.description}
            duration={video.duration}
            progress={video.progress}
            onClick={() => onCardClick(video.id)}
            onStartOver={() => alert(`Start over: ${video.title}`)}
            onContinue={() => alert(`Continue: ${video.title}`)}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        pageSizeOptions={[3, 6, 9]}
        showPageSizeOptions={true}
        totalItems={videos.length}
        className="mt-6"
      />
    </>
  );
};

export default CourseVideoPagination;
