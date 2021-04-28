import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddNewScholarComponent() {
    return (
        <div className="container">
            <h1 className="display-4 d-flex justify-content-center" style={{ color: "white" }}>Add a new Scholar</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Fill out all pertinent information of the scholar.</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Name of Scholar</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="e.g. Daniel Figueroa" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput2">Faculty of Scholar</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="e.g. Computer Science" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput3">School of the Scholar</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="e.g. Brock University" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput4" style={{marginRight:"2%"}}>Position in the school:</label>
                                    <select defaultValue="0">
                                        <option value="0">Professor</option>
                                        <option value="1">Student</option>
                                        <option value="2">Teaching Assistant</option>
                                    </select>
                                </div>
                                <div className="col-md-6 offset-md-4">
                                    <button type="submit" className="btn btn-primary">
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

export default AddNewScholarComponent;