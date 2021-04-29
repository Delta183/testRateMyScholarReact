import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commenter_name: '',
            rating: 1,
            comment_text: '',
            isValidSubmit: true,
            didSubmitSucceed: null,
            error: null
        };

        this.handleCommenterNameChange = this.handleCommenterNameChange.bind(this);
        this.handleStarRatingChange = this.handleStarRatingChange.bind(this);
        this.handleCommentTextChange = this.handleCommentTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    } // constructor

    handleCommenterNameChange(event) {
        this.setState({ 
            commenter_name: event.target.value
        });
    }
    handleStarRatingChange(event) {
        this.setState({ 
            rating: event.target.value
        });
    }
    handleCommentTextChange(event) {
        this.setState({ 
            comment_text: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        // All fields are filled
        if(this.state.rating !== '' && this.state.comment_text !== '' && this.state.commenter_name !== ''){
            this.putData();
            this.setState({
                isValidSubmit: true
            }) 
        }
        // All but commmenter name is filled
        else if(this.state.rating !== '' && this.state.comment_text !== '' && this.state.commenter_name === ''){
            this.setState({
                commenter_name: "Anonymous",
                isValidSubmit: true,
            }) 
            this.putData();
        }
        // Non-optional fields are not filled
        else{
            this.setState({
                isValidSubmit: false
            }) 
        }
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
                text: this.state.comment_text,
                commenter_name: this.state.commenter_name,
                rating: this.state.rating,
                scholar_id: this.props.match.params.scholar_id,
            })
        };

        fetch('https://rate-my-scholar-server-12.herokuapp.com/comments', fetchConfig)
            .then((response) => response.json())
            .then(() => {
                console.log("Added to database successfully");
                this.setState({
                    didSubmitSucceed: true,
                });
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    didSubmitSucceed: false,
                    error: error,
                });
            });
    }

    render(){
        // if (this.state.didSubmitSucceed === true) {
        //     return (); // Show a new UI that says successfully added and a link to view that scholar page
        // }

        let resultMessage;
        if(this.state.isValidSubmit === false){
            resultMessage = <div style={{paddingTop:"2%"}} className="text-danger">Please fill out all the fields to submit a new scholar.</div>;
        }
        return (
            <div className="container">
                <h1 className="display-4 d-flex justify-content-center" style={{color: "white"}}>Rating: John Doe</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Fill out the boxes to complete your review.</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                            <label htmlFor="exampleFormControlInput1">Name of Reviewer (Optional)</label>
                                            <input type="text" value={this.state.commenter_name} onChange={this.handleCommenterNameChange} className="form-control" placeholder="e.g. Daniel Figueroa" />
                                        </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Star Rating for this scholar</label>
                                        <select className="form-control" id="exampleFormControlSelect1" value={this.state.rating} onChange={this.handleStarRatingChange}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Comments on this scholar</label>
                                        <textarea value={this.state.comment_text} onChange={this.handleCommentTextChange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div className="col-md-6 offset-md-4">
                                        <button type="submit" className="btn btn-primary">
                                            Submit your Review
                                        </button>
                                    </div>
                                    {resultMessage}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
   
}

export default Rate;
