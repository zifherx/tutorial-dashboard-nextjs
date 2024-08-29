"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function SwitchTheme() {
  const { setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  const updateTheme = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Sun className={cn(isChecked && `text-slate-400`, "w-5 h-5")} />
      <Switch checked={isChecked} onCheckedChange={updateTheme} />
      <Moon className={cn(!isChecked && `text-slate-400`, "w-5 h-5")} />
    </div>
  );
}
