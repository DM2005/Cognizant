function BlogDetails({ blogs }) {
  const blog = blogs[0];

  return (
    <div className="card blog-card">
      <h1>Blog Details</h1>
      <h2>{blog.title}</h2>
      <p>{blog.author}</p>
      <p>{blog.description}</p>
      <h3>Installation</h3>
      <p>{blog.note}</p>
    </div>
  );
}

export default BlogDetails;
