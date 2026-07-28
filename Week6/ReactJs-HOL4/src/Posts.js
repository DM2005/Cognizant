import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to fetch posts');
        }

        return response.json();
      })
      .then((posts) => {
        const loadedPosts = posts.map(
          (post) => new Post(post.id, post.title, post.body)
        );

        this.setState({
          posts: loadedPosts,
          loading: false,
          error: null
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: error.message
        });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert(`Error happened in Posts component: ${error.message}`);
    console.error(error, info);
  }

  render() {
    const { posts, loading, error } = this.state;

    if (loading) {
      return <p className="status">Loading posts...</p>;
    }

    if (error) {
      return <p className="status status-error">{error}</p>;
    }

    return (
      <section className="posts">
        <h1>Posts</h1>
        {posts.map((post) => (
          <article className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </section>
    );
  }
}

export default Posts;
