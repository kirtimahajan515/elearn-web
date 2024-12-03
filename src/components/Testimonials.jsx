import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Teachings of the great explore of truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, pleasure itself.",
      name: "Finlay Kirk",
      role: "Web Developer",
      avatar: "/src/assets/images/Ellipse 34.png", // Replace with the actual avatar URL
    },
    {
      text: "Complete account of the system and expound the actual. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
      name: "Dannette P. Cervantes",
      role: "Web Design",
      avatar: "/src/assets/images/Ellipse 34 (1).png", // Replace with the actual avatar URL
    },
    {
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      name: "Clara R. Altman",
      role: "UI/UX Design",
      avatar: "/src/assets/images/Ellipse 34 (2).png", // Replace with the actual avatar URL
    },
  ];

  return (
    <div style={{ textAlign: "center", padding: "32px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "8px" }}>What Student's Say</h2>
      <p style={{ fontSize: "14px", color: "#888", marginBottom: "24px" }}>
        Lorem Ipsum is simply dummy text of the printing.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
      {/* Optional navigation dots */}
      <div style={{ marginTop: "16px" }}>
        <span style={{ padding: "0 6px", fontSize: "20px", cursor: "pointer" }}>●</span>
        <span style={{ padding: "0 6px", fontSize: "20px", cursor: "pointer", color: "#ccc" }}>●</span>
        <span style={{ padding: "0 6px", fontSize: "20px", cursor: "pointer", color: "#ccc" }}>●</span>
      </div>
    </div>
  );
};

export default Testimonials;
