import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResultListComponent from './SearchResultListComponent';
import { Link } from 'react-router-dom';


class SearchResults extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [],
            innerSearchString: null,
            error: null,
        };
        this.handleSearchbarChange = this.handleSearchbarChange.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
    }

    componentDidMount() {
        this.updateSearch();
    }

    handleSearchbarChange(event) {
        this.setState({
            innerSearchString: event.target.value,
        });
    }

    updateSearch() {
        const query = this.state.innerSearchString || this.props.match.params.query;

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
        let result;
        const searchString = this.props.match.params.query;
        if (searchString === "null") {
            result = <h1 className="font-weight-bold" style={{ color: "white" }}>No name entered.</h1>
        }
        else {
            result = <h1 className="font-weight-bold" style={{ color: "white" }}>Showing results for: {searchString} </h1>
        }
        return (
            <div className="container" style={{ paddingBottom: "3%" }}>
                <div className="row">
                    <div className="col-lg-12 card-margin">
                        <div className="search-form">
                            <div className="jumbotron text-center">
                                <h1 className="jumbotron-heading ">Search for another scholar here: </h1>
                               
                                <form id="search-form">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row no-gutters">
                                                <div className="col-lg-11 col-md-6 col-sm-12 p-0">
                                                    <input type="text" onChange={this.handleSearchbarChange} placeholder="Search..." className="form-control" id="search" />
                                                </div>
                                                <div className="col-lg-1 col-md-3 col-sm-12 p-0" onClick={this.updateSearch}>
                                                    <Link to={`/search/${this.state.innerSearchString}`} className="btn btn-primary">Search</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <p className="font-weight-bold">Click on a name in the results to check all comments on that scholar</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ paddingTop: "1%" }}>
                    {result}
                    <SearchResultListComponent
                        searchResults={this.state.searchResults}
                    />
                </div>
                <div style={{ padding: "1%" }} className="text-center" >
                    <p className="font-weight-bold" style={{ color: "white" }}>If the scholar you are looking for is absent, you can add it here</p>
                    <Link to="/addNewScholar" className="btn btn-primary">Add New Scholar</Link>
                </div>

            </div>
        );
    }
}

export default SearchResults;
