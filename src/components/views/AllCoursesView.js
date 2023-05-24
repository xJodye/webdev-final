import { Link } from "react-router-dom";

const AllCoursesView = (props) => {
  let {courses, deleteCourse} = props;
  //courses = [{id: 300, title: "hello"}]
  if (!courses.length) {
    return (
    <div>
      <p>There are no tasks.</p>
      <Link to={`/newtask`}>
        <button>Add New task</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div>
      {courses.map((course) => {
        let title = course.title;
        return (
          <div key={course.id}>
          <Link to={`/tasks/${course.id}`}>
            <h1>{title}</h1>
          </Link>
          <button onClick={() => deleteCourse(course.id)}>Delete</button>
          </div>
        );
      }
      )}
      <Link to={`/newtask`}>
        <button>Add New task</button>
      </Link>
    </div>
  );
};


export default AllCoursesView;