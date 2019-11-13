import React from "react";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import SidebarItem from "./SidebarItem";

function SidebarSection({
  items,
  index: sectionIndex,
  depth,
  isSubSection, // Can be used to style the inner sub sections (won't be applied on the top level sections)
  expanded,
  onItemClick
}) {
  if (!Array.isArray(items)) {
    return null;
  }

  return (
    <List dense={!!isSubSection} disablePadding>
      {items.map((item, itemIndex) => (
        <React.Fragment key={`section${sectionIndex}_item${itemIndex}`}>
          {typeof item === "string" ? (
            <Divider style={{ padding: 0, margin: 0 }} />
          ) : (
            <SidebarItem
              onClick={onItemClick}
              item={item}
              depth={depth}
              isSubSection={!!isSubSection}
              expanded={expanded}
              renderSubitems={({ subItems, collapsed }) => (
                <Collapse in={!collapsed} timeout="auto" unmountOnExit>
                  <SidebarSection
                    items={subItems}
                    depth={depth + 1}
                    expanded={expanded}
                    isSubSection
                  />
                </Collapse>
              )}
            />
          )}
        </React.Fragment>
      ))}
    </List>
  );
}

export default SidebarSection;
