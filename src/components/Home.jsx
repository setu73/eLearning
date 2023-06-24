import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContex';
import './Home.css';

const Home = () => {
  const { isLoggedIn } = useContext(GlobalContext);
  const [showMessage, setShowMessage] = useState(false);

  const handleCoursesClick = () => {
    if (!isLoggedIn) {
      setShowMessage(true);
    }
  };

  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to our E-Learning Platform</h2>
      <p className="home-paragraph">Enhance your knowledge and skills with our high-quality online courses.</p>
      <p className="home-paragraph">Browse through our extensive catalog and start your learning journey today!</p>
      <div className="home-cta">
        {isLoggedIn ? (
          <Link to="/courses" className="courses-link">
            Courses
          </Link>
        ) : (
          <button onClick={handleCoursesClick} className="courses-button">Courses</button>
        )}
      </div>
      {showMessage && (
        <div className="alert-message">
         <div className='message'>
          <p>Please sign up to view our various courses.</p>
          <p>If you already have an account, please login.</p>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default Home;
