import {
  BarChart4,
  Building2,
  Calendar,
  CircleHelpIcon,
  PanelsTopLeft,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { iSidebarRoute } from "./SidebarRoutes.interface";

export const dataGeneralSidebar: iSidebarRoute[] = [
  {
    id: 1,
    icon: PanelsTopLeft,
    label: "Dashboard",
    href: "/",
  },
  {
    id: 2,
    icon: Building2,
    label: "Companies",
    href: "/companies",
  },
  {
    id: 3,
    icon: Calendar,
    label: "Calendar",
    href: "/tasks",
  },
];

export const dataToolsSidebar: iSidebarRoute[] = [
  {
    id: 1,
    icon: CircleHelpIcon,
    label: "Faqs",
    href: "/faqs",
  },
  {
    id: 2,
    icon: BarChart4,
    label: "Analytics",
    href: "/analytics",
  },
];

export const dataSupportSidebar: iSidebarRoute[] = [
  {
    id: 1,
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
  {
    id: 2,
    icon: ShieldCheck,
    label: "Security",
    href: "/security",
  },
];
