import { BookOpen, BriefcaseBusiness, Code2, Cpu, Database, FileCode2, Laptop, PenTool, Rocket, ServerCog, Shield, Terminal } from 'lucide-react';

export const personalInfo = {
    name: "Veeresh Hanni",
    title: "Full-Stack Developer & Open Source Author",
    tagline: "Creator of DBDuck — a unified Python API across 6 databases.\nBuilding backends that scale. Writing code that ships.",
    email: "veereshhanni347@gmail.com",
    phone: "+91 8151858969",
    location: "Gadag, India",
    portfolio: "veereshhanni.me",
    resume: "/Veeresh_Hanni_Resume.pdf",
    social: {
        linkedin: "https://linkedin.com/in/veeresh-hanni-9775ba33b/",
        github: "https://github.com/veeresh-hanni",
        dbduck: "https://dbduck.org.in",
        email: "mailto:veereshhanni347@gmail.com",
        hackerank:"https://www.hackerrank.com/profile/veereshhanni",
        leetcode: "https://leetcode.com/u/Veeresh_Hanni",
        credlybadges:"https://www.credly.com/users/veeresh-hanni/badges/credly",
    },
    professionalSummary: "Full-Stack Developer and open-source author with hands-on experience in Python, Django, React, Next.js, MySQL, PostgreSQL, and MongoDB. Creator of DBDuck — a production-deployed open-source Python library providing a unified API across 6 databases (PostgreSQL, MySQL, SQLite, MSSQL, MongoDB, Neo4j) — with a live documentation site at dbduck.org.in. Internship experience delivering React, Next.js, Django, and fintech product features. CGPA 9.5 in Computer Science with a strong foundation in DSA, REST APIs, Docker-based deployments, and secure application design. Available for full-time SDE roles, full-stack developer roles, freelance projects, remote software work, and software development internships.",
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
        items: ["Django", "React.js", "Next.js", "Django REST Framework"]
    },
    {
        id: 3,
        category: "Databases",
        icon: Database,
        items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "MSSQL", "Neo4j"]
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

export const services = [
    {
        id: 1,
        title: "Full-Stack Web Applications",
        icon: Laptop,
        summary: "Professional React, Next.js, Django, and REST API development for dashboards, internal tools, MVPs, and production web apps.",
        skills: ["React", "Next.js", "Django", "DRF", "REST APIs"]
    },
    {
        id: 2,
        title: "Backend & Database Engineering",
        icon: ServerCog,
        summary: "Scalable backend systems with clean data models, ORM design, query optimization, and multi-database integration.",
        skills: ["Python", "SQL", "PostgreSQL", "MySQL", "MongoDB"]
    },
    {
        id: 3,
        title: "Frontend UI Implementation",
        icon: FileCode2,
        summary: "Responsive, polished interfaces built from designs or existing pages with consistent components and smooth user flows.",
        skills: ["JavaScript", "HTML5", "CSS3", "lucide-react", "Accessibility"]
    },
    {
        id: 4,
        title: "Security & Code Quality",
        icon: Shield,
        summary: "Security-focused improvements for authentication, encrypted data storage, vulnerability fixes, testing, and CI/CD workflows.",
        skills: ["AES-256", "Auth", "Bandit", "GitHub Actions", "Docker"]
    }
];

export const blogs = [
    {
        id: 1,
        title: "Building DBDuck: One Python API Across 6 Databases",
        category: "Open Source",
        excerpt: "A technical look at designing a Universal Data Object Model, reducing database-specific boilerplate, and keeping backend code portable.",
        topics: ["Python", "ORM", "Databases"],
        href: "https://dbduck.org.in"
    },
    {
        id: 2,
        title: "How I Approach Full-Stack Performance in Django + React Apps",
        category: "Engineering",
        excerpt: "Lessons from optimizing REST APIs, improving query paths, and building frontend workflows that stay fast as product features grow.",
        topics: ["Django", "React", "APIs"],
        href: `mailto:${personalInfo.email}?subject=Blog%20collaboration%20with%20Veeresh%20Hanni`
    },
    {
        id: 3,
        title: "Secure AI Chat Architecture with Encrypted Message Storage",
        category: "Security",
        excerpt: "Notes from Pingone on hybrid database design, encrypted chat storage, and designing safer backend flows for AI applications.",
        topics: ["AI Apps", "Encryption", "MongoDB"],
        href: "https://pingone.onrender.com"
    }
];

