import { auth } from "@clerk/nextjs/server";
import { TableCompanies } from "../TableCompanies";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export async function ListCompanies() {
  const { userId } = auth();

  if (!userId) return redirect("/");

  const companies = await db.company.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return (
    <div className="mt-5 shadow-sm bg-background rounded-lg p-5 flex-1">
      <TableCompanies companies={companies} />
    </div>
  );
}
