import React from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div style={{ padding : '100px 100px', alignItems :'center', justifyContent :'center'}}>

      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        
        
       

        {/* All components stacked side by side */}
        <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
          <CourseDetails />
           <div style={{
          width: '5px',
          backgroundColor: 'green',
          height: '50vh',  
          marginRight: '20px'
        }} />
          <BookDetails />
           <div style={{
          width: '5px',
          backgroundColor: 'green',
          height: '50vh',  
          marginRight: '20px'
        }} />
          <BlogDetails />
        </div>

      </div>
    </div>
  );
}

export default App;
