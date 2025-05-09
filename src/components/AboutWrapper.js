import UserClass  from "./UserClass";
import React ,{useContext} from "react";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";


class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    
    return (
      <div className="about-page">
        <h1>About</h1>
        <h2>This is about page of my app</h2>
        
          <div>
            <UserContext.Consumer>
              {({loggedInUser})=>{
                return <h2 className="font-semibold">{loggedInUser}</h2>
              }}
            </UserContext.Consumer>
          </div>
        
        <UserClass name={"Mohd Arsalan (class)"} place={"Heerapur (class)"} />
      </div>
    );
  }
}

const AboutWrapper = ()=>{

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return <h1>Looks like you are offline. Please check your internet connection.</h1>
  }
  else{
    return <About/>;
  }

}

export default AboutWrapper;