export const hireOptions = [
    {
        id: 1,
        title: "Freelance Projects",
        icon: BriefcaseBusiness,
        description: "Available for MVPs, portfolio sites, dashboards, backend APIs, database work, and feature delivery for early-stage products."
    },
    {
        id: 2,
        title: "Full-Time SDE & Full-Stack Roles",
        icon: Rocket,
        description: "Open to full-time SDE, Software Developer, and Full-Stack Developer opportunities focused on production web apps and backend systems."
    },
    {
        id: 3,
        title: "Internships",
        icon: PenTool,
        description: "Interested in software development internships where I can contribute React, Django, API, database, and product engineering skills."
    }
];

export const projects = [
    {
        id: 5,
        title: "Duckpad Editor",
        subtitle: "Cross-platform Text Editor",
        role: "Creator & Maintainer",
        tech: ["Python", "PyQt5", "Markdown", "Desktop"],
        description: "A fast, cross-platform Markdown,Text editor built with Python and PyQt5, with native desktop releases for Windows, macOS, and Linux. Download the latest v1.0.5 build for your system.",
        period: "2026 – Present",
        links: {
            demo: "https://github.com/Veeresh-Hanni/Duckpad-Editor/releases/latest",
            github: "https://github.com/Veeresh-Hanni/Duckpad-Editor",
            downloads: [
                {
                    label: "Windows",
                    href: "https://github.com/Veeresh-Hanni/Duckpad-Editor/releases/download/v1.0.6/DuckPad_Editor_Setup.exe"
                },
                {
                    label: "macOS",
                    href: "https://github.com/Veeresh-Hanni/Duckpad-Editor/releases/download/v1.0.6/DuckPad_Editor-macos.dmg"
                },
                {
                    label: "Linux DEB",
                    href: "https://github.com/Veeresh-Hanni/Duckpad-Editor/releases/download/v1.0.6/duckpad-editor_1.0.6_amd64.deb"
                },
                {
                    label: "Linux RPM",
                    href: "https://github.com/Veeresh-Hanni/Duckpad-Editor/releases/download/v1.0.6/duckpad-editor-1.0.6-1.x86_64.rpm"
                },
                {
                    label: "Linux",
                    href: "https://github.com/Veeresh-Hanni/Duckpad-Editor/releases/download/v1.0.6/DuckPad_Editor-linux.tar.gz"
                }
            ]
        },
        featured: true,
        color: "amber"
    },
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
        role: "React Web Developer Intern",
        company: "Zetpeak",
        type: "Internship",
        period: "Apr 2026 – Jun 2026",
        location: "Remote",
        achievements: [
            "Built an interactive, gamified product roadmap page in React with animated milestone nodes for stakeholder-facing feature timelines.",
            "Converted a static HTML page into a Next.js page and added localStorage-backed task-management functionality.",
            "Improved UI consistency and navigation by integrating lucide-react icons across the application."
        ]
    },
    {
        id: 3,
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
        description: "Python (Gold Badge), SQL (Gold Badge), REST API (Intermediate)",
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
        description: "Participated in Odoo Hackathon 2025 & 2026 and Google Baseline Tooling Hackathon.",
        icon: "🏆"
    },
    {
        id: 3,
        title: "Open Source Contribution",
        description: "Published and maintained DBDuck (v0.4.4+) with full security audit, documentation site, and GitHub Sponsors integration.",
        icon: "💻"
    }
];
