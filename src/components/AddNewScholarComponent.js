import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddNewScholarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            faculty:'',
            school:'',
            profession: '0'
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleFacultyChange = this.handleFacultyChange.bind(this);
        this.handleSchoolChange = this.handleSchoolChange.bind(this);
        this.handleProfessionChange = this.handleProfessionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleNameChange(event) {
        this.setState({name: event.target.value});
      }
      handleFacultyChange(event) {
        this.setState({faculty: event.target.value});
      }
      handleSchoolChange(event) {
        this.setState({school: event.target.value});
      }
      handleProfessionChange(event) {
        this.setState({profession: event.target.value});
      }
      
    
      handleSubmit(event) {
        alert(this.state.name + ',' + this.state.faculty + ',' + this.state.school + ',' + this.state.profession);
        event.preventDefault();
      }
    
    render() {
        return (
            <div className="container">
                <h1 className="display-4 d-flex justify-content-center" style={{ color: "white" }}>Add a new Scholar</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Fill out all pertinent information of the scholar.</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Name of Scholar</label>
                                        <input type="text" value={this.state.name} className="form-control" onChange={this.handleNameChange} placeholder="e.g. Daniel Figueroa" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput2">Faculty of Scholar</label>
                                        <input type="text" value={this.state.faculty} className="form-control" onChange={this.handleFacultyChange} placeholder="e.g. Computer Science" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput3">School of the Scholar</label>
                                        <input type="text" value={this.state.school} className="form-control" onChange={this.handleSchoolChange} placeholder="e.g. Brock University" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4" style={{ marginRight: "2%" }}>Position in the school:</label>
                                        <select value={this.state.profession} onChange={this.handleProfessionChange} >
                                            <option value="0">Professor</option>
                                            <option value="1">Student</option>
                                            <option value="2">Teaching Assistant</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 offset-md-4">
                                        <button type="submit" value="submit" className="btn btn-primary">
                                            Add Scholar
                                </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNewScholarComponent;