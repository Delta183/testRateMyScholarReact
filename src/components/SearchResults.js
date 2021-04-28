import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResultListComponent from './SearchResultListComponent';


class SearchResults extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [],
            error: null,
        };
    }

    componentDidMount() {
        const { query } = this.props.match.params;

        const fetchConfig = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "some secret key only your app knows OR User ID"
                // TODO: Add ID (int, primary key) to the Accounts table
            }
        };

        fetch('https://rate-my-scholar-server-12.herokuapp.com/scholar_search/' + query, fetchConfig)
        .then((response) => response.json())
        .then((searchResults) => {
            console.log(searchResults);
            this.setState({
                searchResults: searchResults,
                error: null,
            });
        })
        .catch((error) => {
            console.log(error);
            this.setState({
                error: error,
            });
        });
    }

    render() {
        return (
            <div className="container" style={{ paddingTop: "3%", paddingBottom: "3%" }}>
                <div className="row">
                    <div className="col-lg-12 card-margin">
                        <div className="card search-form">
                            <div className="card-body p-0">
                                <form id="search-form">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row no-gutters">
                                                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                                    <select className="form-control" id="exampleFormControlSelect1">
                                                        <option>School</option>
                                                        <option>Professor</option>
                                                        <option>Student</option>
                                                        <option>Faculty</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-8 col-md-6 col-sm-12 p-0">
                                                    <input type="text" placeholder="Search..." className="form-control" id="search" name="search" />
                                                </div>
                                                <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                                                    <button type="submit" className="btn btn-base">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style={{ paddingTop: "1%" }}>
                    <h1 class="font-weight-bold" style={{ color: "white" }}>Showing results for: {this.props.match.params.query} </h1>
                   <SearchResultListComponent
                    searchResults={this.state.searchResults}
                   /> 
                    </div>
            </div>
        );
    }
}

export default SearchResults;
