// src/data/projectData.js
export const projects = [


  {
    id: 1,
    title: "CareerSync AI Platform",
    description: "An intelligent job-resume matching system that synchronizes resumes with job requirements seamlessly. The platform summarizes lengthy texts, vectorizes them using Hugging Face's Sentence Transformers, calculates a match score based on cosine similarity combined with rule-based skill matching, and provides personalized recommendations for resume improvement.",
    technologies: [
      "React", 
      "TypeScript", 
      "Node.js", 
      "Express.js", 
      "MongoDB", 
      "Hugging Face Inference API", 
      "jsPDF"
    ],
    links: {
      github: "https://github.com/mazhar75/CareerSync-Backend",
      demo: "https://career-sync-murex.vercel.app/"
    }
  },
  

  {
    id: 2,
    title: "Course Management System",
    description: "This project includes functionalities such as profile creation, course registration, teacher assignment, and student views.",
    technologies: ["HTML", "CSS", "Java Servlet", "MySQL", "Apache Tomcat Server"],
    links: {
      github: "https://github.com/mazhar75/UniversityCourseManagementSystem",
      demo: "https://www.youtube.com/watch?v=j6jQyXXqHB8"
    }
  },
  {
    id: 3,
    title: "Automated Mess System App",
    icon: "📱",
    description: "An Android application designed to simplify and automate mess calculations using Flutter and MongoDB.",
    technologies: ["Flutter", "MongoDB"],
    links: {
      github: "https://github.com/mazhar75/Flutter",
      demo: "https://www.youtube.com/watch?v=8lhPqSfN3dw"
    }
  
  },
  {
    id: 4,
    title: "Sudoku Solver",
    description: "It is a simple desktop application where users can solve Sudoku puzzles level by level. All levels are initially locked except for the first. After solving each level, the next level unlocks.",
    technologies: ["C++", "Qt Framework"],
    links: {
      github: "https://github.com/mazhar75/Project150-Sudoku"
    }
  },
  {
    id: 5,
    title: "TuitionPlatform",
    description: "A very simple DB project that allows students or parents to post their requirements for teachers. Teachers can view these job-like posts, apply, and be contacted through messaging. Additionally, teachers can upload 4-5 minute video clips of their teaching.",
    technologies: ["HTML", "CSS", "Bootstrap", "JS", "PHP", "MySQL"],
    links: {
     github: "https://github.com/mazhar75/TuitionPlatform"
    },
   
  },
  {
    id: 6,
    title: "Machine Learning Projects",
    summary: "A collection of my machine learning practice projects.",
    description: "These projects include Car Price Prediction, Stock Price Prediction, and Chunk Prediction. Each project covers data preprocessing, model training, and evaluation.",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    links: {
      github: "https://github.com/mazhar75/MachineLearning",
      demo: "https://www.youtube.com/watch?v=dk7IxmtCImY&t=56s"
    }
    
  }
];
