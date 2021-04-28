import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';

function Login() {
    return (
        <div className="Login">
            <main role="main" style={{paddingTop:"5%"}}>
                <div className="container">
                    <h1 className="display-4 d-flex justify-content-center" style={{color: "white"}} >Login</h1>
                    <div className="login-form">
                        <form action="/examples/actions/confirmation.php" method="post">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Username" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" required="required" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Log in</button>
                            </div>
                            <div className="clearfix">
                                <label className="float-left form-check-label" style={{color: "white"}}><input type="checkbox" /> Remember me</label>
                                {/* Forgot password button here */}
                            </div>
                        </form>
                        <p className="text-center"><a href="register.html">Create an Account</a></p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Login;
