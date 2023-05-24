import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCourseView from '../views/NewCourseView';
import { addCourseThunk } from '../../store/thunks';


class NewCourseContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: "", 
          timeslot: "",
          location: "", 
          instructorId: null, 
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
        if(!this.state.description || this.state.description.trim()===""){
          this.setState({error:"description is required"});
          return;
        }
        if( !this.state.prioritylevel ||  this.state.prioritylevel.trim()===""){
          this.setState({error:"Must provide a priority status."});
          return;
        }
        if(!this.state.completionstatus || this.state.completionstatus.trim()===""){
          this.setState({error:"Must enter a completion status."});
          return;
        };
        let course = {
            title: this.state.description,
            timeslot: this.state.timeslot,
            instructorId: this.state.instructorId
        };
        
        let newCourse = await this.props.addCourse(course);

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
          return (<Redirect to={`/task/${this.state.redirectId}`}/>)
        }
        return (
          <NewCourseView 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            error={this.state.error}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addCourse: (course) => dispatch(addCourseThunk(course)),
    })
}

export default connect(null, mapDispatch)(NewCourseContainer);