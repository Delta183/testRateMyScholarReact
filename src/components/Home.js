import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

import HomeSearchHeaderComponent from './HomeSearchHeaderComponent';
import student_image from '../resources/student_stock.jpg';
import professor_image from '../resources/professor_stock.jpeg';
import faculty_image from '../resources/principal_stock.jpeg';
import university_image from '../resources/university_stock.jpeg';
import students_interacting from '../resources/students_interacting.jpeg'
import laptop_image from '../resources/laptop_stock.jpeg'

function Home() {
  return (
    <div className="Home">
      
      <main role="main">

        <div className="container-fluid">
          <HomeSearchHeaderComponent/>
          <div className="container marketing" style={{color: "white"}}>
            <div className="row">
              <div className="col-lg-4">
                <img className="rounded-circle" src={student_image} alt="student" width="150" height="150" />
                <h2>Students</h2>
                <p>This website will allow you to rate your fellow classmates or students of another school. This could be useful if you are deciding who is the best match for a group project.</p>
              </div>
              <div className="col-lg-4">
                <img className="rounded-circle" src={professor_image} alt="professor" width="150" height="150" />
                <h2>Professors</h2>
                <p>Peruse what colleagues and potentially other professors have to say on another professor to find the best mentors for your school career.</p>
              </div>
              <div className="col-lg-4">
                <img className="rounded-circle" src={faculty_image} alt="faculty" width="150" height="160" />
                <h2>Staff</h2>
                <p>Check out the overall perception of the hard-working staff at your school or another who could help you in other matters.</p>
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">Anyone from your school is likely already here. If not, you can change that.</h2>
                <p className="lead">Rate My Scholar boasts a large database containing a myriad of information about most schools,
                the students, professors and staff of that school. If for whatever reason a school, student, professor or staff member
          is missing from the database, Rate My Scholar also gives you the oppurtunity to add a new entry to its massive database.</p>
              </div>
              <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto"
                  src={university_image}
                  alt="university"
                  data-holder-rendered="true" />
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">Learn what your peers have to say on your fellow classmates' performance or perhaps that of a teacher's...</h2>
                <p className="lead">Rate My Scholar is meant for the gauging and measuring of the quality of these individuals on a primarily professional level.
                You will be able to read the reviews of whomever your search results in and this will be accompanied by their star rating and quality in their role.
          This could be your greatest tool as you connect and journey through your university career.</p>
              </div>
              <div className="col-md-5 order-md-1">
                <img className="featurette-image img-fluid mx-auto"
                  src={students_interacting}
                  alt="student_interacting"
                  data-holder-rendered="true"
                />
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">No need to sign in to read and persue the reviews. Though you will need to in order to write one.</h2>
                <p className="lead">Rate My Scholar does not demand that you create an account to use a majority of the services on this site. Though you will need to do so as reviews
                require that they be made by verified accounts. If this if your first visit, you should press the "Register" link on the navigation bar. Otherwise, refer to the login page
                if you already have an account.
          </p>
              </div>
              <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" 
                src={laptop_image} 
                alt="laptop"
                data-holder-rendered="true" />
              </div>
            </div>

            <hr className="featurette-divider" />

          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;