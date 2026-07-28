import BookDetails from './components/BookDetails.jsx';
import BlogDetails from './components/BlogDetails.jsx';
import CourseDetails from './components/CourseDetails.jsx';
import './App.css';

const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

const courses = [
  { id: 201, name: 'Angular', date: '4/5/2021' },
  { id: 202, name: 'React', date: '6/3/2021' },
];

const blogs = [
  {
    id: 301,
    title: 'React Learning',
    author: 'Stephen Biz',
    description: 'Welcome to learning React!',
    note: 'You can install React from npm.',
  },
];

function App() {
  const showBookDetails = true;
  const showCourseDetails = true;
  const showBlogDetails = true;

  return (
    <div className="app-container">
      <div className="card-container">
        {showCourseDetails && <CourseDetails courses={courses} />}
        {showBookDetails && <BookDetails books={books} />}
        {showBlogDetails && <BlogDetails blogs={blogs} />}
      </div>
    </div>
  );
}

export default App;
