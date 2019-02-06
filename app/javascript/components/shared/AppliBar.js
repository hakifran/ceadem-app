import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Members from "../members/Members";
import AddMember from "../members/AddMember";
import About from "../About";
import Contact from "../Contact";
import MenuRight from "./MenuRight";
import { Route, Link } from "react-router-dom";
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    marginTop: "100px",
    width: `calc(100% - ${drawerWidth}px)`
  }
});
class AppliBar extends React.Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Permanent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <Route exact path="/" component={Members} />
          <Route exact path="/addMember" component={AddMember} />
        </main>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="right"
        >
          <MenuRight />
        </Drawer>
      </div>
    );
  }
}
export default withStyles(styles)(AppliBar);
