export interface iIntegration {
  id: string;
  app: string;
  icon: string;
  type: "Finance" | "CRM" | "Marketplace";
  rate: number;
  profit: number;
}
