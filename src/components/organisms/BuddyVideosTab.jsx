import React from 'react';

const BuddyVideosTab = ({ videos, navigate }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Videos</h3>
    <div className="grid gap-4">
      {videos.map((video) => (
        <div key={video.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 cursor-pointer" onClick={() => navigate(`/course-detail/${video.id}`)}>
          <div className="flex items-start gap-4">
            <img
              src={video.posterUrl}
              alt={video.title}
              className="w-42 h-32 object-cover rounded"
            />
            <div className="flex-1">
              <h4 className="font-semibold">{video.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{video.description}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <span>Duration: {video.duration}</span>
                <span>Progress: {video.progress}%</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BuddyVideosTab;
