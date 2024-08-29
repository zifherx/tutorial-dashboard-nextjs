"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CustomIcon } from "@/components/CustomIcon";

import { useState } from "react";
import { FormCreateCustomer } from "../FormCreateCustomer";
import { List } from "lucide-react";

export function HeaderCompanies() {
  const [openModalCreate, setOpenModalCreate] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-x-2 items-center mb-4">
        <CustomIcon icon={List} />
        <h2 className="text-xl">List of Companies</h2>
      </div>

      <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
        <DialogTrigger asChild>
          <Button>Create Company</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Create Customer</DialogTitle>
            <DialogDescription>
              Create and configure your customer
            </DialogDescription>
          </DialogHeader>

          <FormCreateCustomer setOpenModalCreate={setOpenModalCreate} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
