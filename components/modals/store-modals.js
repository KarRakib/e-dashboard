'use client'
import { useStoreModal } from "@/hooks/use-store-modal"
import * as z from "zod"
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod"
import Modal from "@/components/ui/modal"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import toast from "react-hot-toast"
export const StoreModal = () =>{
    const storeModal = useStoreModal()
    const router = useRouter();

  const [loading, setLoading] = useState(false);
  const formSchema = z.object({
    name: z.string().min(1),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values) => {
   
    try {
      setLoading(true);
      const response = await axios.post('/api/stores', values);
      toast.success('create ok')
      console.log(response);
      // window.location.assign(`/${response.data.id}`);
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

    
    return(
        <Modal title='Create Store'
        description="Add a new store to manage products and categories."
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
        >
<div>
        <div className="space-y-4 py-2 pb-4">
          <div className="space-y-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input  placeholder="E-Commerce" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                  <Button  variant="outline" onClick={storeModal.onClose}>
                    Cancel
                  </Button>
                  <Button  type="submit">Continue</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
        </Modal>
    )
}






