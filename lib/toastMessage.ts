import { toast } from "@/components/ui/use-toast";

export const onToast = (
  title: string,
  message?: string,
  destructive?: boolean
) => {
  toast({
    title,
    description: message,
    variant: destructive ? "destructive" : "default",
  });
};
