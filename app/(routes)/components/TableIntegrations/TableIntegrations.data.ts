import { iIntegration } from "./TableIntegrations.interface";
import { v4 as uuidv4 } from "uuid";

export const data_integrations: iIntegration[] = [
  {
    id: uuidv4(),
    app: "Stripe",
    icon: "/images/stripe.png",
    type: "Finance",
    rate: 60,
    profit: 450,
  },
  {
    id: uuidv4(),
    app: "Zapier",
    icon: "/images/zapier.png",
    type: "CRM",
    rate: 20,
    profit: 123.5,
  },
  {
    id: uuidv4(),
    app: "Shopify",
    icon: "/images/shopify.png",
    type: "Marketplace",
    rate: 80,
    profit: 879.89,
  },
];
