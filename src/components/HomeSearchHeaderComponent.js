import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

class HomeSearchHeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scholarQuery: null,
        };

        this.handleScholarTextChange = this.handleScholarTextChange.bind(this);
    }

    handleScholarTextChange(event) {
        this.setState({
            scholarQuery: event.target.value
        });
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid text-center" >
            <h1 className="jumbotron-heading">Welcome to Rate My Scholar</h1>
            <div>
              <p>
              With this complex and incredible site, you can peruse the quality of all your colleagues.
              Not just your professor.
              </p>
              <h5>Begin your search by entering a School name below.</h5>
            </div>
            <div className="input-group col-md-12">
              <input className="form-control py-2" type="search" placeholder="Brock University..." id="example-search-input"></input>
              <span className="input-group-append">
              <Link to={'/search'} className="btn btn-primary">Search</Link>
              </span>
            </div>
            <br />
              <h5>Or by entering a Scholar name below.</h5>
            <div className="input-group col-md-12">
              <input className="form-control py-2" type="search" placeholder="John Doe..." id="example-search-input" onChange={this.handleScholarTextChange}></input>
              <span className="input-group-append">
              <Link to={`/search/${this.state.scholarQuery}`} className="btn btn-primary">Search</Link>
              </span>
            </div>
          </div>
        );
    }
}
export default HomeSearchHeaderComponent;