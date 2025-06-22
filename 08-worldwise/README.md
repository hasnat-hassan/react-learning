# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# 🌍 WorldWise – Travel Tracking Application

A modern and elegant travel tracker built with **React**, **Vite**, and **Leaflet**. WorldWise allows you to visually manage your travel history by adding cities directly on an interactive world map, leaving notes, and organizing your journeys like a pro.

---

## ✨ Features

- 🗺️ **Interactive World Map** – Click anywhere to add cities you’ve visited  
- 🏙️ **City Management** – Add, view, and delete cities with details  
- 🌐 **Country Overview** – Visualize visited countries in a grid view  
- 🔐 **User Authentication** – Simple login system with protected routes  
- 📱 **Responsive Design** – Clean UI using CSS Modules and modern layout techniques  
- 📍 **Geolocation** – Center the map based on your current location  
- 📆 **Date Tracking** – Log when you visited each place  
- 📝 **Notes System** – Leave personal travel notes per city  
- 📚 **Wikipedia Integration** – Quick access to more info about cities

---

## 💻 Tech Stack

| Category       | Tech                                 |
|----------------|--------------------------------------|
| ⚛️ Framework    | [React](https://reactjs.org/)         |
| ⚡ Build Tool   | [Vite](https://vitejs.dev/)           |
| 🗺️ Mapping      | [Leaflet](https://leafletjs.com/), [React Leaflet](https://react-leaflet.js.org/) |
| 📦 State Mgmt   | React Context API + `useReducer`     |
| 📚 Routing      | [React Router DOM](https://reactrouter.com/) |
| 🎨 Styling      | CSS Modules + Custom CSS Variables    |
| 📡 Mock API     | [JSON Server](https://github.com/typicode/json-server) |
| ✅ Linting      | [ESLint](https://eslint.org/)         |

---

## 🗂️ Key Components

### 🗺️ Map Component
- Built with **React Leaflet**
- Handles click events to create new city entries
- Shows pins/markers for each visited city
- Uses **Geolocation** to find your current location

### 🏙️ City Management
- Add new cities with auto country/emoji detection
- View city details (date, notes, location)
- Delete cities with confirmation

### 🔐 Authentication
- Fake login system (demo-friendly)
- Uses protected routes for app sections
- Logout functionality included

---

## 🎨 Styling Details

- ✅ **CSS Modules** for component-level styling
- 🌈 **Custom CSS Variables** for consistent theming
- 📐 **Responsive Layouts** using Flexbox/Grid
- ✍️ **Manrope Font** for clean typography

---