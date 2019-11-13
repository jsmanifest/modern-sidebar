import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DoubleArrowSharpIcon from "@material-ui/icons/DoubleArrowSharp";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import SidebarSection from "./SidebarSection";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: ({ width }) => (typeof width !== "undefined" ? width : 200),
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerExpanded: {
    width: ({ width }) => (typeof width !== "undefined" ? width : 200),
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClosed: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  expandButton: ({ expanded }) => ({
    "& svg": {
      color: theme.palette.secondary.main,
      transform: `scaleX(${expanded ? -1 : 1})`
    },
    marginLeft: 10,
    position: "absolute",
    bottom: 10,
    right: expanded && 10
  })
}));

function Sidebar({
  items = [],
  onItemClick,
  expanded,
  toggleExpand,
  width = 240
}) {
  const classes = useStyles({ expanded, width });

  return (
    <>
      <Drawer
        variant="permanent"
        classes={{
          root: `${classes.drawer} ${
            classes[expanded ? "drawerExpanded" : "drawerClosed"]
          }`,
          paper: classes[expanded ? "drawerExpanded" : "drawerClosed"]
        }}
        open={expanded}
      >
        <div className={classes.toolbar} />
        <List disablePadding>
          {items.map((section, index) => {
            if (!Array.isArray(section)) {
              throw new Error("Top level sidebar items should be arrays");
            }
            return (
              <SidebarSection
                key={`section${index}`}
                items={section}
                onItemClick={onItemClick}
                index={index}
                depth={0}
                expanded={expanded}
              />
            );
          })}
        </List>
        <IconButton
          title={expanded ? "Collapse the sidebar" : "Expand the sidebar"}
          onClick={toggleExpand}
          edge="start"
          className={classes.expandButton}
        >
          <DoubleArrowSharpIcon />
        </IconButton>
      </Drawer>
    </>
  );
}

export default Sidebar;
