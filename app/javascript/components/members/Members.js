import React from "react";
import axios from "axios";
import Tables from "../shared/Tables";
class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("http://localhost:3000/api/v1/members.json")
      .then(response =>
        this.setState({
          members: response.data,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          isLoading: false
        })
      );
  }

  render() {
    const headers = ["NOM", "PRENOM", "EMAIL"];
    return (
      <div>
        <Tables headers={headers} datas={this.state.members} />
      </div>
    );
  }
}

export default Members;
