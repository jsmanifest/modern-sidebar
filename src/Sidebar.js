import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function SidebarItem({ name, label }) {
  return (
    <ListItem key={name} style={{ paddingLeft: 36 }} button dense>
      <ListItemText>
        <span className="sidebar-subitem-text">{label}</span>
      </ListItemText>
    </ListItem>
  );
}

function Sidebar({ items }) {
  return (
    <div className="sidebar">
      <List disablePadding dense>
        {items.map(({ label, name, items: subItems, ...rest }) => {
          return (
            <React.Fragment key={name}>
              <ListItem style={{ paddingLeft: 18 }} button {...rest}>
                <ListItemText>{label}</ListItemText>
              </ListItem>
              {Array.isArray(subItems) ? (
                <List disablePadding dense>
                  {subItems.map(subItem => {
                    return (
                      <ListItem
                        key={subItem.name}
                        style={{ paddingLeft: 36 }}
                        button
                        dense
                      >
                        <ListItemText>
                          <span className="sidebar-subitem-text">
                            {subItem.label}
                          </span>
                        </ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              ) : null}
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
}

export default Sidebar;
