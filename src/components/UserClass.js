import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render(props) {
    const { name, place } = this.props;
    return (
      <div className="user-card">
        <h3>Name: {name}</h3>
        <h4>Place: {place}</h4>
        <h4>Email: Random@zmail.com</h4>
      </div>
    );
  }
}

export default UserClass;