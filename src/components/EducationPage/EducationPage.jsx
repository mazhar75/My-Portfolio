import React from 'react';
import styles from './EducationPage.module.css';
import { useNavigate } from 'react-router-dom'; 

const EducationPage = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  const educationData = [
    {
      institution: "Shahjalal University of Science and Technology",
      degree: "Bachelor of Computer Science and Engineering",
      result: "CGPA: 3.36 (Up to 6th semester)",
      year: "Year: 2020 to Present"
    },
    {
      institution: "Murari Chand College",
      degree: "Higher Secondary Certificate Examination",
      result: "GPA: 5.0 out of 5.0",
      year: "Year: 2017 to 2019"
    },
    {
      institution: "Moulvibazar Govt. High School",
      degree: "Secondary School Certificate Examination",
      result: "GPA: 5.0 out of 5.0 and Got Scholarship",
      year: "Year: 2015 to 2016"
    },
    {
      institution: "Moulvibazar Govt. High School",
      degree: "Junior School Certificate Examination",
      result: "GPA: 5.0 out of 5.0",
      year: "Year: 2014"
    },
    {
      institution: "Shankarpasha Govt. Primary School",
      degree: "Primary School Certificate Examination",
      result: "GPA: 5.0 out of 5.0 and Got Scholarship",
      year: "Year: 2011"
    }
  ];

  return (
    <section className={styles.educationSection}>
      {/* Close Button to navigate back to Home */}
      <button
        className={styles.closeButton}
        onClick={() => navigate('/')} // Navigate to home page
      >
        X
      </button>

      <h1 className={styles.title}>My Education</h1>
      <div className={styles.cardContainer}>
        {educationData.map((item, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.institution}>{item.institution}</h2>
            <p className={styles.degree}>{item.degree}</p>
            <p className={styles.result}>{item.result}</p>
            <p className={styles.year}>{item.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationPage;
