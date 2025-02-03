# Humble Superhero API ⚡

> **NestJS + React** project for adding and listing superheroes. Each superhero has a name, superpower, and a _humility score_ (1–10). The app sorts them by descending humility.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

## Overview 📝
**Humble Superhero API** is split into two main parts:
1. **Backend (NestJS)** – Creates the API, stores data in-memory, and handles endpoints.
2. **Frontend (React)** – Provides a user interface to add superheroes and see them listed in real time.

The project demonstrates:
- **POST /superheroes**: Add a superhero (validates `humilityScore` is between 1 and 10).
- **GET /superheroes**: Fetch and sort the list by highest humility score first.

---

## If I Had More Time… ⏳
Database Integration: Instead of in-memory, connect to MongoDB or PostgreSQL so data persists across restarts.
Authentication: Add JWT-based authentication for protected routes or an admin panel.
Unit & E2E Tests: Expand coverage for both backend (controller, service) and frontend (React testing).
Deploy: Containerize with Docker and push to AWS or Heroku. Or set up CI/CD with GitHub Actions.
Enhanced UI: Use a design system like Material UI or Chakra UI, include filters/sorting by superpower or name.

## 🤝 **Contributing**

Contributions are welcome! If you'd like to contribute:
1. Fork this repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## 📩 **Contact**
Sergio (eguilser)  
[GitHub Profile](https://github.com/eguilser)  
[LinkedIn](https://www.linkedin.com/in/sergio-egu%C3%ADluz-43482a265/)

---

## 📜 **License**

This project is licensed under a proprietary license. Redistribution, modification, or commercial use is prohibited without explicit permission. See the [LICENSE](./LICENSE) file for more details.

---

