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
    }

    render() {
        return (
            <div class="jumbotron jumbotron-fluid text-center" >
            <h1 class="jumbotron-heading">Welcome to Rate My Scholar</h1>
            <p>
              With this complex and incredible site, you can peruse the quality of all your colleagues.
              Not just your professor.
              <br/>
              <br/>
              <h5>Begin your search by entering a School name below.</h5>
            </p>
            <div class="input-group col-md-12">
              <input class="form-control py-2" type="search" placeholder="Brock University..." id="example-search-input"></input>
              <span class="input-group-append">
              <Link to={'/search'} className="btn btn-primary">Search</Link>
              </span>
            </div>
            <br />
              <h5>Or by entering a Scholar name below.</h5>
            <div class="input-group col-md-12">
              <input class="form-control py-2" type="search" placeholder="John Doe..." id="example-search-input"></input>
              <span class="input-group-append">
              <Link to={'/search'} className="btn btn-primary">Search</Link>
              </span>
            </div>
          </div>
        );
    }
}
export default HomeSearchHeaderComponent;