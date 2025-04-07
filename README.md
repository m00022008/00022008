# 📚 Book Review App

This is a simple **Book Review Web Application** built using **Express.js** and **Node.js**, developed to demonstrate core concepts of web development such as **CRUD operations**, **routing**, **template rendering**, and **basic file storage using JSON**.

---

## 📌 About the App

The Book Review App allows users to:
- 📖 Create a review for a book (title, author, genre, rating, and comments)
- ✏️ Update their reviews
- 🗑️ Delete reviews
- 🔍 View a list of all submitted reviews

Instead of using a database, this application **stores review data in a local `data.json` file**. It’s a lightweight solution perfect for demonstrating core web technologies without needing a database setup.

The application uses:
- **Express.js** for server-side logic
- **Pug** as the template engine for rendering views
- **File System (fs)** module to read/write JSON files
- **dotenv** for environment variables

> _“This web application was created to fulfill Web Technology module’s requirements and does not represent an actual company or service.”_

---

## 🌐 Access the App Online

Users can access the live version of the app here:  
👉 **[https://book-review-app-i73t.onrender.com/book](https://book-review-app-i73t.onrender.com/book)**

---

## ⚙️ How to Run the App Locally

### Prerequisites
- Node.js installed on your system

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/book-review-app.git
   cd book-review-app

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the server**
   ```bash
   npm start
   ```

4. Open your browser and navigate to:  
   **http://localhost:3000**

---

## 📦 Dependencies

- **express**
- **dotenv**
- **body-parser**
- **cors**
- **pug**

Install them using:
```bash
npm install express dotenv body-parser cors pug
```

---

## 🔗 Useful Links

- 🔗 GitHub Repo: [https://github.com/m00022008/00022008.git](https://github.com/m00022008/00022008.git)
- 🌍 Live App: [https://book-review-app-i73t.onrender.com/book](https://book-review-app-i73t.onrender.com/book)

---

## 📁 Project Structure

```
book-review-app/
│
├── app.js
├── .env
├── data.json
├── package.json
├── README.md
├── /public
│   ├── /images
│   ├── /javascripts
│   └── /styles
│       └── style.css
│
├── /routes
│   ├── index.js
│   └── /users
│       └── index.js
│
├── /controllers
│   ├── index.js
│   └── /users
│       └── index.js
│
├── /services
│   ├── index.js
│   └── /users
│       └── index.js
│
├── /views
│   ├── layout.pug
│   └── index.pug
```

> ✅ Note: `node_modules` and `.env` are excluded from version control using `.gitignore`.

---
```

Let me know if you want me to include example data for the `data.json` or tips on deploying static JSON-based apps on Render or Glitch.
