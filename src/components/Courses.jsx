import React, { useState } from 'react';
import './Courses.css'

const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      name: 'Data Structures & Algorithms in Python',
      description:
        'This course covers various data structures and algorithms implemented in Python. Topics include arrays, linked lists, stacks, queues, trees, sorting algorithms, searching algorithms, and more.',
      videoUrl: 'https://www.youtube.com/embed/fakevideo1'
    },
    {
      id: 2,
      name: 'Web Development Bootcamp',
      description:
        'Join this comprehensive web development bootcamp and learn HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and gain hands-on experience in web development.',
      videoUrl: 'https://www.youtube.com/embed/fakevideo2'
    },
    {
      id: 3,
      name: 'Python A-Z',
      description:
        'Master the Python programming language from scratch with this comprehensive course. Learn Python syntax, data types, control flow, functions, modules, and advanced concepts like decorators and generators.',
      videoUrl: 'https://www.youtube.com/embed/fakevideo3'
    },
    {
        id: 4,
        name: 'Machine Learning A-Z',
        description:
          'Dive into the world of machine learning with this extensive course. Learn about popular machine learning algorithms, including linear regression, logistic regression, decision trees, support vector machines, and neural networks. Gain practical experience by working on real-world datasets.',
        videoUrl: 'https://www.youtube.com/embed/fakevideo3'
      },
      {
        id: 5,
        name: 'Data Science Master',
        description:
          'Become a data scientist with this in-depth course. Explore data manipulation, visualization, statistical analysis, machine learning techniques, and data storytelling. Learn how to extract insights from data and make data-driven decisions.',
        videoUrl: 'https://www.youtube.com/embed/fakevideo3'
      }
    
  ];
  

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="courses-container">
      <div className="courses-sidebar">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`course-item ${selectedCourse === course ? 'active' : ''}`}
            onClick={() => handleCourseClick(course)}
          >
            {course.name}
          </div>
        ))}
      </div>
      <div className="course-details">
        {selectedCourse ? (
          <>
            <h2>{selectedCourse.name}</h2>
            <p>{selectedCourse.description}</p>
            <div className="video-container">
              <iframe title="Course Video" src={selectedCourse.videoUrl} allowFullScreen></iframe>
            </div>
            <button className="enroll-button">Enroll Now</button>
          </>
        ) : (
          <h3>Select a course to view details</h3>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
