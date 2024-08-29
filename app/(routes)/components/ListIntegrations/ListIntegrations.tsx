import { CustomIcon } from "@/components/CustomIcon";

import { TableIntegrations } from "../TableIntegrations";

import { List } from "lucide-react";

export function ListIntegrations() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5 flex-1">
      <div className="flex gap-x-2 items-center mb-4">
        <CustomIcon icon={List} />
        <p className="text-xl">List of Integrations</p>
      </div>
      <TableIntegrations />
    </div>
  );
}
