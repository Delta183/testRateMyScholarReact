import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class SearchResultListItemComponent extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <div class="widget-26-job-title">
                        <Link to={'/result'}><a>{this.props.name}</a></Link>
                    </div>
                </td>
                <td>
                    <div class="widget-26-job-info">
                        <p class="type m-0">{this.props.position}</p>
                    </div>
                </td>
                <td>
                    <div class="widget-26-job-salary">{this.props.rating}</div>
                </td>
                <td>
                    <div class="widget-26-job-category bg-soft-base">
                        <i class="indicator bg-base"></i>
                        <span>{this.props.faculty}</span>
                    </div>
                </td>
            </tr>
        );
    }
}

export default SearchResultListItemComponent;
