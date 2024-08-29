import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { iCustomTooltip } from "./CustomTooltip.props";
import { Info } from "lucide-react";

export function CustomTooltip(props: iCustomTooltip) {
  const { content } = props;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Info strokeWidth={1} className="w-5 h-5" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
