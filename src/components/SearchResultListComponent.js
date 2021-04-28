import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import SearchResultListItemComponent from './SearchResultListItemCompnent';

class SearchResultListComponent extends React.Component {
    render() {
        return (
            <div class="col-12">
                <div class="card card-margin">
                    <div class="card-body">
                        <div class="row search-body">
                            <div class="col-lg-12">
                                <div class="search-result">
                              
                                    <div class="result-body" >
                                        <div class="table-responsive">
                                            <table class="table widget-26">
                                                <tbody>
                                                <tr>
                                                        <td>
                                                            <div class="font-weight-bold widget-26-job-title">
                                                                Name
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="font-weight-bold widget-26-job-info">
                                                                Position
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="font-weight-bold widget-26-job-info">
                                                                School
                                                             </div>
                                                        </td>
                                                        <td>
                                                            <div class="font-weight-bold widget-26-job-info">
                                                                Rating
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="font-weight-bold widget-26-job-info">
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
