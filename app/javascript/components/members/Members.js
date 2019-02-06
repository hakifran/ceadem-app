import React from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import Tables from "../shared/Tables";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Route, Link } from "react-router-dom";
const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  }
});
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
  AddIconClick() {
    <Link to="/addMember" />;
  }
  render() {
    const classes = this.props.classes;
    const headers = ["NOM", "PRENOM", "EMAIL"];
    return (
      <React.Fragment>
        <Link to="/addMember">
          <Fab color="primary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Link>

        <Paper>
          <Tables headers={headers} datas={this.state.members} />
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Members);
