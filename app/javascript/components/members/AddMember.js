import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import axios from "axios";
import Tables from "../shared/Tables";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import { Route, Link } from "react-router-dom";
const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  textField: {
    width: 500
  },
  table: {
    paddingLeft: "50px"
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

  render() {
    const classes = this.props.classes;
    const headers = ["NOM", "PRENOM", "EMAIL"];
    return (
      <React.Fragment>
        <Paper className={classes.table}>
          <table>
            <tbody>
              <tr>
                <td>
                  <span>Nom : </span>
                </td>
                <td>
                  <TextField
                    required
                    id="standard-required"
                    className={classes.textField}
                    margin="normal"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Prenom : </span>
                </td>
                <td>
                  <TextField
                    required
                    id="standard-required"
                    className={classes.textField}
                    margin="normal"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Email : </span>
                </td>
                <td>
                  <TextField
                    required
                    id="standard-required"
                    className={classes.textField}
                    margin="normal"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.button}
          >
            <SaveIcon
              className={classNames(classes.leftIcon, classes.iconSmall)}
            />
            Save
          </Button>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Members);
