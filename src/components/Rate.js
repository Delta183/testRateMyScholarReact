import 'bootstrap/dist/css/bootstrap.min.css';

function Rate() {
    return (
        <div className="container">
            <h1 className="display-4 d-flex justify-content-center" style={{color: "white"}}>Rating: John Doe</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Fill out the boxes to complete your review.</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">Star Rating for this scholar</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Comments on this scholar</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="col-md-6 offset-md-4">
                                    <button type="submit" className="btn btn-primary">
                                        Submit your Review
                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rate;
