import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { fetchInstructorThunk, editInstructorThunk, fetchAllCoursesThunk  } from '../../store/thunks';

class EditInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "",
          department: "",
          taskId: null, 
          redirect: false, 
          redirectId: null,
          error: ""
        };
    }

    componentDidMount() {
        this.props.fetchInstructor(this.props.match.params.id);
        this.props.fetchTasks();
        this.setState({
            firstname: this.props.instructor.firstname, 
            lastname: this.props.instructor.lastname,
            department: this.props.instructor.department,
            taskId: this.props.instructor.taskId, 
        });
      }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSelectChange = event => {
      if (event.target.value === "not assigned to anything") {
        this.setState({taskId:null});
      } else {
        this.setState({taskId: event.target.value})
      }
    }

    handleSubmit = event => {
        event.preventDefault();
        //implementing form validation
        if (this.state.firstname === "" ) {
          this.setState({error: "Must enter a firstname."});
          return;
        }
        else if(this.state.lastname === ""){
          this.setState({error: "Must enter a lastname."});
          return;
        }
        else if(this.state.department === ""){
          this.setState({error: "must enter a department."});
          return;
        }

        //get new info for Instructor from form input
        let Instructor = {
            id: this.props.instructor.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
            taskId: this.state.taskId
        };
        
        this.props.editInstructor(Instructor);

        this.setState({
          redirect: true, 
          redirectId: this.props.instructor.id
        });

    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});

    }

    render() {
        let { instructor, allTasks, editInstructor, fetchInstructor} = this.props;
        let assignedTask = 1;

        let otherTasks = allTasks.filter(task => task.id!==assignedTask);
      
        //go to single Instructor view of the edited Instructor
        if(this.state.redirect) {
          return (
            <Redirect 
              to={`/instructor/${this.state.redirectId}`}
            />
          )
        }

        return (
          <div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
              <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
              <input type="text" name="firstname" value={this.state.firstname || ''} placeholder={instructor.firstname} onChange ={(e) => this.handleChange(e)}/>
              <br/>

              <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
              <input type="text" name="lastname" value={this.state.lastname || ''} placeholder={instructor.lastname} onChange={(e) => this.handleChange(e)}/>
              <br/>

              <label style={{color:'#11153e', fontWeight: 'bold'}}>Department: </label>
              <input type="text" name="department" value={this.state.department || ''} placeholder={instructor.department} onChange={(e) => this.handleChange(e)}/>
              <br/>

              <button type="submit">
                Submit
              </button>

            </form>
            { this.state.error !=="" && <p>{this.state.error}</p> }

          </div>
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
      instructor: state.Instructor,
      allTasks: state.allTasks
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editInstructor: (Instructor) => dispatch(editInstructorThunk(Instructor)),
        fetchInstructor: (id) => dispatch(fetchInstructorThunk(id)),
        fetchTasks: () => dispatch(fetchAllCoursesThunk()),

    })
}

export default connect(mapState, mapDispatch)(EditInstructorContainer);