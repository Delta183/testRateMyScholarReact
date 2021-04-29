import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import fullstar from '../resources/star.png';
import halfstar from '../resources/half_star.png';
import emptystar from '../resources/empty_star.png';
import React from 'react';


class Result extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            faculty: '',
            school: '',
            position: '0',
            rating: 0,
            error: null
        };
       
    }

    componentDidMount(){
        const scholarId = this.props.match.params.scholar_id;

        const fetchConfig = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "some secret key only your app knows OR User ID"
                // TODO: Add ID (int, primary key) to the Accounts table
            }
        };

        fetch('https://rate-my-scholar-server-12.herokuapp.com/scholars/' + scholarId, fetchConfig)
            .then((response) => response.json())
            .then((scholar) => {
                console.log(scholar);
                this.setState({
                    name: scholar.name,
                    faculty: scholar.faculty,
                    school: scholar.school,
                    position: scholar.position,
                    rating: scholar.rating,
                    error: null,
                });
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    error: error
                });
            });
    }
    render() {
        let profession;
        const positionNumber = this.props.position;
        if (positionNumber === 0) {
            profession = "Professor";
        }
        else if (positionNumber === 1) {
            profession = "Student";
        }
        else {
            profession = "Teaching Assistant";
        }
        return (
            <div className="container">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-2">{this.state.name}</h1>
                        <p className="lead">{profession} at {this.state.school} in {this.state.faculty}</p>
                        <h1 className="display-5">Quality: {this.state.rating}</h1>
                        <div className="d-flex flex-row">
                            <img src={fullstar} alt="full star" width="50px" height="50px" />
                            <img src={fullstar} alt="full star" width="50px" height="50px" />
                            <img src={fullstar} alt="full star" width="50px" height="50px" />
                            <img src={halfstar} alt="half star" width="50px" height="50px" />
                            <img src={emptystar} alt="empty star" width="50px" height="50px" />
                        </div>
                        <hr className="my-2" />
                        <p>More info</p>
                        <p className="lead">
                            <Link to={`/rate/${this.props.match.params.scholar_id}`} className="btn btn-primary">Rate this Scholar</Link>
                        </p>
                    </div>
                </div>
                <div className="d-flex flex-column bd-highlight mb-3 ">
                    <div className="" >
                        <div className="card" style={{ width: "18rem;" }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>

                        </div>
                        <div className="card" style={{ width: "18rem;" }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                        <div className="card" style={{ width: "18rem;" }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>

                        <div className="card" style={{ width: "18rem;" }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                        <div className="card" style={{ width: "18rem;" }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                        <div className="card" style={{ width: "18rem;" }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Result;
