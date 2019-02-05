import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { Route, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

class MenuRight extends React.Component {
  render() {
    return (
      <React.Fragment>
        <List>
          <React.Fragment>
            <ListItem button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <Link to="/">Members</Link>
            </ListItem>
            <Divider />
          </React.Fragment>
        </List>
      </React.Fragment>
    );
  }
}

export default MenuRight;
