import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


class AddNewScholarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            faculty: '',
            school: '',
            profession: '0',
            resultMessage: '',
            isValidSubmit: false
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleFacultyChange = this.handleFacultyChange.bind(this);
        this.handleSchoolChange = this.handleSchoolChange.bind(this);
        this.handleProfessionChange = this.handleProfessionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } // constructor

    handleNameChange(event) {
        this.setState({ 
            name: event.target.value,
            resultMessage:''
        });
    }
    handleFacultyChange(event) {
        this.setState({ 
            faculty: event.target.value,
            resultMessage:''
         });
    }
    handleSchoolChange(event) {
        this.setState({ 
            school: event.target.value,
            resultMessage:''
        });
    }
    handleProfessionChange(event) {
        this.setState({ 
            profession: event.target.value,
            resultMessage:''
        });
    }

    handleSubmit(event) {
        if(this.state.school !== '' && this.state.name !== '' && this.state.profession !== null && this.state.faculty !== ''){
            this.putData();
            this.setState({
                resultMessage : 'User successfully added. Feel free to add another or return to the home page.',
                school : '',
                name:'',
                faculty: '',
                isValidSubmit: true
            }) 
        }
        else{
            this.setState({
                resultMessage : 'Please fill out all the fields to submit a new scholar.',
                isValidSubmit: false
            }) 
        }
        event.preventDefault();
    }

    putData() {

        const fetchConfig = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "some secret key only your app knows OR User ID"
                // TODO: Add ID (int, primary key) to the Accounts table
            },
            body: JSON.stringify({
                name: this.state.name,
                faculty: this.state.faculty,
                rating: 0,
                school: this.state.school,
                position: this.state.profession,
                profile_picture: ''
            })
        };

        fetch('https://rate-my-scholar-server-12.herokuapp.com/scholars', fetchConfig)
            .then((response) => response.json())
            .then(() => {
                console.log("Added to database successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    

    render() {
        let resultMessage;
        let archivedName = this.state.name;
        if(this.state.isValidSubmit === true){
            resultMessage = <div style={{paddingTop:"2%"}} className="font-weight-bold text-success">
                {this.state.resultMessage}
            </div>;
        }
        else{
            resultMessage = <div style={{paddingTop:"2%"}} className="font-weight-bold text-danger">{this.state.resultMessage}</div>;
        }

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
                                        <button type="submit" value="submit" className="btn btn-primary">Add Scholar</button>
                                    </div>
                                </form>
                                {resultMessage}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNewScholarComponent;