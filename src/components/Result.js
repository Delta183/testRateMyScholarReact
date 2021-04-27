import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import fullstar from '../resources/star.png';
import halfstar from '../resources/half_star.png';
import emptystar from '../resources/empty_star.png';


function Result() {
    return (
            <div class="container">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-2">John Doe</h1>
                        <p class="lead">Professor at Broccoli University in the Culinary Department</p>
                        <h1 class="display-5">Quality: 3.5</h1>
                        <div class="d-flex flex-row">
                            <img src={fullstar} alt="full star" width="50px" height="50px" />
                            <img src={fullstar} alt="full star" width="50px" height="50px" />
                            <img src={fullstar} alt="full star" width="50px" height="50px" />
                            <img src={halfstar} alt="half star" width="50px" height="50px" />
                            <img src={emptystar} alt="empty star" width="50px" height="50px" />
                        </div>
                        <hr class="my-2" />
                        <p>More info</p>
                        <p class="lead">
                            <Link to={'/rate'} className="btn btn-primary">Rate this Scholar</Link>
                        </p>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <div class="d-flex flex-row justify-content-between">
                        <div class="card" style={{width: "18rem;"}}>
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                        <div class="card" style={{width: "18rem;"}}>
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                        <div class="card" style={{width: "18rem;"}}>
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex flex-row justify-content-between">
                        <div class="card" style={{width: "18rem;"}}>
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                        <div class="card" style={{width: "18rem;"}}>
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                        <div class="card" style={{width: "18rem;"}}>
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Result;
