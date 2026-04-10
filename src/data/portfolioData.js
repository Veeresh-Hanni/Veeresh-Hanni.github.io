import { Code2, Cpu, Database, Terminal, Shield, BookOpen } from 'lucide-react';

export const personalInfo = {
    name: "Veeresh Hanni",
    title: "Full-Stack Developer & Open Source Author",
    tagline: "Creator of DBDuck — a unified Python API across 6 databases.\nBuilding backends that scale. Writing code that ships.",
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
    professionalSummary: "Full-Stack Developer and open-source author with hands-on experience in Python, Django, React, MySQL, and MongoDB. Creator of DBDuck — a production-deployed open-source Python library providing a unified API across 6 databases (PostgreSQL, MySQL, SQLite, MSSQL, MongoDB, Neo4j) — with a live documentation site at dbduck.org.in. Internship experience delivering full-stack features for a real-time fintech application. CGPA 9.5 in Computer Science with a strong foundation in DSA, REST APIs, and Docker-based deployments. Seeking a Software Developer / Full Stack Developer role to build scalable backend systems and production-grade web applications.",
    stats: [
        { label: "Databases Unified", value: "6" },
        { label: "Boilerplate Reduced", value: "70%" },
        { label: "CGPA", value: "9.5" },
        { label: "Security Fixes", value: "28" }
    ]
};

export const skills = [
    {
        id: 1,
        category: "Languages",
        icon: Code2,
        items: ["Python", "JavaScript (ES6+)", "Java", "SQL", "HTML5", "CSS3"]
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
        items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "MSSQL"]
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
        icon: Shield,
        items: ["AES-256 encryption", "Cryptography library", "Authentication workflows"]
    },
    {
        id: 7,
        category: "CS Fundamentals",
        icon: BookOpen,
        items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Agile/Scrum"]
    }
];

export const projects = [
    {
        id: 1,
        title: "DBDuck",
        subtitle: "Universal Data Object Model (UDOM)",
        role: "Creator & Maintainer",
        tech: ["Python", "PostgreSQL", "MySQL", "MongoDB", "SQLite", "MSSQL", "Neo4j", "React", "Vercel"],
        description: "Open-source Python library providing a single unified API across 6 databases, eliminating up to 70% of database-specific boilerplate code. Features Django-style ORM models with full relationship support, CLI tooling, and automated CI/CD.",
        achievements: [
            "Architected UDOM abstraction layer enabling seamless database-switching without modifying core business logic",
            "Deployed documentation website (dbduck.org.in) using React (71 components) with SEO optimization",
            "Identified and resolved 28 SQL injection vulnerabilities through full security audit (bandit)",
            "Implemented GitHub Actions CI/CD pipeline for automated testing and releases",
            "Active open-source with GitHub Sponsors integration"
        ],
        period: "Jan 2026 – Present",
        links: {
            demo: "https://dbduck.org.in",
            github: "https://github.com/Veeresh-Hanni/DBDuck"
        },
        featured: true,
        color: "teal"
    },
    {
        id: 2,
        title: "Pingone",
        subtitle: "AI Chat Application",
        role: "Full-Stack Developer",
        tech: ["React", "Django", "MongoDB Atlas", "PostgreSQL", "OpenAI API", "Cryptography"],
        description: "Production-deployed full-stack AI Chat Application using OpenAI's GPT API, with a hybrid database architecture and end-to-end encrypted chat storage securing 100% of message data at rest.",
        achievements: [
            "Real-time AI conversations with responsive React frontend and Django backend",
            "Hybrid database: MongoDB Atlas for AES-256 encrypted messages, Supabase (PostgreSQL) for metadata",
            "End-to-end encrypted chat storage using Python's cryptography library",
            "Scalable REST APIs with Django REST Framework"
        ],
        period: "2025 – Present",
        links: {
            demo: "https://pingone.onrender.com",
            github: "https://github.com/Veeresh-Hanni/Pingone"
        },
        featured: true,
        color: "violet"
    },
    {
        id: 3,
        title: "Pharmacy Dispensing System",
        subtitle: "Enterprise Resource Planning",
        role: "Backend Lead & Full-Stack Developer",
        tech: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript", "MVC Architecture"],
        description: "Full pharmacy dispensing system managing 500+ drug records, with complete CRUD operations, Django ORM models, authentication workflows, and MVC architecture.",
        achievements: [
            "Managed 500+ drug records with full CRUD operations",
            "Django ORM queries replacing raw SQL for improved maintainability",
            "Role-Based Access Control (RBAC) implementation",
            "Delivered within 5-month timeline"
        ],
        period: "Dec 2024 – Apr 2025",
        links: {
            demo: null,
            github: "https://github.com/Veeresh-Hanni/pms"
        },
        featured: false,
        color: "amber"
    },
    {
        id: 4,
        title: "IPO Web Application",
        subtitle: "Real-time Financial Tracking",
        role: "SDE Intern – Full-Stack Developer",
        tech: ["React.js", "Django", "SQL", "REST APIs", "Agile"],
        description: "Real-time IPO tracking application built during Bluestock Fintech internship. Optimized API response time by ~20% through targeted query optimization.",
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
        featured: false,
        color: "rose"
    }
];

export const experience = [
    {
        id: 1,
        role: "Creator & Maintainer",
        company: "DBDuck — Open Source",
        type: "Open Source",
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
        type: "Internship",
        period: "Apr 2025 – May 2025",
        location: "Remote",
        achievements: [
            "Built 4+ full-stack features for a real-time IPO Web Application using React.js and Django, reducing average API response time by ~20%.",
            "Implemented SQL CRUD operations for IPO-related datasets and refactored 3 high-traffic REST API endpoints.",
            "Reduced latency from ~450ms to ~310ms through targeted query optimization.",
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
        details: "CGPA: 9.5 / 10",
        highlight: true
    },
    {
        id: 2,
        degree: "Secondary School Leaving Certificate (SSLC)",
        school: "SJBVP Hosahalli, Gadag",
        period: "2021 – 2022",
        details: "Percentage: 96.48%",
        highlight: false
    }
];

export const certifications = [
    {
        id: 1,
        title: "Scaler Academy",
        description: "Java & Object-Oriented Programming",
        icon: "☕"
    },
    {
        id: 2,
        title: "Algorithms365",
        description: "SDE / Full-Stack Development (Python, DSA, OOP, SQL/MySQL, MongoDB, Django, React)",
        icon: "🚀"
    },
    {
        id: 3,
        title: "Infosys Springboard",
        description: "HTML, CSS, JavaScript",
        icon: "🌐"
    },
    {
        id: 4,
        title: "HackerRank Skill Certificates",
        description: "Python (Gold Badge), SQL (Gold Badge)",
        icon: "🏅"
    }
];

export const achievements = [
    {
        id: 1,
        title: "Team Leadership",
        description: "Led a team of 4 members in academic projects, consistently delivering features on schedule.",
        icon: "👥"
    },
    {
        id: 2,
        title: "Hackathon Participation",
        description: "Participated in Odoo Hackathon 2025 and Google Baseline Tooling Hackathon.",
        icon: "🏆"
    },
    {
        id: 3,
        title: "Open Source Contribution",
        description: "Published and maintained DBDuck (v0.3.0) with full security audit, documentation site, and GitHub Sponsors integration.",
        icon: "💻"
    }
];