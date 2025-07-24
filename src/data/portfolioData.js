// src/data/portfolioData.js
export const heroData = {
  name: "Md. Mazharul Islam",
  subtitle: "Problem Solver | Golang Enthusiast | RAG Enthusiast",
  description: "Recently graduated technology enthusiast and problem solver with a strong foundation in competitive programming, project development, and research. Currently exploring Retrieval-Augmented Generation (RAG) systems.",
  ctaText: "Get in Touch"
};

export const cards = [
  {
    id: 2,
    title: "Skills",
    icon: "🛠️",
    summary: "Languages, Technologies, Tools",
    details: {
      Languages: ["Go", "Java", "SQL", "HTML", "JavaScript"],
      Technologies: ["Git", "GitHub", "MySQL", "MongoDB", "Docker", "AWS (basic)", "CI/CD pipeline", "Retrieval-Augmented Generation (RAG)"],
      FamiliarWith: ["React.js", "Node.js", "Express", "TypeScript", "BERT", "JWT", "CORS", "Postman"]
    }
  },
  {
    id: 3,
    title: "Education",
    icon: "🎓",
    summary: "SUST, Murari Chand College, Moulvibazar High, Shankarpasha Primary",
    details: {
      University: "Shahjalal University of Science and Technology (SUST)",
      Degree: "BSc in Computer Science and Engineering (Recently Graduated)",
      CGPA: "3.39 (2020–2025)",
      College: "Murari Chand College, HSC, GPA: 5.0 (2017–2019)",
      HighSchool: "Moulvibazar Govt. High School, SSC, GPA: 5.0 (2015–2016)",
      JuniorSchool: "Moulvibazar Govt. High School, JSC, GPA: 5.0 (2014)",
      Primary: "Shankarpasha Govt. Primary School, PSC, GPA: 5.0 (2011)"
    }
  },
  {
    id: 4,
    title: "Competitive Programming",
    icon: "💻",
    summary: "2000+ problems solved, Codeforces, LeetCode, CodeChef, AtCoder",
    details: {
      Codeforces: {
        handle: "petuk75",
        maxRating: "Specialist (1500+)",
        problemsSolved: "1200+",
        highestRanking: "Top 800",
        profileLink: "https://codeforces.com/profile/petuk75"
      },
      AtCoder: {
        handle: "petuk",
        maxRating: "928",
        problemsSolved: "400+",
        highestRanking: "Top 1100",
        profileLink: "https://atcoder.jp/users/petuk"
      },
      CodeChef: {
        handle: "petuk0mazhar",
        maxRating: "4-star",
        problemsSolved: "300+",
        highestRanking: "Top 500",
        profileLink: "https://www.codechef.com/users/petuk0mazhar"
      },
      LeetCode: {
        handle: "petuk",
        maxRating: "Top 10% globally",
        problemsSolved: "180+",
        highestRanking: "Top 10%",
        profileLink: "https://leetcode.com/u/petuk/"
      },
      Achievements: [
        "Top 40, Cefalo IUPC SUST 2023",
        "ICPC selection contests (2022, 2023)",
        "Google Kickstart (Top 2000 globally)",
        "Meta Hacker Cup Round 2 (2989 in 2022, 2484 in 2023)"
      ]
    }
  },
  {
    id: 5,
    title: "Projects",
    icon: "🚀",
    summary: "AI, Backend, Web, and API projects",
    details: {
      "CareerSync": "AI-Powered Job Matching and Resume Analysis. [GitHub](https://github.com/mazhar75/CareerSync-Backend). Tech: Node.js, Express, React.js, TypeScript, MongoDB, Render, Vercel, Hugging Face API.",
      "mongo-rest-api": "RESTful API in Go with MongoDB, JWT authentication, CORS, CRUD. [GitHub](https://github.com/mazhar75/mongo-rest-api). Tech: Golang, JWT, CORS, MongoDB, Postman.",
      "Course Management System": "Role-based access, course registration, dashboards. [GitHub](https://github.com/mazhar75/UniversityCourseManagementSystem). Tech: HTML, CSS, Java Servlet, MySQL, Apache Tomcat."
    }
  },
  {
    id: 7,
    title: "Leadership & Volunteering",
    icon: "🤝",
    summary: "Community, mentoring, and leadership roles",
    details: {
      Volunteering: [
        "Associate Member: United Nations Youth And Students Association of Bangladesh, Jan 2024 to Jan 2025",
        "General Member: CSE Society, SUST, 2020 to Present",
        "CP Mentor at Best Golang Community Ever Discord Server"
      ],
      Leadership: [
        "Former vice captain of school cricket team (Day shift), 2016-2017"
      ]
    }
  },
  {
    id: 8,
    title: "Research Interests",
    icon: "🔬",
    summary: "AI, NLP, Backend, and more",
    details: {
      Interests: [
        "Artificial Intelligence",
        "Natural Language Processing",
        "Backend Engineering",
        "Machine Learning",
        "Retrieval-Augmented Generation (RAG)",
        "Cloud Developer"
      ],
      Publications: [
        "Conference Paper: https://ieeexplore.ieee.org/abstract/document/11013377"
      ]
    }
  }
];