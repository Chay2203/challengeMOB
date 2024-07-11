import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from 'components/sidebar';
import CourseCard from 'components/card/CourseCard';
interface Course {
  id?: number;
  title: string;
  new_field: string;
  img_src: string;
  week: number;

  assests: {
    yt_src: string;
    res_src: string;
    doc_src: string;
    do_src:string;
  };
}

const CoursePage = () => {
  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const videoRef = useRef(null);
  const[limit,setlimt]=useState(0);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://challangemob.onrender.com/courses');
        const days: any = response.data.courses.sort((a: any, b: any) => a.week - b.week);
        setCourses(days);
        setlimt(days[0].limit);
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
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
                  fill="#A3AED0"
                />
              </svg>
              <p className="ml-3 text-sm text-gray-600">Back to Dashboard</p>
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
        {courses.map((course, index) => {
  

  return (
    <div
      key={course.id || index}
      className={index >= limit ? 'filter blur-sm pointer-events-none' : ''}
    >
      <CourseCard
        title={course.title}
        author={course.new_field}
        image={course.img_src}  
        yt_btn={course.yt_src} 
        onYouTubeClick={handleYouTubeClick}
        res_btn={course.res_src}
        doc_btn={course.doc_src}
        isActive={true}
        do_btn={course.do_src}
      />
    </div>
  );
})}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;