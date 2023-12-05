import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
//import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");

    return (
      <div>
        <h1>About Class Component</h1>
        <div>LoggedIn User</div>
        <h2>This is React Web dummy project</h2>
        <UserClass name={"First"} location={"Hamburg Class"} />
      </div>
    );
  }
}

export default About;
