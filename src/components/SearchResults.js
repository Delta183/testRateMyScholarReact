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
            <div class="container" style={{ paddingTop: "3%", paddingBottom: "3%" }}>
                <div class="row">
                    <div class="col-lg-12 card-margin">
                        <div class="card search-form">
                            <div class="card-body p-0">
                                <form id="search-form">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="row no-gutters">
                                                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                                    <select class="form-control" id="exampleFormControlSelect1">
                                                        <option>School</option>
                                                        <option>Professor</option>
                                                        <option>Student</option>
                                                        <option>Faculty</option>
                                                    </select>
                                                </div>
                                                <div class="col-lg-8 col-md-6 col-sm-12 p-0">
                                                    <input type="text" placeholder="Search..." class="form-control" id="search" name="search" />
                                                </div>
                                                <div class="col-lg-1 col-md-3 col-sm-12 p-0">
                                                    <button type="submit" class="btn btn-base">
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
                <div class="row" style={{ paddingTop: "3%" }}>
                    <h1 style={{ color: "white" }}>Showing results for: {this.props.match.params.query} </h1>
                   <SearchResultListComponent
                    searchResults={this.state.searchResults}
                   /> 
                    </div>
            </div>
        );
    }
}

export default SearchResults;
