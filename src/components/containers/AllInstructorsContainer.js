import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchAllInstructorsThunk } from "../../store/thunks";
import { AllInstructorsView } from "../views";

function AllInstructorsContainer({ allInstructors, fetchAllInstructors }) {
useEffect(() => {
   fetchAllInstructors();

   // IMPORTANT: DO NOT REMOVE THE COMMENT BELOW
   // eslint-disable-next-line react-hooks/exhaustive-deps
}, []) 

  return <AllInstructorsView allInstructors={allInstructors} />;
}

// Map state to props;
const mapState = (state) => {
  return {
    allInstructors: state.allInstructors,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllInstructors: () => dispatch(fetchAllInstructorsThunk()),
  };
};

// Type check props;
AllInstructorsContainer.propTypes = {
  allInstructors: PropTypes.array.isRequired,
  fetchAllInstructors: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllInstructorsContainer);
