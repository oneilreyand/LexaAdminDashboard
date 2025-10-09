import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CourseVideoPagination from './CourseVideoPagination';
import { setCourseVideos } from '../../store/action/courseVideos';

const CourseVideoList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const videos = useSelector((state) => state.courseVideos.videos);

  useEffect(() => {
    // Dispatch dummy data to Redux store from action
    dispatch(setCourseVideos());
  }, [dispatch]);

  const handleCardClick = (videoId) => {
    navigate(`/course-detail/${videoId}`);
  };

  return (
    <CourseVideoPagination videos={videos} onCardClick={handleCardClick} />
  );
};

export default CourseVideoList;
