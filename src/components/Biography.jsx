// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Welcome to CAREFUSION, where healthcare meets innovation. At CAREFUSION, we are dedicated to transforming the healthcare experience through cutting-edge technology and compassionate care.
          Our mission is to provide a seamless and efficient Health Management System (HMS) that empowers healthcare providers and patients alike.!
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
          Our Story
          Founded with a passion for improving healthcare, CAREFUSION brings together a team of experienced professionals from the fields of healthcare, technology, and management. Our journey began with the vision of addressing the complexities of healthcare management and creating a system that simplifies processes, enhances communication, and improves patient outcomes.

          Over the years, we have grown into a trusted partner for healthcare institutions, providing them with the tools they need to deliver exceptional care. Our Health Management System is designed to meet the evolving needs of the healthcare industry, ensuring that providers can focus on what they do best – caring for their patients.
          </p>
          <p>Our Team
          At the heart of CAREFUSION is a team of dedicated professionals who are passionate about making a difference in healthcare. Our diverse team includes software developers, healthcare experts, customer support specialists, and visionaries who share a common goal: to revolutionize healthcare through technology.

          We invite you to join us on this journey towards better healthcare. Together, we can create a healthier future.</p>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Biography;
