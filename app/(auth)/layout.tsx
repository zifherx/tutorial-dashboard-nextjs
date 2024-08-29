import Image from "next/image";
import React, { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-center h-full items-center">
      <p>Ziphonex Dashboard</p>
      <h1 className="text-3xl my-2">Welcome to my Dashboard!</h1>
      <h1 className="text-2xl mb-3">ZiphonexDashboard</h1>
      {children}
    </div>
  );
}
