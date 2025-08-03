import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 'C1', name: 'React Basics', startdate: '12-08-2025' },
    { id: 'C2', name: 'Advanced React', startdate: '16-08-2025' },
  ];

  return (
    <div>
      <h2>Course Details</h2>
        {courses.map(course => (
          <div key={course.id}>
            <h1>{course.name}</h1>
            <h4>{course.startdate}</h4>
            </div>
        ))}
    </div>
  );
}

export default CourseDetails;
