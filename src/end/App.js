import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import MoneyIcon from "@material-ui/icons/Money";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import SettingsIcon from "@material-ui/icons/Settings";
import HistoryIcon from "@material-ui/icons/History";
import Sidebar from "./Sidebar";

const sidebarItems = [
  [
    {
      label: "Home",
      Icon: HomeIcon,
      title: "Go to homepage"
    },
    {
      label: "Billing",
      Icon: AttachMoneyIcon,
      items: [
        {
          label: "Statements",
          Icon: MoneyIcon,
          title: "See your billing statements"
        },
        {
          label: "Reports",
          Icon: LocalAtmIcon,
          title: "See your reports",
          items: [
            {
              label: "Statements",
              Icon: MoneyIcon,
              title: "See your billing statements"
            },
            {
              label: "Reports",
              Icon: LocalAtmIcon,
              title: "See your reports",
              items: [
                {
                  label: "Statements",
                  Icon: MoneyIcon,
                  title: "See your billing statements"
                },
                {
                  label: "Reports",
                  Icon: LocalAtmIcon,
                  title: "See your reports"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: "Settings",
      Icon: SettingsIcon,
      title: "Go to settings page"
    },
    {
      label: "History",
      Icon: HistoryIcon,
      title: "View your history"
    }
  ]
];

function App() {
  const [expanded, setExpanded] = React.useState(true);

  function toggleExpand() {
    setExpanded(prev => !prev);
  }

  return (
    <div>
      <Sidebar
        items={sidebarItems}
        expanded={expanded}
        toggleExpand={toggleExpand}
      />
    </div>
  );
}

export default App;
