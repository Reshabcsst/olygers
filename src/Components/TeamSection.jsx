import React, { useRef } from "react";
import img1 from '../Assets/fi.png';
import img2 from '../Assets/si.png';
import img3 from '../Assets/ti.png';
import { useDraggable } from "react-use-draggable-scroll";
import { MdPlayArrow } from "react-icons/md";

const teamMembers = [
  {
    name: "Animesh Chakraborty",
    position: "Director",
    image: img1
  },
  {
    name: "Subhra Chatterjee",
    position: "Accountant",
    image: img2
  },
  {
    name: "Sandeep Barua",
    position: "Sales & Network",
    image: img3
  },
  {
    name: "Animesh Chakraborty",
    position: "Director",
    image: img1
  },
  {
    name: "Subhra Chatterjee",
    position: "Accountant",
    image: img2
  },
  {
    name: "Sandeep Barua",
    position: "Sales & Network",
    image: img3
  },
  {
    name: "Animesh Chakraborty",
    position: "Director",
    image: img1
  },
  {
    name: "Subhra Chatterjee",
    position: "Accountant",
    image: img2
  },
  {
    name: "Sandeep Barua",
    position: "Sales & Network",
    image: img3
  }
];

const TeamSection = () => {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true, // activate rubber band effect
  });


  return (
    <div className="team-section">
      <div className="hd">
        <div className="team-header">
          <button className="our-team-btn">Our team</button>
          <h2>Meet Our Expert Logistics team</h2>
        </div>
        <div className="team-arrows">
          <span className="arrow-left">&larr;</span>
          <span className="arrow-right">&rarr;</span>
        </div>
      </div>

      <div {...events} ref={ref} className="team-cards-container">
        {teamMembers.map((member, index) => (
          <div key={index} style={{ backgroundImage: `url(${member.image})` }}
            className="team-card">
            <div className="team-info">
              <h4>{member.name}</h4>
              <p>{member.position}</p>
              <span className="arrow1"><MdPlayArrow /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;