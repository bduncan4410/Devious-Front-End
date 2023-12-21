import { CreditIcon } from "./icons/CreditIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { StatusIcon } from "./icons/StatusIcon";

export const data = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Status",
    icon: <StatusIcon />,
    link: "/status",
  },
  {
    title: "Donations",
    icon: <CreditIcon />,
    link: "/donate",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/admin/settings",
  },
];
