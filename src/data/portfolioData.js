// ============================================================
// portfolioData.js — Centralized configuration for Md Yusuf's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Rudra Deepak",
  firstName: "Rudra Deepak",
  brandName: "Rudra Deepak",
  title: "Full Stack & Python Developer",
  location: "Bhopal, India",
  phone: "+91 99396-08743",
  emails: {
    primary: "rudra763.org.in@gmail.com",
    secondary: "rudraddeepak@gmail.com",
  },
  summary:
    "Aspiring software engineer and motivated B.Tech Computer Science student with solid skills in C++, React, and Python. Passionate about building scalable full-stack applications with clean architecture and modern tech stacks.",
  resumeUrl: "/Rudra_Deepak_Resume_2026.pdf",
};

export const socialLinks = {
  github: "https://github.com/rudra-deepak",
  linkedin: "https://www.linkedin.com/in/rudra-deepak-0272723b1/",
  instagram: "https://instagram.com/yi.rudra",
};

export const heroContent = {
  greeting: "Hi, I'm Rudra Deepak",
  titleHighlight: "Full Stack & Python Developer",
  subtitle:
    "I build fast, scalable applications using C++, React, and Python (Streamlit, pandas, numpy, pytorch).",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:rudra763.org.in@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Rudra Deepak,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "", href: "" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Rudra Deepak</span>, an aspiring software AIML engineer , dedicated to crafting clean, functional, and highly scalable full-stack applications.`,
  techStack: ["Java", "Python", "C++"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 70 },
        { name: "C++", level: 85 },
        { name: "Python", level: 95 }
      ]
    },
    {
      title: "Full Stack",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", level: 88 },
        { name: "FastAPI", level: 75 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 }
      ]
    },
    {
      title: "Tools & Automation",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "MongoDB Compass", level: 85 },
        { name: "Antigravity", level: 80 },
        { name: "Codex", level: 75 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 88 },
        { name: "Algorithms", level: 85 },
        { name: "DBMS", level: 86 },
        { name: "OOP", level: 90 },
        { name: "Software Engineering", level: 84 }
      ]
    }
  ]
};

// Brand New Content Creation Data
export const contentCreation =
 {
  // badge: "Cinematic Content",
  // heading: "Creative Direction & Cinematic Edits",
  // description: "Beyond coding, I craft visual stories with premium editing, color grading, and creative pacing.",
  categories:  []
};

// Brand New Leadership Data
export const leadershipList = [
  {
    title: "Amazon Web Services (AWS) summit 2026",
    description: "Selected as an AWS Student Ambassador to represent my-self at the AWS Summit, participating in workshops, networking with industry professionals, and promoting cloud computing initiatives.",
    role: "AWS Student Ambassador",
    badge: "Volunteer"
  },
  {
    title: "Qualified exam for IIT Roorkee AIML program ",
    description: "Qualified exam for IIT Roorkee AIML program through Masai School.",
    role: "Bootcamp Graduate Program",
    badge: "Innovation"
  },
  
  
];

// Brand New Internships Data
export const internshipsList = [

  {
    organization: "Mirai School of Technology",
    role: "AIML Skill Intern",
    duration: "2 Month (Offline)",
    skills: ["Frontend Development", "Responsive Layouts", "API Testing", "Web Performance"],
    tech: ["HTML5", "CSS3", "JavaScript", "Python", "Flask", "MongoDB", "Streamlit"],
    description: "Developed and optimized web applications, implemented responsive designs, and integrated APIs to enhance user experience and performance.",
    badge: "Experience",
    github: "https://github.com/rudra-deepak/-Mirai-Internship" 
  }
  
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Creativity", icon: "🎨", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." }
];

export const projects = [
  {
    id: "foodmesh",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "CrazyPT",
    description:
        "CrazyPT — CrazyPT is an AI-powered conversational assistant built to deliver intelligent, fast, and context-aware responses. Developed using Python, Flask, Google Gemini AI, MongoDB, HTML, CSS, and JavaScript, it features secure user authentication, persistent chat history, a real-time community platform, and a modern responsive interface. The project demonstrates my expertise in full-stack development, AI integration, backend architecture, and database management.And a new update that contains community platform where users can share their experiences and insights, fostering a collaborative environment for learning and growth.",
    techTags: [
      "MongoDB",
      "FastAPI",
      "Flask",
      "html",
      "css",
      "JavaScript",
      "python",
      "gemini api",
      "Brevo",
      "Render",
      "AI",
    ],
    links: {
      github: "https://github.com/rudra-deepak/CrazyPT",
      demo: "https://crazypt.onrender.com",
    },
    isFlagship: true,
  },

  {
    id: "sentiment-analysis",
    number: "02",
    badge: "Clone Project",
    title: "Netflix Clone",
    description:
      "This project is a clone of a popular website, built using Html, Css, and JavaScript. It features user authentication, dynamic content rendering, and responsive design. The project demonstrates my ability to replicate complex web applications while maintaining clean code and efficient architecture.",
    techTags: ["Html", "Css", "JavaScript", "Netlify"],
    links: {
      githubs: [
        { label: "Frontend", url: "https://github.com/rudra-deepak/Netflix-clone" },
        { label: "Word Game", url: "https://github.com/rudra-deepak/word-guessing-game" },
      ],
      demo: "https://rudraflix-project.netlify.app/", // Update when available 
      
    },
    isFlagship: true,
  },
];

export const certificates = {
  featured: [
    {
      name: "Oracle Cloud Infrastructure 2025",
      issuer: "Oracle",
      icon: "☁️",
    },
    // {
    //   name: "Programming in Java (94%)",
    //   issuer: "NPTEL",
    //   icon: "☕",
    // },
    // {
    //   name: "C Programming & Assembly Language",
    //   issuer: "NPTEL",
    //   icon: "⚙️",
    // },
    // {
    //   name: "Technology Job Simulation",
    //   issuer: "Deloitte",
    //   icon: "💼",
    // },
    // {
    //   name: "Career Edge – IT Primer",
    //   issuer: "TCS iON",
    //   icon: "🎓",
    // },
    // {
    //   name: "Fundamentals of BI & Analytics",
    //   issuer: "Lumenore",
    //   icon: "📊",
    // },
  ],
  viewAllUrl:
    "https://drive.google.com/file/d/1ObdGWtVSx8SsfR4AcbCySSd9LFXcAs9f/view?usp=sharing",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "IES College of Technology (RGPV)",
  cgpa: "",
  graduation: "yet",
  twelfth: "12th Science – ",
  tenth: "10th CBSE – 81%",  
};

export const footerContent = {
  taglines: [
    "Software Engineering , AIML & Web Dev",
    "C++ · Python · React",
    "Full Stack Applications",
  ],
  credential: "B.Tech CSE AIML Student |",
  copyright: `© ${new Date().getFullYear()} Rudra Deepak | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
