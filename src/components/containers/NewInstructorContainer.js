import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewInstructorView from '../views/newInstructorView';
import { addInstructorThunk } from '../../store/thunks';


class NewInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: "", 
            lastname: "",
            department: "", 
            employeeId: null, 
            redirect: false, 
            redirectId: null,
            error: ""
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();
        //dont need ID because the course has not been created yet
        if(this.state.firstname.trim()===""){
          this.setState({error:"must enter a first name."});
          return;
        }
        if(this.state.lastname.trim()===""){
          this.setState({error:"Must enter a last name."});
          return;
        }
        if(this.state.department.trim()===""){
          this.setState({error:"Must enter a department."});
          return;
        };
        let course = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
            employeeId: this.state.employeeId
        };
        
        let newCourse = await this.props.addInstructor(course);

        this.setState({
          redirect: true, 
          redirectId: newCourse.id,
          error: ""
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single course view of newly created course
        if(this.state.redirect) {
          return (<Redirect to={`/employees/${this.state.redirectId}`}/>)
        }
        return (
          <NewInstructorView 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            error={this.state.error}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addInstructor: (course) => dispatch(addInstructorThunk(course)),
    })
}

export default connect(null, mapDispatch)(NewInstructorContainer);