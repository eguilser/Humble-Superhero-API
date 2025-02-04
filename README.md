# 🧙️ **Humble Superhero API: NestJS + React Full-Stack Application**

Welcome to the **Humble Superhero API**, an application powered by a **NestJS backend** and a **React (TypeScript) frontend**. This project allows users to add superheroes with a **name, superpower, and humility score (1-10)** and displays them in descending order of humility.

---

## 📚 **Table of Contents**
1. [Description](#description)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Functionality Breakdown](#functionality-breakdown)
5. [API Endpoints](#api-endpoints)
6. [Redux Toolkit Implementation](#redux-toolkit-implementation)
7. [TypeScript Features](#typescript-features)
8. [Testing](#testing)
9. [Screenshots](#screenshots)
10. [Contact](#contact)
11. [License](#license)

---

## 📝 **Description**

The **Humble Superhero API** is a full-stack application designed to showcase:
- **A NestJS backend** that stores superheroes in an **in-memory array** and provides two main API endpoints.
- **A React frontend** that allows users to interact with the superhero data in real-time.

The backend handles:
- **POST /superheroes**: Add a superhero (ensuring `humilityScore` is between 1 and 10).
- **GET /superheroes**: Fetch all superheroes, sorted by the highest humility score.

The frontend:
- Displays the superhero list.
- Allows users to add new superheroes dynamically.
- Updates the list in real-time.

---

## 🚀 **Technologies Used**

### **Backend:**
- NestJS (TypeScript)
- Class-Validator (for input validation)
- In-memory data storage

### **Frontend:**
- React (TypeScript)
- Axios (for API requests)
- Bootstrap (for styling)

### **Development Tools:**
- Node.js
- Visual Studio Code
- Git & GitHub

---

## 🛠 **Installation**

### 1. Clone the repository:
```bash
git clone https://github.com/eguilser/Humble-Superhero-API.git
```

### 2. Navigate to the project directory:
```bash
cd Humble-Superhero-API
```

### 3. Install dependencies:
#### Backend:
```bash
cd backend
npm install
```
#### Frontend:
```bash
cd ../frontend
npm install
```

### 4. Start the servers:
#### Backend (NestJS):
```bash
cd backend
npm run start
```
Backend should now be running at: **http://localhost:4000**

#### Frontend (React):
```bash
cd ../frontend
npm start
```
Frontend should now be running at: **http://localhost:3000**

### 5. Open your browser and navigate to:
```
http://localhost:3000
```
You can now add and view superheroes dynamically!

---

## 📝 **Functionality Breakdown**

### **Superhero Management**
- **Add a Superhero:** Users can enter a superhero's name, superpower, and humility score (1-10).
- **View All Superheroes:** The list updates dynamically, displaying superheroes ordered by their humility score.

---

## 🧐 **API Endpoints**

### **POST /superheroes**
- **Description:** Adds a new superhero.
- **Request Body:**
  ```json
  {
    "name": "Spider-Man",
    "superpower": "Wall-Crawling",
    "humilityScore": 9
  }
  ```
- **Response:**
  ```json
  {
    "message": "Superhero added successfully!"
  }
  ```

### **GET /superheroes**
- **Description:** Retrieves all superheroes sorted by humility score (descending).
- **Response Example:**
  ```json
  [
    {
      "name": "Superman",
      "superpower": "Flying",
      "humilityScore": 10
    },
    {
      "name": "Spider-Man",
      "superpower": "Wall-Crawling",
      "humilityScore": 9
    }
  ]
  ```

---

## 🏠 **Redux Toolkit Implementation**

Although not currently used, Redux Toolkit can be implemented to:
- Manage global state for superheroes.
- Handle API requests efficiently using `createAsyncThunk`.
- Improve performance through memoized selectors.

---

## 🔢 **TypeScript Features**

- **Strict Type Checking**: Interfaces for Superheroes and API responses.
- **Typed React Components**: Ensures maintainability and fewer runtime errors.
- **Typed Axios Requests**: API requests use TypeScript types for clarity.

---

## 💡 **Testing**

- Jest tests can be written for:
  - **Backend:** Testing controllers and services.
  - **Frontend:** Snapshot tests and component testing using `@testing-library/react`.

---

## 🖼📸 **Screenshots**

### **Frontend Interface:**
![List and Form](https://github.com/user-attachments/assets/0e09408e-6156-4e94-be7a-d3fe03d2aefb)

### **Backend API Logs:**
![List and Form](https://github.com/user-attachments/assets/d304b884-1e5b-40ac-9621-aaa18cbd6df0)

---

## If I Had More Time… ⏳
Database Integration: Instead of in-memory, connect to MongoDB or PostgreSQL so data persists across restarts.
Authentication: Add JWT-based authentication for protected routes or an admin panel.
Unit & E2E Tests: Expand coverage for both backend (controller, service) and frontend (React testing).
Deploy: Containerize with Docker and push to AWS or Heroku. Or set up CI/CD with GitHub Actions.
Enhanced UI: Use a design system like Material UI or Chakra UI, include filters/sorting by superpower or name.

---

**🚀 Enjoy coding and improving the Humble Superhero API!**


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

