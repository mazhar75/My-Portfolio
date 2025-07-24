# Portfolio Website

Welcome to my portfolio repository! This project is a personal portfolio website built with **React** and is hosted on **Vercel**. The site showcases my work, projects, and skills in web development, competitive programming, and research.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [AI Assistant (MIN)](#ai-assistant-min)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Demo

Check out the live site hosted on Vercel:  
[https://mazharul.vercel.app](https://mazharul.vercel.app/)

---

## Features

- **Responsive Design:** Optimized for both desktop and mobile views.
- **Interactive UI:** Smooth transitions and engaging animations.
- **Project Showcase:** Detailed pages for individual projects with images and descriptions.
- **Contact Form:** Easy-to-use form to reach out via email.
- **Clean & Modern Design:** Aesthetically pleasing and user-friendly layout.
- **AI Assistant (MIN):** Floating chat assistant for Q&A about Mazharul Islam, available on every page.
- **Skills Highlight Bar:** Horizontal bar above Competitive Programming, emphasizing key skills (especially Golang).
- **Competitive Programming Card:** Click to view detailed platform stats, rankings, and achievements in a modern modal.

---

## Technologies Used

- **React:** Front-end library for building user interfaces.
- **Vercel:** Platform for hosting and deploying the application.
- **CSS Modules:** Modular and maintainable styling.
- **react-icons:** Icon library for modern UI.

---

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mazhar75/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **Open your browser:**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the website locally.

---

## Project Structure

Here's an overview of the main directories and files in this project:

```
My-Portfolio/
├── public/             # Static files and assets
├── src/                # Source code
│   ├── components/     # Reusable components (cards, modals, AI assistant, etc.)
│   │   ├── Card/
│   │   ├── CardDetails/
│   │   ├── CompetitiveProgrammingBar/
│   │   ├── MinAssistant/   # AI Assistant (MIN)
│   │   └── ...
│   ├── data/           # Data for cards and projects
│   ├── App.js          # Main application component
│   └── index.js        # Entry point of the application
├── .gitignore          # Files and directories to ignore in Git
├── package.json        # Project metadata and dependencies
└── README.md           # This file
```

---

## AI Assistant (MIN)

- Click the robot button at the bottom right to open the AI assistant chat.
- Ask questions about Mazharul Islam, skills, projects, or experience.
- The assistant uses in-memory chat and will POST to `/api/min-chat` (backend integration required for live answers).
- Chat history resets when closed.

---

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue. You can also submit a pull request for any improvements or fixes.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to your branch: `git push origin feature/your-feature`.
5. Open a pull request.

---

## Notes

- The default branch is **master** (not main).
- For any issues, please contact [mazharulnihadmd@gmail.com](mailto:mazharulnihadmd@gmail.com).
