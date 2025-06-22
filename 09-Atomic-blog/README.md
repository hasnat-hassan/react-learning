# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# ⚛️ The Atomic Blog

A modern and performant **React blog application** that showcases advanced patterns like **Context API**, **performance optimization**, and **state management**. Built with **React 18**, it offers a clean UI, light/dark theme toggling, real-time search, and a post archive of over 10,000 entries.

---

## ✨ Features

### 🔧 Core Functionality
- 📝 **Create Posts** – Add new blog posts with title & body
- 🔍 **Search Posts** – Real-time search through posts (case-insensitive)
- 🗃️ **Post Archive** – Browse 10,000+ pre-generated archive posts
- 🌗 **Dark Mode Toggle** – Seamless theme switching
- 🗑️ **Post Management** – Clear all posts with a single click
- 📱 **Responsive UI** – Clean design across all devices

### ⚙️ Technical Features
- 📦 **React Context API** – Centralized state handling
- ⚡ **Performance Optimizations**  
  - `React.memo` for component memoization  
  - `useMemo` for computed state  
  - `useCallback` for stable functions
- 🧪 **Fake Data Generation** – Using Faker.js
- 🧠 **Modern React Patterns** – Hooks, functional components, and best practices

---

## 💻 Tech Stack

### 🧑‍💻 Frontend
- **React 18.2.0** – Functional components & concurrent features
- **React DOM 18.2.0**
- **React Scripts 5.0.1** – Create React App tooling

### 🧰 Development Tools
- **@faker-js/faker 7.6.0** – Realistic fake content
- **@testing-library/react 13.4.0** – React component testing
- **@testing-library/jest-dom 5.16.5** – Custom Jest matchers
- **@testing-library/user-event 13.5.0** – Simulates user interactions

### 🏗️ Build & Quality
- **Create React App (CRA)** – Zero-config starter
- **ESLint** – Code linting
- **Web Vitals** – Performance monitoring

---

## 🎯 What Users Can Do

### 1. 📝 Create New Posts
- Add a title and body, click “Add Post”
- Posts appear instantly at the top

### 2. 🔍 Search Functionality
- Filter posts live as you type
- Case-insensitive, checks title & body

### 3. 🗃️ Post Archive
- Reveal 10,000+ Faker-generated posts
- Add any archive post to main blog
- Toggle archive visibility

### 4. 🌗 Theme Switching
- Toggle between light and dark mode
- Smooth transitions for a polished UX

### 5. 🗑️ Post Management
- View total post count in header
- Remove all posts with one click
- Posts displayed in a responsive grid
