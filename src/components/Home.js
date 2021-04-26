import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

import student_image from '../resources/student_stock.jpeg';
import professor_image from '../resources/professor_stock.jpeg';
import faculty_image from '../resources/principal_stock.jpeg';
import university_image from '../resources/university_stock.jpeg';
import students_interacting from '../resources/students_interacting.jpeg'
import laptop_image from '../resources/laptop_stock.jpeg'

function Home() {
  return (
    <div className="Home">
      
      <main role="main">

        <div class="container-fluid">
          <div class="jumbotron jumbotron-fluid text-center" >
            <h1 class="jumbotron-heading">Welcome to Rate My Scholar</h1>
            <p class="text-muted">
              With this complex and incredible site, you can peruse the quality of all your colleagues.
              Not just your professor.
              <br />
              <h5>Begin your search by entering a school below.</h5>
            </p>
            <div class="input-group col-md-12">
              <input class="form-control py-2" type="search" value="" id="example-search-input"></input>
              <span class="input-group-append">
                <button onclick="window.location.href='result.html';" class="btn btn-outline-secondary" type="button">
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </div>
          </div>
          <div class="container marketing" style={{color: "white"}}>
            <div class="row">
              <div class="col-lg-4">
                <img class="rounded-circle" src={student_image} alt="Generic placeholder image" width="150" height="150" />
                <h2>Students</h2>
                <p>This website will allow you to rate your fellow classmates or students of another school. This could be useful if you are deciding who is the best match for a group project.</p>
                <p><a class="btn btn-primary" href="#" role="button">View details »</a></p>
              </div>
              <div class="col-lg-4">
                <img class="rounded-circle" src={professor_image} alt="Generic placeholder image" width="150" height="150" />
                <h2>Professors</h2>
                <p>Peruse what colleagues and potentially other professors have to say on another professor to find the best mentors for your school career.</p>
                <p><a class="btn btn-primary" href="#" role="button">View details »</a></p>
              </div>
              <div class="col-lg-4">
                <img class="rounded-circle" src={faculty_image} alt="Generic placeholder image" width="150" height="160" />
                <h2>Staff</h2>
                <p>Check out the overall perception of the hard-working staff at your school or another who could help you in other matters.</p>
                <p><a class="btn btn-primary" href="#" role="button">View details »</a></p>
              </div>
            </div>

            <hr class="featurette-divider" />

            <div class="row featurette">
              <div class="col-md-7">
                <h2 class="featurette-heading">Anyone from your school is likely already here. If not, you can change that.</h2>
                <p class="lead">Rate My Scholar boasts a large database containing a myriad of information about most schools,
                the students, professors and staff of that school. If for whatever reason a school, student, professor or staff member
          is missing from the database, Rate My Scholar also gives you the oppurtunity to add a new entry to its massive database.</p>
              </div>
              <div class="col-md-5">
                <img class="featurette-image img-fluid mx-auto"
                  src={university_image}
                  data-holder-rendered="true" />
              </div>
            </div>

            <hr class="featurette-divider" />

            <div class="row featurette">
              <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading">Learn what your peers have to say on your fellow classmates' performance or perhaps that of a teacher's...</h2>
                <p class="lead">Rate My Scholar is meant for the gauging and measuring of the quality of these individuals on a primarily professional level.
                You will be able to read the reviews of whomever your search results in and this will be accompanied by their star rating and quality in their role.
          This could be your greatest tool as you connect and journey through your university career.</p>
              </div>
              <div class="col-md-5 order-md-1">
                <img class="featurette-image img-fluid mx-auto"
                  src={students_interacting}
                  data-holder-rendered="true"
                />
              </div>
            </div>

            <hr class="featurette-divider" />

            <div class="row featurette">
              <div class="col-md-7">
                <h2 class="featurette-heading">No need to sign in to read and persue the reviews. Though you will need to in order to write one.</h2>
                <p class="lead">Rate My Scholar does not demand that you create an account to use a majority of the services on this site. Though you will need to do so as reviews
                require that they be made by verified accounts. If this if your first visit, you should press the "Register" link on the navigation bar. Otherwise, refer to the login page
                if you already have an account.
          </p>
              </div>
              <div class="col-md-5">
                <img class="featurette-image img-fluid mx-auto" src={laptop_image} data-holder-rendered="true" />
              </div>
            </div>

            <hr class="featurette-divider" />

          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;