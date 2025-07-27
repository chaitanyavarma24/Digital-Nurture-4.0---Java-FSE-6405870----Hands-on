# React Hands-on 5 – Styling Components with CSS Modules and Inline Styles

This hands-on lab demonstrates how to apply styling in React using CSS Modules and dynamic inline styles.

## Objective

- Style React components using CSS Modules
- Apply inline styles conditionally based on props
- Display cohort details as styled cards

## Folder Structure

```
React-handson-5/
│
├── 5. ReactJS-HOL/
│   └── cohorttracker/
│       └── src/
│           ├── components/
│           │   ├── CohortDetails.js         # Component with dynamic styling
│           │   └── CohortDetails.module.css # Scoped styles using CSS Module
│           └── App.js                       # Already existing, renders the component
│
└── output/                                  # Screenshot of final output
```

## Steps Performed

1. Opened the provided React project in `cohorttracker/`
2. Created a CSS Module named `CohortDetails.module.css` for scoped styling
3. Modified `CohortDetails.js` to:
   - Use className from the CSS Module
   - Apply inline color styling based on the `currentStatus` value

## How to Run the Project

```bash
cd cohorttracker
npm install
npm start
```

Visit `http://localhost:3000` to view the output.

## Code Changes

### `src/components/CohortDetails.module.css`

```css
.box {
  width: 300px;
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
}

dt {
  font-weight: 500;
}
```

### `src/components/CohortDetails.js`

```jsx
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  const isOngoing = props.cohort.currentStatus.toLowerCase() === 'ongoing';

  return (
    <div className={styles.box}>
      <h3 style={{ color: isOngoing ? 'green' : 'blue' }}>
        {props.cohort.cohortCode} - 
        <span>{props.cohort.technology}</span>
      </h3>
      <dl>
        <dt>Started On</dt>
        <dd>{props.cohort.startDate}</dd>
        <dt>Current Status</dt>
        <dd>{props.cohort.currentStatus}</dd>
        <dt>Coach</dt>
        <dd>{props.cohort.coachName}</dd>
        <dt>Trainer</dt>
        <dd>{props.cohort.trainerName}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
```

## Output

Check the `output/` folder for a screenshot of the styled cohort cards displayed in the browser.
