# Cinestar Studio – Final Exam Project (Fagprøve)

A modern, responsive web application and custom backoffice dashboard developed as the final exam project (*Fagprøve*) for the Web Developer education at **Media College Denmark** (November 2026).

The project is built for **Cinestar Studio**, an innovative film and movie production company, allowing them to showcase their portfolio, services, and manage a professional tech and industry blog.

## Purpose & Core Features

The solution is developed **mobile-first** (optimized from 390px up to 1440px desktop) with a heavy focus on intuitive UI/UX, robust error handling, and performance.

### Frontend (Public Site)
*   **Dynamic Landing Page:** Features active slider components, and modern gradient layouts matching client specifications.
*   **Interactive Features:** Fully validated contact forms and newsletter subscription components.
*   **Blog Architecture:** Comprehensive list-view with teaser-cards leading to dedicated dynamic detail pages (`/blog/:id`).

### Backoffice (Admin Dashboard)
*   **Full CRUD Functionality:** Secure interface for administrators to Create, Read, Update, and Delete blog posts (managing titles, images, teasers, and descriptions).
*   **Session Management & Security:** Implemented a secure `ProtectedRoute` mechanism using browser `localStorage` to persist authentication tokens and guard administrative routes against unauthorized access.

## Tech Stack & Methodology

*   **Frontend Framework:** React (with modern JavaScript ES6+)
*   **Styling:** Semantically correct HTML5, CSS3 Modules for components' styling.
*   **Data Handling:** Asynchronous REST API integration with a local MongoDB/Express backend handling `GET`, `POST`, `PUT`, and `DELETE` requests, including JWT-based user authentication.
*   **UX/UI Standards:** Built with strong adherence to **web accessibility (WCAG)**, solid contrast levels, and intuitive interactive validation feedback.
*   **Development Workflow:** Methodical task estimation, git version control, and AI-assisted code profiling/reviews for optimized rendering speed.


## Development & Local Setup

*Note: This repository contains the frontend application. The backend API and MongoDB database run locally and are not public.*

### 1. Installation
Clone the repository:
```bash
git clone https://github.com
cd cinestar_frontend
```

Install the required dependencies:
```bash
npm install
```

### 2. Configuration
The backend API connection is managed centrally in the configuration file (`src/settings.js`). By default, it is configured to point to the local backend port:
```javascript
export const serverPath = `http://localhost:3042`;
export const authmode = false; 
```

### 3. Running the App
To start the Vite development server locally:
```bash
npm run dev
```
The application will be accessible at `http://localhost:5173` (or the port specified by Vite).
