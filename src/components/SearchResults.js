import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function SearchResults() {
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
                <h1 style={{ color: "white" }}>Showing results for: John Doe </h1>
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
                                                        <tr>
                                                            <td>
                                                                <div class="widget-26-job-title">
                                                                    <Link to={'/result'}><a>John Doe</a></Link>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="widget-26-job-info">
                                                                    <p class="type m-0">Professor</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="widget-26-job-salary">3.5</div>
                                                            </td>
                                                            <td>
                                                                <div class="widget-26-job-category bg-soft-base">
                                                                    <i class="indicator bg-base"></i>
                                                                    <span>Computer Science</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="widget-26-job-title">
                                                                    <Link to={'/result'}><a>John Doe</a></Link>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="widget-26-job-info">
                                                                    <p class="type m-0">Student</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="widget-26-job-salary">4.2</div>
                                                            </td>
                                                            <td>
                                                                <div class="widget-26-job-category bg-soft-warning">
                                                                    <i class="indicator bg-warning"></i>
                                                                    <span>History</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="widget-26-job-title">
                                                                    <Link to={'/result'}><a>John Doe</a></Link>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="widget-26-job-info">
                                                                    <p class="type m-0">Faculty</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="widget-26-job-salary">5.0</div>
                                                            </td>
                                                            <td>
                                                                <div class="widget-26-job-category bg-soft-success">
                                                                    <i class="indicator bg-success"></i>
                                                                    <span>N/A</span>
                                                                </div>
                                                            </td>
                                                        </tr>
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
            </div>
        </div>
    );
}

export default SearchResults;