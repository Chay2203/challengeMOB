import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from 'components/sidebar';
import CourseCard from 'components/card/CourseCard';

const CoursePage = () => {
  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://challangemob.onrender.com/courses');
        const days = response.data.courses.sort((a: any, b: any) => a.week - b.week);
        setCourses(days); 
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleYouTubeClick = (url: string) => {
    const videoId = url.split('v=')[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    setVideoUrl(embedUrl);
    setShowVideo(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.requestFullscreen();
      }
    }, 100);
  };

  return (
    <div>
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="mt-5 ml-5">
        <div className="mb-5">
          <Link to="/admin" className="w-max lg:pt-5">
            <div className="flex h-fit items-left hover:cursor-pointer">
              {/* SVG and other elements */}
            </div>
          </Link>
        </div>
        {showVideo && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 9999,
              backgroundColor: 'black',
            }}
          >
            <iframe
              ref={videoRef}
              width="100%"
              height="100%"
              src={videoUrl}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
            <button 
              onClick={() => setShowVideo(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                zIndex: 10000,
                background: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
              }}
            >
              Close
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course, index) => (
            <div
              key={course.id || index}
              className={index !== 0 ? 'filter blur-sm pointer-events-none' : ''}
            >
              <CourseCard
                title={course.title}
                author={course.new_field}
                image={course.img_src}
                yt_btn='https://www.youtube.com/watch?v=rPluLsCdKZk'
                doc_btn='https://docs.google.com/forms/d/e/1FAIpQLSelGQrxZc5xB462w0KEpnuqACAjvhJvqyTlALaV-CXc4pvUKw/viewform'
                onYouTubeClick={handleYouTubeClick}
                isActive={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;