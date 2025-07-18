# ⚛️ React Bootcamp – Day 2: Routing, Pages & Styling Basics

---

## 📦 Installed Packages

To install the router packages for React:

```bash
npm i react-router-dom
```

---

## 🧭 Mantra for Routing

Thsi base structure is used for setting up routing in React:

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/home" element={<h1>This is Home page</h1>} />
  </Routes>
</BrowserRouter>
```

🔗 Access the Home page at:  
`http://localhost:5173/home`

---

## 🗂️ Project CRUD Routes

Here’s a basic route structure for your CRUD pages:

| Route       | Description     |
|-------------|-----------------|
| `/`         | Home Page       |
| `/create`   | Create Page     |
| `/edit`     | Edit Page       |
| `/blog`     | Blog Page       |

---

## 🎨 Styling in React (CamelCase)

When styling in JSX, always use camelCase:

```jsx
const style = {
  backgroundColor: 'blue', // ✅ Correct (b is small, C is capital)
};
```

---

## ✅ Tasks for Tomorrow

- Learn `Tailwind CSS` – especially Flex utilities
- Explore `Tailkit` – pre-built Tailwind UI components
- Try out `Flowbite` – Tailwind component library
