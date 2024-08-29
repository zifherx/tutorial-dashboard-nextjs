"use client";

import { SidebarItem } from "@/components/SidebarItem";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import {
  dataGeneralSidebar,
  dataSupportSidebar,
  dataToolsSidebar,
} from "./SidebarRoutes.data";

export function SidebarRoutes() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="uppercase text-slate-500 mb-2">General</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </div>

        <Separator />

        <div className="p-2 md:p-6">
          <p className="uppercase text-slate-500 mb-2">Tools</p>
          {dataToolsSidebar.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </div>

        <Separator />

        <div className="p-2 md:p-6">
          <p className="uppercase text-slate-500 mb-2">Support</p>
          {dataSupportSidebar.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div>
        <div className="text-center p-6">
          <Button variant="outline" className="w-full">
            Upgrade Plan
          </Button>
        </div>

        <Separator />

        <footer className="mt-3 p-3 text-center">
          2024. All right reserved
        </footer>
      </div>
    </div>
  );
}
