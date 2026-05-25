import { useEffect, useRef } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timelineItems = entry.target.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);
  
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">My journey in the tech industry</p>
        
        <div className="timeline" ref={timelineRef}>
          <div className="timeline-item">
            <div className="timeline-card featured">
              <h3 className="timeline-title">Machine Learning Data Engineer Intern</h3>
              <h4 className="timeline-subtitle">Technizee Pvt Ltd</h4>
              
              <div className="timeline-meta">
                <span>May 2023 - Present</span>
                <span>Remote</span>
              </div>
              
              <p className="timeline-description">
                Contributing to a production-scale AI-powered Virtual Try-On (VITON) system. Designed data preprocessing pipelines using the Segment Anything Model (SAM) and human parsing networks for precise clothing isolation and multi-layer semantic masking. Developed pose-estimation pipelines for keypoint coordinate tracking to guide geometric warping transformations. Built scalable REST API services using FastAPI and Docker to containerize and serve deep learning inference models, optimizing GPU-based batch image processing pipelines.
              </p>
              
              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">PyTorch</span>
                <span className="tag">Computer Vision</span>
                <span className="tag">FastAPI</span>
                <span className="tag">Docker</span>
                <span className="tag">Segment Anything (SAM)</span>
                <span className="tag">GANs</span>
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-card">
              <h3 className="timeline-title">Java Development Intern</h3>
              <h4 className="timeline-subtitle">Cognifyz Technologies</h4>
              
              <div className="timeline-meta">
                <span>Sep - Oct 2023</span>
                <span>Online</span>
              </div>
              
              <p className="timeline-description">
                Worked on developing a Java-based file encryption tool utilizing the Caesar cipher algorithm. The tool successfully secured files with 100% reliability, providing a robust solution for basic file security needs. This internship enhanced my Java programming skills and deepened my understanding of encryption principles and secure coding practices.
              </p>
              
              <div className="tags">
                <span className="tag">Java</span>
                <span className="tag">Encryption</span>
                <span className="tag">Security</span>
                <span className="tag">File Systems</span>
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-card">
              <h3 className="timeline-title">Machine Learning Intern</h3>
              <h4 className="timeline-subtitle">Slash Mark IT Solutions</h4>
              
              <div className="timeline-meta">
                <span>May - Jul 2023</span>
                <span>Online</span>
              </div>
              
              <p className="timeline-description">
                Focused on optimizing machine learning models through advanced tuning techniques and data augmentation strategies. My work resulted in a 40% reduction in model training time while simultaneously boosting accuracy by 15%. I collaborated with a team of data scientists to implement these improvements across multiple projects, gaining valuable experience in real-world ML applications and team-based development workflows.
              </p>
              
              <div className="tags">
                <span className="tag">Machine Learning</span>
                <span className="tag">Model Optimization</span>
                <span className="tag">Data Augmentation</span>
                <span className="tag">Team Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;