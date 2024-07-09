import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from 'components/sidebar';
import CourseCard from 'components/card/CourseCard';

const CoursePage = () => {
  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3001/courses');
        setCourses(response.data.courses); 
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course, index) => (
            <CourseCard
              key={course.id || index}
              title={course.title}
              author={course.new_field} // Corrected typo: 'new_field' instead of 'new_feild'
              image={course.img_src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;