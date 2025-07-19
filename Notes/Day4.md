# ⚛️ React Bootcamp – Day 4: API Calls & useEffect

## 📡 Fetching APIs in React

### ✅ Basic fetch() Example Using useEffect

The `useEffect` Hook is fundamental for performing side effects in React functional components, such as data fetching. Below is a basic example demonstrating how to fetch data from an API endpoint and update the component's state.

```jsx
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to the specified API endpoint
    fetch("https://mockapi.io/your-endpoint")
      .then((res) => res.json()) // Parse the JSON response
      .then((data) => setData(data)) // Update the component's state with the fetched data
      .catch((err) => console.error("Error fetching:", err)); // Log any errors during the fetch operation
  }, []); // The empty dependency array ensures this effect runs only once after the initial render

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Fetched Data:</h1>
      {data.length > 0 ? (
        <ul className="list-disc pl-5">
          {data.map((item) => (
            // Display each item from the fetched data
            <li key={item.id} className="mb-2 p-2 bg-gray-100 rounded-md">
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">Loading data or no data available...</p>
      )}
    </div>
  );
}
```
## 🧠 useEffect Overview

The `useEffect` Hook in React allows you to perform side effects in functional components.

**Syntax:** `useEffect(() => { ... }, [])`

*   **Purpose:** Used for operations that interact with the outside world, like data fetching, subscriptions, or manually changing the DOM.
*   **Callback Function:** The first argument is an anonymous callback function that contains the side effect logic.
*   **Dependency Array (`[]`):** The second argument is an optional dependency array.
    *   An empty array (`[]`) means the effect runs only once after the initial render, similar to `componentDidMount` in class components. This is ideal for initial API calls.
    *   Omitting the array means the effect runs after every render.
    *   Including dependencies (e.g., `[someProp, someState]`) means the effect runs when those dependencies change.

---

## 🧠 Callback Function

A callback function is a function passed as an argument to another function, which is then executed inside the outer function at a later time.
```jsx
function greet(name) {
  console.log("Hello " + name);
}

function processUserInput(callback) {
  const name = "Rakesh";
  callback(name); // 'greet' is invoked here
}

processUserInput(greet); // In this call, 'greet' is the callback function
```

---

## 🧪 API Debugging (Network Tab in DevTools)

When working with APIs, the browser's Developer Tools (DevTools) are invaluable for debugging. The "Network" tab allows to inspect all network requests made by the application.

### How to Use:

1.  Open DevTools (usually by pressing `F12` or right-clicking and selecting "Inspect").
2.  Navigate to the "Network" tab.
3.  Reload the application or trigger the API call.
4.  Select the API call from the list to view its details.

### Common HTTP Status Codes:

*   **200 OK:** The request was successful.
*   **201 Created:** The request was successful, and a new resource was created.
*   **400 Bad Request:** The server could not understand the request due to invalid syntax.
*   **401 Unauthorized:** The request requires user authentication.
*   **404 Not Found:** The server could not find the requested resource.
*   **500 Internal Server Error:** The server encountered an unexpected condition that prevented it from fulfilling the request.

---

## 🧪 Using mockapi.io

[mockapi.io](https://mockapi.io/) is a free online service that allows developers to quickly create mock REST APIs. It's excellent for prototyping, testing, and learning API interactions without setting up a backend.

### Supported CRUD Operations:

*   **GET:** Retrieve data from the API.
*   **POST:** Create new data on the API.
*   **PUT/PATCH:** Update existing data on the API. (PUT typically replaces the entire resource, PATCH applies partial modifications).
*   **DELETE:** Remove data from the API.

### 🌐 Example API Endpoint:

We can use an endpoint like the following for testing:
`https://64ad0df3b470006a5ec5a015.mockapi.io/users`

---

## ✅ Summary

On Day 4, we gained practical experience with:

*   Making API calls using the native `fetch()` API within React components.
*   Leveraging the `useEffect` Hook to manage side effects, ensuring API calls run at appropriate times (e.g., once after component mounting).
*   Understanding the concept and practical application of callback functions in JavaScript.
*   Utilizing browser DevTools, specifically the Network tab, for effective API debugging and understanding HTTP response codes.
*   Practicing API interactions with `mockapi.io`, a valuable tool for mock backend development.