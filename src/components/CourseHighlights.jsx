import React from 'react';
import './CourseHighlights.css';

const CourseHighlights = () => {
  const highlights = [
    { title: 'Learn The Latest Skills', description: 'Contrary to popular belief, Lorem Ipsum is not random text.' },
    { title: 'Get Ready For a Career', description: 'Contrary to popular belief, Lorem Ipsum is not random text.' },
    { title: 'Earn a Certificate', description: 'Contrary to popular belief, Lorem Ipsum is not random text.' },
  ];

  return (
    <section className="highlights">
      {highlights.map((highlight, index) => (
        <div key={index} className="highlight-card">
          <h3>{highlight.title}</h3>
          <p>{highlight.description}</p>
        </div>
      ))}
    </section>
  );
};

export default CourseHighlights;
