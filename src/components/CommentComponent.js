import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class CommentComponent extends React.Component {
 
    render() {
        return (
            <div className="card" style={{ width: "18rem;" }}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.commenterName}</h5>
                    <p className="card-text">{this.props.commentText}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{this.props.rating}</li>
                </ul>
            </div>
        );
    }
}

export default CommentComponent;