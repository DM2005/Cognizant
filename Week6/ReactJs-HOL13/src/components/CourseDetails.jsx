function CourseDetails({ courses }) {
  return (
    <div className="card course-card">
      <h1>Course Details</h1>
      {courses.map((course) => (
        <div key={course.id} className="item-row course-row">
          <h2>{course.name}</h2>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
