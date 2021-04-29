import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class SearchResultListItemComponent extends React.Component {
    render() {
        let result;
        const positionNumber = this.props.position;
        if (positionNumber === 0) {
            result = <p className="type m-0">Professor</p>;
        }
        else if (positionNumber === 1) {
            result = <p className="type m-0">Student</p>;
        }
        else {
            result = <p className="type m-0">Teaching Assistant</p>;
        }
        return (
            <tr>
                <td>
                    <div className="widget-26-job-title">
                        <Link to={`/result/${this.props.id}`}><p className="font-italic type m-0">{this.props.name}</p></Link>
                    </div>
                </td>
                <td>
                    <div className="widget-26-job-info">
                        {result}
                    </div>
                </td>
                <td>
                    <div className="widget-26-job-info">
                        <p className="type m-0">{this.props.school}</p>
                    </div>
                </td>
                <td>
                    <div className="widget-26-job-info">
                    <p className="type m-0">{this.props.rating}</p>
                    </div>
                </td>
                <td>
                    <div className="widget-26-job-info">
                    <p className="type m-0">{this.props.faculty}</p>
                    </div>
                </td>
            </tr>
        );
    }
}

export default SearchResultListItemComponent;
