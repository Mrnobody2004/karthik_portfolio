import { useEffect, useRef } from 'react';
import { Tilt } from './Tilt';
import '../styles/Education.css';

const Education = () => {
  const educationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const educationCards = entry.target.querySelectorAll('.education-card');
            educationCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate');
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering (CSE-AIML)",
      institution: "Vardhaman College of Engineering, Shamshabad",
      period: "2022 - Present",
      cgpa: "8.69",
      icon: "🎓"
    },
    {
      degree: "Intermediate in MPC",
      institution: "Narayana Junior College, Nallakunta",
      period: "2020 - 2022",
      cgpa: "9.3",
      icon: "🏫"
    },
    {
      degree: "Tenth Class",
      institution: "Narayana Olympaid School, Ashok Nagar",
      period: "2019 - 2020",
      cgpa: "10.0",
      icon: "📚"
    }
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic journey and achievements</p>
        
        <div className="education-grid" ref={educationRef}>
          {educationData.map((item, index) => (
            <Tilt key={index} className="education-card">
              <div className="education-icon">{item.icon}</div>
              <h3 className="education-title">{item.degree}</h3>
              <h4 className="education-subtitle">{item.institution}</h4>
              <p className="education-period">{item.period}</p>
              <div className="education-cgpa">
                <span className="cgpa-label">CGPA</span>
                <span className="cgpa-value">{item.cgpa}</span>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;