import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';

function Login() {
    return (
        <div className="Login">
            <main role="main" style={{paddingTop:"5%"}}>
                <div class="container">
                    <h1 class="display-4 d-flex justify-content-center" style={{color: "white"}} >Login</h1>
                    <div class="login-form">
                        <form action="/examples/actions/confirmation.php" method="post">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Username" required="required" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" required="required" />
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block">Log in</button>
                            </div>
                            <div class="clearfix">
                                <label class="float-left form-check-label" style={{color: "white"}}><input type="checkbox" /> Remember me</label>
                                <a href="#" class="float-right">Forgot Password?</a>
                            </div>
                        </form>
                        <p class="text-center"><a href="register.html">Create an Account</a></p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Login;
