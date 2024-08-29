export interface iPayment {
  id: number;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}
