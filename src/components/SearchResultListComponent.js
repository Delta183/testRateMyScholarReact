import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
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
                                    <div class="result-header">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="records">Showing: <b>1-20</b> of <b>200</b> result</div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="result-actions">
                                                    <div class="result-sorting">
                                                        <span>Sort By:</span>
                                                        <select class="form-control border border-dark" id="exampleOption">
                                                            <option value="1">Relevance</option>
                                                            <option value="2">Names (A-Z)</option>
                                                            <option value="3">Names (Z-A)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="result-body" style={{ paddingTop: "3%" }}>
                                        <div class="table-responsive">
                                            <table class="table widget-26">
                                                <tbody>
                                                    {this.props.searchResults.map((searchResult) => {
                                                      return (
                                                        <SearchResultListItemComponent
                                                            name={searchResult.name}
                                                            position={searchResult.position}
                                                            faculty={searchResult.faculty}
                                                            rating={searchResult.rating}
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
                        <nav class="d-flex justify-content-center">
                            <ul class="pagination pagination-base pagination-boxed pagination-square mb-0">
                                <li class="page-item">
                                    <a class="page-link no-border" href="#">
                                        <span aria-hidden="true">«</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li class="page-item active"><a class="page-link no-border" href="#">1</a></li>
                                <li class="page-item"><a class="page-link no-border" href="#">2</a></li>
                                <li class="page-item"><a class="page-link no-border" href="#">3</a></li>
                                <li class="page-item"><a class="page-link no-border" href="#">4</a></li>
                                <li class="page-item">
                                    <a class="page-link no-border" href="#">
                                        <span aria-hidden="true">»</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchResultListComponent;
