import { Code2, Cpu, Database, Terminal } from 'lucide-react';

export const personalInfo = {
    name: "Veeresh Hanni",
    title: "Full-Stack Developer & Open Source Author",
    tagline: "Creator of DBDuck. Building backends that scale. Writing code that ships.",
    email: "veereshhanni347@gmail.com",
    phone: "+91 8151858969",
    location: "Gadag, India",
    portfolio: "veereshhanni.me",
    social: {
        linkedin: "https://linkedin.com/in/veeresh-hanni-9775ba33b/",
        github: "https://github.com/veeresh-hanni",
        dbduck: "https://dbduck.org.in",
        email: "mailto:veereshhanni347@gmail.com"
    },
    professionalSummary: "Full-Stack Developer and open-source author with hands-on experience in Python, Django, React, MySQL, and MongoDB. Creator of DBDuck — a production-deployed open-source Python library providing a unified API across 6 databases. Internship experience delivering full-stack features for a real-time fintech application. CGPA 9.5 in Computer Science."
};

export const skills = [
    {
        id: 1,
        category: "Languages",
        icon: Code2,
        items: ["Python", "Java", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"]
    },
    {
        id: 2,
        category: "Frameworks & Libraries",
        icon: Terminal,
        items: ["Django", "React.js", "Django REST Framework"]
    },
    {
        id: 3,
        category: "Databases",
        icon: Database,
        items: ["MySQL", "MongoDB", "MSSQL"]
    },
    {
        id: 4,
        category: "DevOps & Tools",
        icon: Cpu,
        items: ["Git", "GitHub", "Docker", "GitHub Actions", "CI/CD", "VS Code"]
    },
    {
        id: 5,
        category: "APIs & Testing",
        icon: Terminal,
        items: ["REST APIs", "Postman", "Django ORM", "MongoDB Atlas"]
    },
    {
        id: 6,
        category: "Security",
        icon: Code2,
        items: ["AES-256 encryption", "Cryptography library", "Authentication workflows"]
    },
    {
        id: 7,
        category: "CS Fundamentals",
        icon: Database,
        items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Agile/Scrum"]
    }
];

export const projects = [
    {
        id: 1,
        title: "DBDuck - Universal Data Object Model",
        role: "Creator & Maintainer",
        tech: ["Python", "PostgreSQL", "MySQL", "MongoDB", "SQLite", "MSSQL", "Neo4j", "React", "Vercel"],
        description: "Open-source Python library providing a single unified API across 6 databases. Architected the UDOM abstraction layer, enabling seamless database-switching. Built and deployed full documentation site (dbduck.org.in). Identified and resolved 28 SQL injection vulnerabilities through security audit.",
        achievements: [
            "Published production-ready Python library eliminating up to 70% of database-specific boilerplate",
            "Designed Django-style ORM models with full relationship support",
            "Deployed documentation website with React (71 components) using Vercel",
            "Implemented GitHub Actions CI/CD pipeline for automated testing and releases",
            "Active open-source with GitHub Sponsors integration"
        ],
        period: "Jan 2026 – Present",
        links: {
            demo: "https://dbduck.org.in",
            github: "https://github.com/Veeresh-Hanni/DBDuck"
        },
        featured: true
    },
    {
        id: 2,
        title: "Pingone - AI Chat Application",
        role: "Full-Stack Developer",
        tech: ["React", "Django", "MongoDB Atlas", "PostgreSQL", "OpenAI API", "Cryptography"],
        description: "Production-deployed full-stack AI Chat Application using OpenAI's GPT API. Designed hybrid database architecture: MongoDB Atlas for AES-256 encrypted messages, Supabase (PostgreSQL) for structured user metadata. Implemented end-to-end encryption for 100% of message data at rest.",
        achievements: [
            "Real-time AI conversations with responsive React frontend",
            "Hybrid database architecture for optimal data management",
            "End-to-end AES-256 encryption using cryptography library",
            "Scalable REST APIs with Django REST Framework"
        ],
        period: "2025 – Present",
        links: {
            demo: "https://pingone.onrender.com",
            github: "https://github.com/Veeresh-Hanni/Pingone"
        },
        featured: true
    },
    {
        id: 3,
        title: "Pharmacy Dispensing System",
        role: "Backend Lead & Full-Stack Developer",
        tech: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript", "MVC Architecture"],
        description: "Comprehensive pharmacy resource planning system managing 500+ drug records. Complete CRUD operations with Django ORM, authentication workflows, and MVC architecture. Designed frontend interfaces improving usability for pharmacy staff workflows.",
        achievements: [
            "Managed 500+ drug records with full CRUD operations",
            "Implemented Django ORM queries replacing raw SQL",
            "Role-Based Access Control (RBAC) implementation",
            "Delivered within 5-month timeline"
        ],
        period: "Dec 2024 – Apr 2025",
        links: {
            demo: null,
            github: "https://github.com/Veeresh-Hanni/pms"
        },
        featured: false
    },
    {
        id: 4,
        title: "IPO Web Application",
        role: "SDE Intern – Full-Stack Developer",
        tech: ["React.js", "Django", "SQL", "REST APIs", "Agile"],
        description: "Real-time IPO tracking application built during Bluestock Fintech internship. Contributed full-stack features, optimizing API response time by ~20% through targeted query optimization. Collaborated in Agile team environment.",
        achievements: [
            "Built 4+ full-stack features for real-time IPO application",
            "Reduced average API response time by ~20% (450ms → 310ms)",
            "Implemented SQL CRUD operations for IPO datasets",
            "Collaborated in code reviews and API design discussions"
        ],
        period: "Apr – May 2025",
        links: {
            demo: null,
            github: null
        },
        featured: false
    }
];

export const experience = [
    {
        id: 1,
        role: "Creator & Maintainer",
        company: "DBDuck - Open Source",
        period: "Jan 2026 – Present",
        location: "Remote",
        achievements: [
            "Architected and published DBDuck — a Python library providing unified API across 6 databases, eliminating up to 70% of database-specific boilerplate.",
            "Designed the Universal Data Object Model (UDOM) abstraction layer, enabling seamless database-switching without modifying core business logic.",
            "Built and deployed full documentation website (dbduck.org.in) using React and Vercel with SEO optimization and Google Search Console integration.",
            "Identified and resolved 28 SQL injection vulnerabilities through full security audit (bandit), confirmed closed in v0.3.0.",
            "Implemented Django-style ORM models with full relationship support, CLI tooling, and GitHub Actions CI/CD pipeline."
        ]
    },
    {
        id: 2,
        role: "Software Development Engineer Intern",
        company: "Bluestock Fintech",
        period: "April 2025 – May 2025",
        location: "Remote",
        achievements: [
            "Built 4+ full-stack features for a real-time IPO Web Application using React.js and Django.",
            "Reduced average API response time by ~20% (from ~450ms to ~310ms) through targeted query optimization.",
            "Implemented SQL CRUD operations for IPO-related datasets and refactored 3 high-traffic REST API endpoints.",
            "Collaborated in Agile team environment, contributing to code reviews and API design discussions."
        ]
    }
];

export const education = [
    {
        id: 1,
        degree: "Diploma in Computer Science & Engineering",
        school: "Government Polytechnic, Gadag",
        period: "Aug 2022 – Apr 2025",
        details: "CGPA: 9.5 / 10"
    },
    {
        id: 2,
        degree: "Secondary School Leaving Certificate (SSLC)",
        school: "SJBVP Hosahalli, Gadag",
        period: "2021 – 2022",
        details: "Percentage: 96.48%"
    }
];

export const certifications = [
    {
        id: 1,
        title: "Scaler Academy",
        description: "Java & Object-Oriented Programming"
    },
    {
        id: 2,
        title: "Algorithms365",
        description: "SDE / Full-Stack Development (Python, DSA, OOP, SQL/MySQL, MongoDB, Django, React)"
    },
    {
        id: 3,
        title: "Infosys Springboard",
        description: "HTML, CSS, JavaScript"
    },
    {
        id: 4,
        title: "HackerRank Skill Certificates",
        description: "Python (Gold Badge), SQL (Gold Badge)"
    }
];

export const achievements = [
    {
        id: 1,
        title: "Team Leadership",
        description: "Led a team of 4 members in academic projects, consistently delivering features on schedule."
    },
    {
        id: 2,
        title: "Hackathon Participation",
        description: "Participated in Odoo Hackathon 2025 and Google Baseline Tooling Hackathon."
    },
    {
        id: 3,
        title: "Open Source Contribution",
        description: "Published and maintained DBDuck (v0.3.0) with full security audit, documentation site, and GitHub Sponsors integration."
    }
];