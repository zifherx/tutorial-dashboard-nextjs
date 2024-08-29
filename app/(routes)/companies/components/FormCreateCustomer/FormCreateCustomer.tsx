"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Save } from "lucide-react";
import axios from "axios";

import { formSchema } from "./form.schema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { iFormCreateCustomer } from "./FormCreateCustomer.types";
import { UploadButton } from "@/utils/uploadthing";
import { onToast } from "@/lib/toastMessage";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

export function FormCreateCustomer(props: iFormCreateCustomer) {
  const { setOpenModalCreate } = props;
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      country: "",
      phone: "",
      ruc: "",
      website: "",
      profileImage: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const query = await axios.post("/api/company", values);
      if (query.status === 200) {
        onToast("Company created ✅");
        router.refresh();
        setOpenModalCreate(false);
      }
    } catch (err) {
      onToast("Something went wrong", "", true);
    }
  };

  const { isValid } = form.formState;

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 gap-3">
            {/* Company Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Company name..."
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country name</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="espana">España</SelectItem>
                      <SelectItem value="grecia">Grecia</SelectItem>
                      <SelectItem value="italia">Italia</SelectItem>
                      <SelectItem value="peru">Perú</SelectItem>
                      <SelectItem value="portugal">Portugal</SelectItem>
                      <SelectItem value="united-kingdom">
                        United Kingdom
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Website */}
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="www.ziphonex-com"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+51 924 063 422"
                      type="tel"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* RUC */}
            <FormField
              control={form.control}
              name="ruc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>RUC</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="10703658321"
                      type="text"
                      maxLength={11}
                      minLength={11}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Logo */}
            <FormField
              control={form.control}
              name="profileImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logo Company</FormLabel>
                  <FormControl>
                    {photoUploaded ? (
                      <p className="text-sm bg-green-700 text-white rounded-xl text-center">
                        Logo uploaded!
                      </p>
                    ) : (
                      <UploadButton
                        className="rounded-lg bg-slate-600/20 text-slate-800 outline-dotted outline-3"
                        {...field}
                        endpoint="profileImage"
                        onClientUploadComplete={(res) => {
                          form.setValue("profileImage", res?.[0].url);
                          onToast(
                            "Upload Sucessfully",
                            `Image: ${res?.[0].name} was uploaded!`
                          );
                          setPhotoUploaded(true);
                        }}
                        onUploadError={(err: Error) =>
                          onToast("Error uploading image", "", true)
                        }
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about the company"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={!isValid}>
            <Save className="w-5 h-5 mr-2" />
            Guardar
          </Button>
        </form>
      </Form>
    </div>
  );
}
