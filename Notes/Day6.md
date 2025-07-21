# ⚛️ React Bootcamp – Day 6: UI + API Integration (Create & Edit)

---

## 📌 Core Concepts

- Controlled inputs using `onChange`
- Form submission handled with `onSubmit`
- Data sent to backend using `axios`
- `POST` request for creating new blog
- `PUT` request for editing an existing blog
- Using `useParams()` to get blog `id` in Edit page
- Using `useEffect()` to pre-fill form fields during edit

---

## 🛠️ Create Page (POST)

### ✅ Tasks:

1. Set up form with inputs: title, subtitle, image URL, description.
2. Use `useState` for managing input states.
3. Use `onChange` to update each state.
4. On form submit, send data to API using `axios.post`.

### 📦 Example API Call:

```js
axios.post("https://mockapi.io/blogs", {
  title,
  subheadline: subtitle,
  image,
  description
})
```
## 🛠️ Edit Page (PUT)

### ✅ Tasks:

1. Get `id` of the blog using `useParams()` from the URL.
2. Use `useEffect` to fetch existing data and set input states.
3. Use `onChange` to modify input values.
4. On form submit, send updated data using `axios.put`.

---

### 📦 Example API Call:
```jsx
axios.put(`https://mockapi.io/blogs/${id}`, {
  title,
  subheadline: subtitle,
  image,
  description
})
```
## 🎯 Controlled Inputs

Each input must have `value` and `onChange`.

Keeps the input field connected to state.

### 🧾 Example:

```jsx
<input
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  required
/>
```
## 🧷 Form Submission
Form should have:

- A `<form onSubmit={...}>` tag

- A `<button type="submit">` inside the form

## 🧾 Example:
```jsx
<form onSubmit={handleSubmit}>
  {/* Input fields here */}
  <button type="submit">Publish</button>
</form>
```
## 🧵 Things to Remember
- Always prevent default form behavior: `e.preventDefault()`

- Use useNavigate() to redirect after successful submission

- Use async/await with axios for clean API calls

- Keep UI inputs in sync with state using controlled inputs
