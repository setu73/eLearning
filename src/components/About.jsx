import React from 'react';
import { BsFillEnvelopeAtFill } from 'react-icons/bs';
import './About.css';

const About = () => {
  const emailAddress = 'rajsetu209@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <>
    <h1 className='heading'>About Us</h1>
    <div className="about-container">
      <div className="flex-child one">
        <h2 className="about-title">Our Journey</h2>
        <div className="about-line"></div>
        <p className="about-description">
          Welcome to our e-learning platform! We are dedicated to providing high-quality online courses and educational resources to help you enhance your knowledge and skills in various subjects.
        </p>
        <div className="about-line"></div>
        <p className="about-description">
          Browse through our course catalog, choose the subjects that interest you, and embark on a journey of continuous learning and personal growth. We are committed to supporting you throughout your learning experience and helping you achieve your educational goals.
        </p>
      </div>

      <div className="flex-child two">
        <h2 className="about-title">Our Mission</h2>
        <div className="about-line"></div>
        <p className="about-description">
          Our mission is to make learning accessible and convenient for everyone. Whether you're a student looking to supplement your studies or a professional aiming to upskill, we have a wide range of courses available to cater to your needs.
        </p>
        <div className="about-line"></div>
        <p className="about-description">
          Our courses are designed and developed by experienced instructors who are experts in their respective fields. Each course offers comprehensive content, interactive lessons, and practical exercises to ensure effective learning outcomes.
        </p>
      </div>
    </div>
    <div className="bottom-section">
     <p className="about-contact">Please feel free to contact us at</p>
     <a className="about-email" href={`mailto:${emailAddress}`} onClick={handleEmailClick}>
       <BsFillEnvelopeAtFill className="mail-logo" />
     </a>
   </div>
   </>
  );
};

export default About;
