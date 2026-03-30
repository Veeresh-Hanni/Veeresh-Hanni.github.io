<div align="center">

# Hi, I'm Veeresh Hanni 👋

**Full Stack Developer · Open Source Author · Python & Django Enthusiast**

[![Portfolio](https://img.shields.io/badge/Portfolio-veereshhanni.me-1F4E79?style=for-the-badge&logo=google-chrome&logoColor=white)](https://veereshhanni.me)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Veeresh_Hanni-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/veeresh-hanni-9775ba33b)
[![GitHub](https://img.shields.io/badge/GitHub-Veeresh--Hanni-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Veeresh-Hanni)
[![DBDuck](https://img.shields.io/badge/Project-DBDuck-2E86AB?style=for-the-badge&logo=python&logoColor=white)](https://dbduck.org.in)

</div>

---

## About Me

I'm a Full Stack Developer from Gadag, Karnataka, India — passionate about building clean backend systems, open-source tooling, and developer-friendly APIs.

I created **DBDuck**, an open-source Python library that provides a single unified API across 6 databases — so developers never have to rewrite their data layer when switching databases.

- 🔭 Currently working on **DBDuck v0.3.0** — Universal Data Object Model for Python
- 🌱 Exploring **PostgreSQL internals**, **Redis caching**, and **cloud deployments**
- 💡 Interested in **developer tooling**, **backend architecture**, and **open-source**
- 📫 Reach me at **veereshhanni347@gmail.com**
- ⚡ Fun fact: I built and deployed a full documentation site for DBDuck with SEO, structured data, and Google Search Console integration

---

## 🚀 Featured Project — DBDuck

> **Abstract the database, not the developer.**

DBDuck is a universal database abstraction library for Python — one API to rule PostgreSQL, MySQL, SQLite, MSSQL, MongoDB, and Neo4j.

```python
import sys
from pathlib import Path


sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from DBDuck import UDOM

# Requires a running MySQL server and existing `dbduck` database.
db = UDOM(url="mysql+pymysql://root:pass@localhost:3306/dbduck")

print(db.create("Orders", {"order_id": 101, "customer": "A", "paid": True}))
# with db.transaction():
#     db.create_many(
#         "Orders",
#         [
#             {"order_id": 102, "customer": "B", "paid": False},
#             {"order_id": 103, "customer": "C", "paid": True},
#         ],
#     )
print(db.find("Orders", where={"paid": True}, limit=10))

```

[![DBDuck Repo](https://img.shields.io/badge/GitHub-DBDuck-181717?style=flat-square&logo=github)](https://github.com/Veeresh-Hanni/DBDuck)
[![Live Docs](https://img.shields.io/badge/Docs-dbduck.org.in-1F4E79?style=flat-square&logo=readthedocs)](https://dbduck.org.in)
[![PyPI](https://img.shields.io/badge/PyPI-dbduck-3775A9?style=flat-square&logo=pypi&logoColor=white)](https://pypi.org/project/dbduck)

---

## 🛠️ Tech Stack

**Languages**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

**Frameworks & Libraries**

![Django](https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Django REST](https://img.shields.io/badge/Django_REST-ff1709?style=flat-square&logo=django&logoColor=white)

**Databases**

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=flat-square&logo=sqlite&logoColor=white)

**DevOps & Tools**

![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## 📂 Projects

| Project | Description | Stack | Live |
|---------|-------------|-------|------|
| **[DBDuck](https://github.com/Veeresh-Hanni/DBDuck)** | Universal database abstraction library for Python | Python, PyPI | [dbduck.org.in](https://dbduck.org.in) |
| **[Pingone](https://github.com/Veeresh-Hanni/Pingone)** | Full-stack AI Chat App with encrypted storage | React, Django, MongoDB, PostgreSQL | [pingone.onrender.com](https://pingone.onrender.com) |
| **Pharmacy Dispensing System** | Drug inventory & dispensing management system | Django, MySQL, HTML/CSS/JS | — |

---

## 💼 Experience

**Software Development Engineer Intern** — *Bluestock Fintech* (Apr 2025 – May 2025)
- Built full-stack features for a real-time IPO Web Application using React.js and Django
- Optimized REST API endpoints, reducing average response time by ~20%

---

## 🏅 Certifications & Achievements

- 🥇 HackerRank — **Python Gold Badge** · **SQL Gold Badge**
- 📜 Scaler Academy — Java & OOP
- 📜 Algorithms365 — Full-Stack SDE Track (Python, DSA, Django, React)
- 📜 Infosys Springboard — HTML, CSS, JavaScript
- 🏆 Odoo Hackathon 2025 · Google Baseline Tooling Hackathon

---

## 📊 GitHub Stats

<div align="center">

![Veeresh's GitHub Stats](https://github-readme-stats.vercel.app/api?username=Veeresh-Hanni&show_icons=true&theme=default&hide_border=true&count_private=true)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=Veeresh-Hanni&layout=compact&hide_border=true&theme=default)

</div>

---

## 📫 Get In Touch

<div align="center">

| Platform | Link |
|----------|------|
| 🌐 Portfolio | [veereshhanni.me](https://veereshhanni.me) |
| 💼 LinkedIn | [linkedin.com/in/veeresh-hanni-9775ba33b](https://linkedin.com/in/veeresh-hanni-9775ba33b) |
| 📧 Email | [veereshhanni347@gmail.com](mailto:veereshhanni347@gmail.com) |
| ☕ Support | [razorpay.me/@veereshhanni](https://razorpay.me/@veereshhanni) |

</div>

---

<div align="center">

*Open to Full Stack Developer · SDE · Backend Developer roles*

**Made with ❤️ from Gadag, India**

</div>

---