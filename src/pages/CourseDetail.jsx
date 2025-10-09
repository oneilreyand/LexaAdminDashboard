import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCourseVideos } from '../store/action/courseVideos';
import Card from '../components/atoms/Card';
import Button from '../components/atoms/Button';
import Badge from '../components/atoms/Badge';
import Avatar from '../components/atoms/Avatar';
import Separator from '../components/atoms/Separator';
import {
  Share2,
  Bookmark,
  CheckCircle2,
  Users,
  Globe,
  FileText,
  Video,
  Clock
} from "lucide-react";

const CourseDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.courseVideos.videos);
  // const buddies = useSelector((state) => state.buddies.buddies);

  useEffect(() => {
    if (videos.length === 0) {
      dispatch(setCourseVideos());
    }
  }, [dispatch, videos.length]);

  let video = videos.find(v => v.id === parseInt(id));


  if (!video) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 md:px-6 lg:px-8">
        <div className="w-full mx-auto">
          <Card className="p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Video Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              The video you're looking for doesn't exist.
            </p>
          </Card>
        </div>
      </div>
    );
  }

  const {
    title,
    professor = 'Unknown',
    category = 'Video',
    videoUrl,
    posterUrl,
    description,
    skillLevel = 'N/A',
    students = 0,
    languages = 'English',
    captions = false,
    lectures = 1,
    duration,
    instructorName = 'Unknown',
    instructorRole = 'Developer',
    instructorAvatar = 'https://i.pravatar.cc/100',
    // progress
  } = video;

  const backPath = localStorage.getItem('pathVideo');

  // Function to check if URL is YouTube and extract video ID
  const getYouTubeVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const isYouTubeVideo = videoUrl && (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be'));
  const youtubeVideoId = getYouTubeVideoId(videoUrl);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 md:px-6 lg:px-8">
      <div className="w-full mx-auto">
        <Card className="overflow-hidden shadow-lg">
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <Button
                  variant="secondary"
                  size="small"
                  styleType="outline"
                  onClick={() => navigate(backPath)}
                  className="mb-4"
                  borderless={false}
                >
                  ← Back to List
                </Button>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {title}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Prof. <span className="font-medium text-gray-900 dark:text-gray-100">{professor}</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="danger">{category}</Badge>
                  <Share2 className="h-5 w-5" />
                  <Bookmark className="h-5 w-5" />
              </div>
            </div>
            <div className="w-[65%] p-8">
              {/* Video Player */}
              <Card className="overflow-hidden mb-8 border shadow-sm p-0">
                <div className="aspect-video bg-black relative">
                  {videoUrl && isYouTubeVideo && youtubeVideoId ? (
                    <iframe
                      className="w-full h-full absolute inset-0"
                      src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&rel=0`}
                      title={title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowFullScreen
                    ></iframe>
                  ) : videoUrl ? (
                    <video
                      className="w-full h-full absolute inset-0"
                      controls
                      autoPlay
                      muted
                      poster={posterUrl}
                      preload="metadata"
                      playsInline
                    >
                      <source src={videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={posterUrl}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </Card>

              {/* Course Content */}
              <div className="space-y-8">
                {/* About */}
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    About this course
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {description}
                  </p>
                </section>

                <Separator />

                {/* By the numbers */}
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    By the numbers
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                        <span>Skill level: {skillLevel}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Users className="h-5 w-5 flex-shrink-0" />
                        <span>Students: {students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Globe className="h-5 w-5 flex-shrink-0" />
                        <span>Languages: {languages}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <FileText className="h-5 w-5 flex-shrink-0" />
                        <span>Captions: {captions ? "Yes" : "No"}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Video className="h-5 w-5 flex-shrink-0" />
                        <span>Lectures: {lectures}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Clock className="h-5 w-5 flex-shrink-0" />
                        <span>Video: {duration}</span>
                      </div>
                    </div>
                  </div>
                </section>

                <Separator />

                {/* Description */}
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Description
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      The material of this course is also covered in my other course about web
                      design and development with HTML5 & CSS3. Scroll to the bottom of this page
                      to check out that course, too! If you're already taking my other course, you
                      already have all it takes to start designing beautiful websites today!
                    </p>
                    <p className="italic">
                      "Best web design course: If you're interested in web design, but want more
                      than just a 'how to use WordPress' course, I highly recommend this one."
                      — Florian Giusti
                    </p>
                    <p className="italic">
                      "Very helpful to us left-brained people: I am familiar with HTML, CSS, JQuery,
                      and Twitter Bootstrap, but I needed instruction in web design. This course gave
                      me practical, impactful techniques for making websites more beautiful and engaging."
                      — Susan Darlene Cain
                    </p>
                  </div>
                </section>

                <Separator />

                {/* Instructor */}
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Instructor
                  </h2>
                  <div className="flex items-center gap-4">
                    <Avatar src={instructorAvatar} alt={instructorName} size="large" />
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {instructorName}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {instructorRole}
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CourseDetail;
