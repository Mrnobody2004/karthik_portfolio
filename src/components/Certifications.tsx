import { useEffect, useRef } from 'react';
import { Tilt } from './Tilt';
import FlipCard from './ui/FlipCard';
import '../styles/FlipCard.css';

const Certifications = () => {
  const certificationsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const publicationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Stagger animation for children if they are grid cards
            const cards = entry.target.querySelectorAll('.flip-card, .publication-card');
            cards.forEach((card, index) => {
              (card as HTMLElement).style.animationDelay = `${index * 0.15}s`;
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (certificationsRef.current) {
      observer.observe(certificationsRef.current);
    }

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    if (publicationsRef.current) {
      observer.observe(publicationsRef.current);
    }

    return () => {
      if (certificationsRef.current) {
        observer.unobserve(certificationsRef.current);
      }
      if (achievementsRef.current) {
        observer.unobserve(achievementsRef.current);
      }
      if (publicationsRef.current) {
        observer.unobserve(publicationsRef.current);
      }
    };
  }, []);

  const certifications = [
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      date: "Apr 2025",
      icon: "☁️",
      image: "/certificates/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20250419-28-irsfte.pdf",
      link: "/certificates/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20250419-28-irsfte.pdf"
    },
    {
      title: "Generative AI with LLM's",
      issuer: "Coursera",
      date: "Oct 2023",
      icon: "🤖",
      image: "/certificates/Coursera 2YPIUKJF4Y7M.pdf",
      link: "/certificates/Coursera 2YPIUKJF4Y7M.pdf"
    },
    {
      title: "Python",
      issuer: "Sololearn",
      date: "Sep 2023",
      icon: "🐍",
      image: "/certificates/PY_int_SL.pdf",
      link: "/certificates/PY_int_SL.pdf"
    },
    {
      title: "Java",
      issuer: "Sololearn",
      date: "Nov 2023",
      icon: "☕",
      image: "/certificates/Java_inter_Sololearn.pdf",
      link: "/certificates/Java_inter_Sololearn.pdf"
    },
    {
      title: "NLP Workshop",
      issuer: "Great Learning",
      date: "Dec 2024",
      icon: "🔤",
      image: "/certificates/NLP_GL.png",
      link: "/certificates/NLP_GL.png"
    },
    {
      title: "Participation Certificate",
      issuer: "College Event",
      date: "2023",
      icon: "🏅",
      image: "/certificates/III Year Participants Certificates (dragged) 3.pdf",
      link: "/certificates/III Year Participants Certificates (dragged) 3.pdf"
    }
  ];

  const publications = [
    {
      title: "RBI-LSTM Based CNN Model for Speech Emotion Recognition",
      venue: "IEEE 12th International Conference on Reliability, Infocom Technologies and Optimization (ICRITO 2025)",
      date: "September 18-19, 2025",
      status: "Published & Presented",
      icon: "🎙️",
      description: "Proposed a residual hybrid deep learning network (Res-LSTM CNN) to classify human emotional states from speech. Leveraged Librosa for acoustic feature extraction (MFCCs, Chroma, Tonnetz, Spectral Contrast). Demonstrated robust convergence and high classification accuracy on noisy speech signals."
    },
    {
      title: "Interpretable Deep Learning Framework for EEG-Based Language Decoding",
      venue: "Target: IEEE / Springer Journals & Conferences",
      date: "Advanced Preparation",
      status: "Under Review / Advanced Preparation",
      icon: "🧠",
      description: "Designed a spatial-temporal neural network combining CNNs, BiLSTMs, and self-attention mechanisms to decode natural language queries from raw EEG signals. Integrated Explainable AI (XAI) feature maps to visualize brainwave channel contributions, ensuring model transparency."
    }
  ];

  const achievements = [
    {
      title: "First Position in ML Quest",
      description: "Achieved first position by efficiently using machine learning techniques",
      event: "Festronix2k23",
      date: "Nov 2023",
      icon: "🏆"
    },
    {
      title: "Treasurer",
      description: "Serving as Treasurer for ML Verse club in CSM Department",
      event: "ML Verse Club",
      date: "2023 - Present",
      icon: "💼"
    },
    {
      title: "Public Speaking Workshop Leader",
      description: "Led public speaking workshops, boosting attendance by 40% and engaging 50+ participants",
      event: "Campus Initiative",
      date: "2023",
      icon: "🎤"
    }
  ];

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <h2 className="section-title">Publications & Achievements</h2>
        <p className="section-subtitle">Recognition of my academic research, certifications, and achievements</p>
        
        <h3 className="section-subtitle" style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>Academic Publications</h3>
        <div className="publications-grid" ref={publicationsRef}>
          {publications.map((pub, index) => (
            <Tilt key={index} className="publication-card">
              <span className="publication-status">{pub.status}</span>
              <div className="publication-header-flex">
                <div className="publication-icon" style={{ fontSize: '2rem' }}>{pub.icon}</div>
                <h4 className="publication-card-title">{pub.title}</h4>
              </div>
              <p className="publication-venue">Presented at: <strong>{pub.venue}</strong></p>
              <p className="publication-description">{pub.description}</p>
              <div className="publication-date">📅 {pub.date}</div>
            </Tilt>
          ))}
        </div>

        <h3 className="section-subtitle" style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Professional Certifications</h3>
        <div className="certifications-grid" ref={certificationsRef}>
          {certifications.map((cert, index) => (
            <FlipCard
              key={index}
              className="certification-card"
              frontContent={
                <>
                  <div className="certification-icon">{cert.icon}</div>
                  <h4 className="certification-title">{cert.title}</h4>
                  <p className="certification-issuer">Issued by {cert.issuer}</p>
                  <p className="certification-date">{cert.date}</p>
                  <small>(Click to view certificate)</small>
                </>
              }
              backContent={
                <>
                  <div className="certificate-preview">
                    {cert.image.endsWith('.pdf') ? (
                      <iframe 
                        src={`${cert.image}#view=FitH&toolbar=0&navpanes=0`} 
                        title={`${cert.title} Certificate`}
                        className="certificate-iframe"
                        loading="lazy"
                      />
                    ) : (
                      <img 
                        src={cert.image} 
                        alt={`${cert.title} Certificate`} 
                        className="certificate-image" 
                        loading="lazy"
                      />
                    )}
                  </div>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="certificate-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Certificate
                  </a>
                </>
              }
            />
          ))}
        </div>
        
        <h3 className="section-subtitle" style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Achievements & Activities</h3>
        <div className="achievements-grid" ref={achievementsRef}>
          {achievements.map((achievement, index) => (
            <FlipCard
              key={index}
              className="achievement-card"
              frontContent={
                <>
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-content">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-event">{achievement.event} | {achievement.date}</p>
                    <small>(Click for details)</small>
                  </div>
                </>
              }
              backContent={
                <div className="achievement-content">
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;