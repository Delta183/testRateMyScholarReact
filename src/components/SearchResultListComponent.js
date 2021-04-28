import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResultListItemComponent from './SearchResultListItemCompnent';

class SearchResultListComponent extends React.Component {
    render() {
        return (
            <div className="col-12">
                <div className="card card-margin">
                    <div className="card-body">
                        <div className="row search-body">
                            <div className="col-lg-12">
                                <div className="search-result">
                              
                                    <div className="result-body" >
                                        <div className="table-responsive">
                                            <table className="table widget-26">
                                                <tbody>
                                                <tr>
                                                        <td>
                                                            <div className="font-weight-bold widget-26-job-title">
                                                                Name
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="font-weight-bold widget-26-job-info">
                                                                Position
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="font-weight-bold widget-26-job-info">
                                                                School
                                                             </div>
                                                        </td>
                                                        <td>
                                                            <div className="font-weight-bold widget-26-job-info">
                                                                Rating
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="font-weight-bold widget-26-job-info">
                                                                Department
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {this.props.searchResults.map((searchResult) => {
                                                        return (
                                                            <SearchResultListItemComponent
                                                                name={searchResult.name}
                                                                position={searchResult.position}
                                                                faculty={searchResult.faculty}
                                                                rating={searchResult.rating}
                                                                school={searchResult.school}
                                                            />
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchResultListComponent;
