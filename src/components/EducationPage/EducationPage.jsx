import React from 'react';
import styles from './EducationPage.module.css';

const EducationPage = () => {
  // const navigate = useNavigate(); // No longer needed for close button

  const educationData = [
    {
      institution: "Shahjalal University of Science and Technology",
      degree: "Bachelor of Computer Science and Engineering",
      result: "CGPA: 3.39 out of 4.00",
      year: "2020 to 2025 (mid)"
    },
    {
      institution: "Murari Chand College",
      degree: "Higher Secondary Certificate Examination",
      result: "GPA: 5.0 out of 5.0",
      year: "2017 to 2019"
    },
    {
      institution: "Moulvibazar Govt. High School",
      degree: "Secondary School Certificate Examination",
      result: "GPA: 5.0 out of 5.0 and Got Scholarship",
      year: "2015 to 2016"
    },
    {
      institution: "Moulvibazar Govt. High School",
      degree: "Junior School Certificate Examination",
      result: "GPA: 5.0 out of 5.0",
      year: "2014"
    },
    {
      institution: "Shankarpasha Govt. Primary School",
      degree: "Primary School Certificate Examination",
      result: "GPA: 5.0 out of 5.0 and Got Scholarship",
      year: "2011"
    }
  ];

  return (
    <section className={styles.educationSection}>
      <h1 className={styles.title}>My Education</h1>
      <div className={styles.cardContainer}>
        {educationData.map((item, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.institution}>{item.institution}</h2>
            <p className={styles.degree}>{item.degree}</p>
            <p className={styles.result}>{item.result}</p>
            <span className={styles.yearBadge}>{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationPage;
