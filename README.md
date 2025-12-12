# The Dragon News

**The Dragon News** is a modern news platform built with **React**, featuring **Firebase Authentication** for secure and fast user login.

---

## Features

- **Email & Password Authentication**  
  Users can register and login with email and password. Optional email verification included.

- **Google Sign-In**  
  OAuth login with Google accounts for quick and secure authentication.

- **GitHub Sign-In**  
  OAuth login with GitHub accounts for developers and tech enthusiasts.

- **Password Reset**  
  Users can reset their password via email.

- **Protected Routes**  
  Restrict access to certain pages based on authentication state.

- **User Profile Management**  
  Display authenticated user info (name, email, photo) and allow profile updates.

- **Real-time Authentication State**  
  UI automatically updates on login/logout without page reload.

- **Error Handling & Validation**  
  Shows messages for invalid login, wrong passwords, or failed OAuth logins.

---

## 🛠 Tech Stack

- **Frontend:** React.js  
- **Routing:** React Router v6  
- **Styling:** Tailwind CSS / DaisyUI  
- **Authentication:** Firebase Authentication  
  - Email & Password  
  - Google OAuth  
  - GitHub OAuth   

---

## Dependencies

```json
"dependencies": {
    "@tailwindcss/vite": "^4.1.4",
    "daisyui": "^5.0.28",
    "date-fns": "^4.1.0",
    "firebase": "^11.6.1",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-fast-marquee": "^1.6.5",
    "react-icons": "^5.5.0",
    "react-router": "^7.5.2",
    "react-toastify": "^11.0.5",
    "tailwindcss": "^4.1.4"
  },
  "devDependencies": {
    "@eslint/js": "^9.22.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.22.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "vite": "^6.3.1"
  }
```

---

## Live Link

[https://the-dragon-news-1354.web.app/](https://the-dragon-news-1354.web.app/)

---

## Installation

```bash
# Clone the repo
git clone https://github.com/lijanahmmed/The-Dragon-News.git

# Navigate to project
cd the-dragon-news

# Install dependencies
npm install

# Start development server
npm run dev
