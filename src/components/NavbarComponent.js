import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar, Nav} from 'react-bootstrap'
import HomeCompoment from './Home';
import ResultComponent from './Result';
import RateComponent from './Rate';
import SearchResultsComponent from './SearchResults';
import AddNewScholarComponent from './AddNewScholarComponent';

class NavbarComponent extends React.Component {
  render() {
    return (
      <div>

            <Router>
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="/">Rate My Scholar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/search/null">Search</Nav.Link>
                    <Nav.Link href="/addNewScholar">Add New Scholar</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Switch>
                {/* Add the routes and components here to provide links */}
                <Route exact path="/">
                  <HomeCompoment />
                </Route>
                <Route path="/result/:scholar_id" component={ResultComponent}/>
                <Route path="/rate/:scholar_id" component={RateComponent}/>
                <Route path="/addNewScholar">
                  <AddNewScholarComponent />
                </Route>
                <Route path="/search/:query" component={SearchResultsComponent} />
              </Switch>
            </Router>
      </div>
    );
  }
};

export default NavbarComponent;