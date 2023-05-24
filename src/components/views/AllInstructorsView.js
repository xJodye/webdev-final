import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { deleteInstructorThunk } from "../../store/thunks";

const AllInstructorsView = (props) => {
  if (!props.allInstructors.length) {
    return <div>There are no employees.</div>;
  }

  return (
    <div>
      {props.allInstructors.map((instructor) => {
        let name = instructor.firstname + " " + instructor.lastname;
        return (
          <div key={instructor.id}>
          <Link to={`/employees/${instructor.id}`}>
            <h1>{name}</h1>
          </Link>
          <p>{instructor.department}</p>
          <Link to={`/editemployee/${instructor.id}`}> <button>edit</button></Link> <br/> <button onClick={() => deleteInstructorThunk(instructor.id)}>Delete</button> <br/>
        </div>
        );

      })}
      <br/>
      <br/>
      <Link to='/newemployee'><button>Add New Employee</button></Link>
      <br/>
      <br/>
      <Link to={`/`}><button>Home Page</button></Link>
    </div>
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;