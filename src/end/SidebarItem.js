import React from "react";
import { makeStyles } from "@material-ui/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const startPadding = 15;

const useStyles = makeStyles(theme => ({
  root: ({ depth }) => ({
    paddingLeft: startPadding + depth * 20,
    "& svg": {
      color: "#555"
    }
  }),
  listItemIcon: ({ isSubSection }) => ({
    padding: 0,
    minWidth: 0,
    opacity: isSubSection ? 0.8 : 1
  }),
  listItemText: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  arrowIcon: ({ expanded }) => {
    if (!expanded) {
      return {
        width: 16,
        height: 16
      };
    }
  }
}));

function SidebarItem({
  item,
  onClick: onClickProp,
  depth,
  expanded,
  isSubSection,
  renderSubitems
}) {
  const [collapsed, setCollapsed] = React.useState(true);
  const classes = useStyles({ isSubSection, depth, expanded });

  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }

  const { Icon, label, items: subItems, ...restItem } = item;
  const hasSubItems = Array.isArray(subItems);

  function onClick(callback) {
    return e => {
      if (onClickProp) onClickProp(item, e);
      if (hasSubItems) toggleCollapse();
      if (callback) callback(item, e);
    };
  }

  return (
    <>
      <ListItem
        classes={{ root: classes.root }}
        {...restItem}
        onClick={onClick(item.onClick)}
        button
      >
        {Icon && (
          <ListItemIcon
            classes={{
              root: classes.listItemIcon
            }}
          >
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText
          classes={{
            root: classes.listItemText
          }}
          primary={!expanded && Icon !== undefined ? "" : label}
        />
        {hasSubItems ? (
          collapsed ? (
            <KeyboardArrowDownIcon className={classes.arrowIcon} />
          ) : (
            <KeyboardArrowUpIcon className={classes.arrowIcon} />
          )
        ) : null}
      </ListItem>
      {hasSubItems &&
        renderSubitems &&
        renderSubitems({
          subItems,
          collapsed
        })}
    </>
  );
}

export default SidebarItem;
