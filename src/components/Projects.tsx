import { useEffect, useRef } from 'react';
import { Tilt } from './Tilt';
import '../styles/Projects.css';

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectCards = entry.target.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "Research Paper Summarizer using Google API",
      category: "Generative AI & RAG",
      date: "Feb 2023",
      description: "Engineered a Retrieval-Augmented Generation (RAG) pipeline for semantic academic research summarization. Implemented intelligent PDF parsers with sliding window chunking to generate text embeddings. Utilized FAISS and ChromaDB for vector similarity indexing, returning relevant context to LLM endpoints to answer complex academic queries and summarize findings while reducing hallucination rates.",
      technologies: ["Python", "Gemini API", "ChromaDB", "FAISS", "SentenceTransformers", "RAG", "StreamLit"],
      metrics: "40% reduction in review time, optimized PDF chunking"
    },
    {
      title: "Text to SQL Query Using GPT NEO",
      category: "NLP & Transformer Models",
      date: "Jan 2023",
      description: "Developed a natural language database query system using the GPT-Neo transformer model. Engineered context-aware schema templates enabling the model to understand multi-table relational databases and complex JOIN conditions. Built prompt validation wrappers to perform syntax checks and query corrections on generated SQL queries.",
      technologies: ["Python", "GPT-Neo", "Hugging Face", "SQL", "Schema Parsing"],
      metrics: "90% accuracy, 50% reduction in manual SQL writing"
    },
    {
      title: "NLP-Driven Biomedical Text Analysis",
      category: "Named Entity Recognition (NER)",
      date: "Sept 2023",
      description: "Created a clinical information extraction system using spaCy pipelines and custom Named Entity Recognition (NER) models. Specialized the pipeline to recognize diseases, symptoms, and drug interactions from biomedical datasets. Explored transformer-based domain adaptation using BioBERT to capture complex medical language syntax.",
      technologies: ["Python", "spaCy", "BioBERT", "NLP", "Named Entity Recognition", "Transformers"],
      metrics: "85% F1-score accuracy, 30% faster entity extraction"
    },
    {
      title: "Facial Emotion Detection Using Deep Learning",
      category: "Computer Vision",
      date: "Feb 2023",
      description: "Designed and implemented a convolutional neural network (CNN) based emotion detection system that can identify seven different facial expressions from images and video streams. Using TensorFlow and Keras, the model was trained on over 10,000 facial images and achieved 92% accuracy in emotion classification.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
      metrics: "92% accuracy on 10K+ samples"
    },
    {
      title: "Credit Card Fraud Detection Using Random Forest",
      category: "Classical Machine Learning",
      date: "July 2023",
      description: "Created a machine learning model using Random Forest algorithm to detect fraudulent credit card transactions. The system analyzes transaction patterns and flags suspicious activities with high precision, reducing false positives by 30% compared to traditional rule-based systems.",
      technologies: ["Python", "Random Forest", "Machine Learning", "Data Analysis"],
      metrics: "98% precision, 30% reduction in false positives"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Showcasing my technical expertise through real-world applications</p>
        
        <div className="projects-grid" ref={projectsRef}>
          {projects.map((project, index) => (
            <Tilt key={index} className="project-card">
              <div className="project-header">
                {project.category}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-date">{project.date}</div>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="project-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-metrics">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>{project.metrics}</span>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;