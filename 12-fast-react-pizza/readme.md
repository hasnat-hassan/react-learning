# 🍕 Fast React Pizza

A modern, full-featured pizza ordering app built with **React**, **Redux Toolkit**, **React Router**, and **Tailwind CSS**. This project demonstrates advanced React patterns, real-world async flows, Redux state management, and external API integration — all wrapped in a clean and responsive UI.

---

## ✨ Features

### 🛒 Shopping Cart
- Add and remove pizzas
- Increase/decrease item quantities with real-time price updates
- Persistent cart state using Redux
- Live cart summary with total items and price
- Graceful UI for empty cart scenarios

### 🍕 Dynamic Menu
- Loads menu items via external API
- Shows pizza image, name, ingredients, and pricing
- “Sold Out” pizzas are visually distinguished
- “Add to Cart” button with real-time state update

### 👤 User & Location
- Username-based user auth flow
- Uses **Geolocation API** to auto-detect delivery address
- Reverse geocoding with **BigDataCloud API**
- Manual address entry as fallback
- Persistent user data using Redux

### 📦 Order Management
- Full order placement flow with customer and delivery details
- Priority ordering for faster delivery
- Order tracking with live ETA updates
- View and manage previous orders
- Ability to update order details/status

### 🗺️ Location Services
- GPS-based address auto-fill
- Fallback for manual address input
- Reverse geocoding integration

### 🎨 UI & UX
- Mobile-first responsive layout
- Built with **Tailwind CSS**
- Elegant loading states and transitions
- Full error and form validation handling

---

## 🛠️ Tech Stack

### ⚛️ Frontend
- **React 18.2.0** – Modern, fast UI library
- **React Router DOM 6.11.0** – Client-side routing with data loaders
- **Vite 4.2.0** – Lightning-fast bundler

### 📦 State Management
- **Redux Toolkit 2.2.7** – Simplified Redux with best practices
- **React Redux 9.1.2**
- **Async Thunks** – For asynchronous logic

### 🎨 Styling & UI
- **Tailwind CSS 3.3.2** – Utility-first styling
- **PostCSS 8.4.23** & **Autoprefixer 10.4.14**
- **Roboto Mono** custom font family

### 🔧 Developer Tools
- **ESLint 8.39.0** – Linting
- **Prettier 2.8.8** – Code formatting
- **TypeScript types** – Type-safe development

### 🌐 External APIs
- **Pizza API**:  
  `https://react-fast-pizza-api.onrender.com/api`  
  Used for menu, order creation, and status updates

- **Geocoding API**:  
  `https://api.bigdatacloud.net/data/reverse-geocode-client`  
  Used for converting coordinates into readable addresses
