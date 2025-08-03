import React from 'react';

function BlogDetails() {
  const blogs = [
   {
      id: 101,
      title: 'Understanding JSX',
      Author: 'Stephen Biz',
      Description: 'Welcome to JSX — a syntax extension that looks like HTML but works with React.'
    },
    {
      id: 102,
      title: 'Hooks vs Classes',
      Author: 'Sarah Lee',
      Description: 'This blog explains the differences between React Hooks and Class components.'
    }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
        {blogs.map(blog => (
            <div key={blog.id}>
                <h1>{blog.title}</h1>
                <h4>
                    {blog.Author}
                </h4>
                <p>{blog.Description}</p>
            </div>
        ))}
    </div>
  );
}

export default BlogDetails;
