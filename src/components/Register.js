import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';

function Register() {
    return (
        <div className="Login">
    
            <main class="my-form" style={{ paddingTop: "5%" }}>
                <div class="container-fluid">
                    <h1 class="display-4 d-flex justify-content-center" style={{ color: "white" }} >Register</h1>
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-header">Please fill out the boxes to register.</div>
                                <div class="card-body">
                                    <form name="my-form" onsubmit="return validform()" action="success.php" method="">
                                        <div class="form-group row">
                                            <label for="full_name" class="col-md-4 col-form-label text-md-right">Full
                                    Name</label>
                                            <div class="col-md-6">
                                                <input type="text" id="full_name" class="form-control" name="full-name" />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail
                                    Address</label>
                                            <div class="col-md-6">
                                                <input type="text" id="email_address" class="form-control" name="email-address" />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="user_name" class="col-md-4 col-form-label text-md-right">User
                                    Name</label>
                                            <div class="col-md-6">
                                                <input type="text" id="user_name" class="form-control" name="username" />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="phone_number" class="col-md-4 col-form-label text-md-right">Phone
                                    Number</label>
                                            <div class="col-md-6">
                                                <input type="text" id="phone_number" class="form-control" />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="present_address"
                                                class="col-md-4 col-form-label text-md-right">Address</label>
                                            <div class="col-md-6">
                                                <input type="text" id="present_address" class="form-control" />
                                            </div>
                                        </div>

                                        <div class="col-md-6 offset-md-4">
                                            <button type="submit" class="btn btn-primary">
                                                Register
                                </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Register;
