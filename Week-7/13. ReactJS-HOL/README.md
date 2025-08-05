# React Hands-on 13 – Multiple Component Rendering and Conditional Layouts

This hands-on lab demonstrates how to implement conditional rendering and layout design in React while rendering multiple components side by side using dynamic JSX.

## Objective

- Implement conditional rendering in React applications
- Render multiple components dynamically
- Understand `map()` in JSX rendering
- Learn about keys and list rendering
- Extract reusable components

## Folder Structure

```

React-handson-13/
│
├── 13. ReactJS-HOL/
│   └── bloggerapp/
│       └── src/
│           ├── App.js               # Layout to display all details in flex layout
│           └── components/
│               ├── BookDetails.js   # Displays book-related information
│               ├── BlogDetails.js   # Displays blog-related information
│               └── CourseDetails.js # Displays course-related information
│
└── output/                          # Screenshot of three sections aligned in layout

````

## Steps Performed

1. Created a React app named `bloggerapp`
2. Created three components:
   - `BookDetails`
   - `BlogDetails`
   - `CourseDetails`
3. Rendered all three components side by side using `flexbox`
4. Added conditional rendering capabilities using layout wrappers
5. Used `map()` for layout enhancements if needed (e.g. rendering separators)

## How to Run the Project

```bash
cd bloggerapp
npm install
npm start
````

Visit `http://localhost:3000` to view the output.

## Code Changes

### `src/App.js`

```jsx
import React from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div style={{ padding: '100px 100px', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
          <CourseDetails />
          <div style={{ width: '5px', backgroundColor: 'green', height: '50vh', marginRight: '20px' }} />
          <BookDetails />
          <div style={{ width: '5px', backgroundColor: 'green', height: '50vh', marginRight: '20px' }} />
          <BlogDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
```

> *Note: Code for `CourseDetails.js`, `BookDetails.js`, and `BlogDetails.js` is expected to include basic static JSX content or props-based data.*

## Output

* All three components (`CourseDetails`, `BookDetails`, `BlogDetails`) are displayed in a row
* Vertical green lines are used as separators between the sections
* Flex layout ensures responsive and clean UI structure
* Easily extendable with `map()` or conditionally hidden sections

Check the `output/` folder for a screenshot showing both states in the browser.


