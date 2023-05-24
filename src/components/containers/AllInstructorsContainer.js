import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllInstructorsThunk, deleteInstructorThunk } from "../../store/thunks";
import { AllInstructorsView } from "../views";
import { connect } from 'react-redux';

function AllInstructorsContainer() {
  const allInstructors = useSelector((state) => state.allInstructors);
  const dispatch = useDispatch();

  //replaces componentDidMount
  useEffect(() => {
    dispatch(fetchAllInstructorsThunk());
  }, [dispatch]);

  return <AllInstructorsView allInstructors={allInstructors} deleteInstructor={deleteInstructorThunk} />;
}

// Map state to props;
const mapState = (state) => {
  return {
    alllInstructors: state.allInstructors,
  };
};


// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllInstructors: () => dispatch(fetchAllInstructorsThunk()),
    deleteInstructor: (courseId) => dispatch(deleteInstructorThunk(courseId)),
  };
};

export default connect(mapState, mapDispatch)(AllInstructorsContainer);