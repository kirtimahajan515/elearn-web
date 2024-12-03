import React from 'react';

import './App.css';
import Hero from './components/Hero';
import CourseHighlights from './components/CourseHighlights';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TrackCard from './components/TrackCard';
import Card from './components/Card';
import PremiumLearningExperience from './components/PremiumLearningExperience';
import Section from './components/Section';
import { PiCraneTower } from 'react-icons/pi';


const App = () => {
  const footerSections = [
    {
      title: "Company",
      items: [
        { text: "About Us", link: "/about" },
        { text: "Careers", link: "/careers" },
        { text: "Blog", link: "/blog" },
        { text: "Contact Us", link: "/contact" },
      ],
    },
    {
      title: "Resources",
      items: [
        { text: "Help Center", link: "/help" },
        { text: "Privacy Policy", link: "/privacy" },
        { text: "Terms of Service", link: "/terms" },
      ],
    },
    {
      title: "Follow Us",
      items: [
        { text: "Facebook", link: "https://facebook.com" },
        { text: "Twitter", link: "https://twitter.com" },
        { text: "Instagram", link: "https://instagram.com" },
        { text: "LinkedIn", link: "https://linkedin.com" },
      ],
    },
  ];


  const trackData = [
    {
      image: "/src/assets/images/yougteacher.png", // Replace with actual image path
      name: "Matthew E. McNatt",
      title: "Professor @George Brown College",
      description:
        "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
      subject: "Engineering physics",
      socials: [
        { name: "Instagram", icon: "/src/assets/images/instagram.png", link: "https://instagram.com" },
        { name: "LinkedIn", icon: "/src/assets/images/linkedin.png", link: "https://linkedin.com" },
      ],
    },
    {
      image: "/src/assets/images/image 7.png",
      name: "Tracy D. Wright",
      title: "Professor @George Brown College",
      description:
        "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
      subject: "Engineering physics",
      socials: [
        { name: "Instagram", icon: "/src/assets/images/instagram.png", link: "https://instagram.com" },
        { name: "LinkedIn", icon: "/src/assets/images/linkedin.png", link: "https://linkedin.com" },
      ],
    },
    {
      image: "/src/assets/images/Group 339.png",
      name: "Cynthia A. Nelson",
      title: "Professor @George Brown College",
      description:
        "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
      subject: "Engineering physics",
      socials: [
        { name: "Instagram", icon: "/src/assets/images/instagram.png", link: "https://instagram.com" },
        { name: "LinkedIn", icon: "/src/assets/images/linkedin.png", link: "https://linkedin.com" },
      ],
    },
  ];


  const courses = [
    {
      image: "/src/assets/images/image 5.png",
      data: {
        title: "UI/UX Design for Beginners",
        price: 98,
        duration: "22hr 30min",
        courses: 34,
        sales: 250,
        rating: 5,
      },
    },
    {
      image: "/src/assets/images/image 6.png",
      data: {
        title: "UI/UX Design for Beginners",
        price: 98,
        duration: "22hr 30min",
        courses: 34,
        sales: 250,
        rating: 5,
      },
    },
    {
      image: "/src/assets/images/image 7.png",
      data: {
        title: "UI/UX Design for Beginners",
        price: 98,
        duration: "22hr 30min",
        courses: 34,
        sales: 250,
        rating: 5,
      },
    },
  ];

  const cardsInfo = [
    {
      icon: '🖥️',
      title: 'Learn The Latest Skills',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.',
    },
    {
      icon: '✏️',
      title: 'Get Ready For a Career',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.',
    },
    {
      icon: '🎓',
      title: 'Earn a Certificate',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.',
    },
  ];


  
  return (
  
    <div className="app">
      <Navbar />
        <Hero />

    
      
      <div className='cardsidebyside'>

    
        <div className='bichmaykaro'>

        <h2>Our Tracks</h2>
      <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
      
      <Section cardsInfo={cardsInfo} />
      </div>
    
      {/* <PopularCourses /> */}
      {/* <CourseCard/> */}
      
      <div className='sidebyside'>
      <Card />
      <Card />
      <Card/>    
      </div>
    

        <PremiumLearningExperience/>


      <Testimonials />
      <div>
      <center>
        
        <h2>Our Tracks</h2>
      <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </center>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {trackData.map((data, index) => (
          <TrackCard
            key={index}
            image={data.image}
            name={data.name}
            title={data.title}
            description={data.description}
            subject={data.subject}
            socials={data.socials}
          />
        ))}
      </div>
    </div>

      <Footer sections={footerSections} />

    </div>
    
  
  );
};

export default App;
