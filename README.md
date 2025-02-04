# Humble Superhero API ⚡

> **NestJS + React** project for adding and listing superheroes. Each superhero has a name, superpower, and a _humility score_ (1–10). The app sorts them by descending humility.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

## Overview 📝
**Humble Superhero API** is split into two main parts:
1. **Backend (NestJS)** – Creates the API, stores data in-memory, and handles endpoints.
2. **Frontend (React)** – Provides a user interface to add superheroes and see them listed in real time.

## 📝 **Description**

The **Humble Superhero API** combines a **NestJS** backend with a **React + TypeScript** frontend to manage a list of superheroes, each having a:
- **Name** (string)
- **Superpower** (string)
- **Humility Score** (number, 1–10)

The NestJS backend stores the superheroes in an **in-memory array**, providing two key endpoints:
- **POST** `/superheroes` for adding a new superhero (validates humility score range).
- **GET** `/superheroes` for fetching heroes, sorted by descending humility.

The React frontend presents a simple UI that allows users to:
1. **Add** a superhero.
2. **View** the list in real-time, automatically ordered by highest humility.

---

## 🛠️ **Technologies Used**

### **Backend:**
- **NestJS** (TypeScript)
- **Class-Validator** (for validating humility score range)
- **In-memory** data store

### **Frontend:**
- **React** (TypeScript)
- **Axios** (for HTTP requests)
- **Bootstrap** (optional UI styling)

### **Tools:**
- **Node.js** / npm
- **Visual Studio Code** (or any IDE)
- **Git** & GitHub

---

## 📸 **Screenshots**

### **Backend:**
![List and Form](https://github.com/user-attachments/assets/d304b884-1e5b-40ac-9621-aaa18cbd6df0)


### **Frontend:**
![List and Form](https://github.com/user-attachments/assets/0e09408e-6156-4e94-be7a-d3fe03d2aefb)

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

## 👤 **Author**
- **Name:** Sergio Eguíluz  
- [LinkedIn](https://www.linkedin.com/in/sergio-egu%C3%ADluz-43482a265/) 
- **GitHub:** [GitHub Profile](https://github.com/your-profile)

---

## 📜 **License**

This project is licensed under a proprietary license. Redistribution, modification, or commercial use is prohibited without explicit permission. See the [LICENSE](./LICENSE) file for more details.

---

