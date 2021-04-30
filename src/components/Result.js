import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import CommentComponent from './CommentComponent';
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
            comments: [],
            ratingAverage: 0,
            error: null
        };

    }

    componentDidMount() {
        const scholarId = this.props.match.params.scholar_id;

        const fetchConfig = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
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
                this.fetchCommentForScholar(scholarId);
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    error: error
                });
            });
    }

    fetchCommentForScholar(scholarId) {
        const fetchConfig = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "some secret key only your app knows OR User ID"
                // TODO: Add ID (int, primary key) to the Accounts table
            }
        };

        fetch('https://rate-my-scholar-server-12.herokuapp.com/comments/' + scholarId, fetchConfig)
            .then((response) => response.json())
            .then((comments) => {
                console.log(comments);
                this.setState({
                    comments: comments
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
        const positionNumber = this.state.position;
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
                        <h4 className="font-italic text-muted">{profession} at {this.state.school} in {this.state.faculty}</h4>
                        <h1 className="display-5">Quality: {this.state.rating}</h1>
                        <hr className="my-2" />
                        <p>To leave a review of this scholar, press the button below.</p>
                        <p className="lead">
                            <Link to={`/rate/${this.props.match.params.scholar_id}/${this.state.name}`} className="btn btn-primary">Rate this Scholar</Link>
                        </p>
                    </div>
                </div>
                <div className="d-flex flex-column bd-highlight mb-3 ">
                    <div className="container">
                        <div className="text-center">
                            <h1 style={{ backgroundColor:"white", opacity:"0.90"}} className="">Reviews from Scholars</h1>
                        </div>
                        {this.state.comments.map((comment) => {
                            return (
                                <CommentComponent
                                    commenterName={comment.commenter_name}
                                    commentText={comment.text}
                                    rating={comment.rating}
                                    id={comment.id}
                                    key={comment.id}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

}

export default Result;
