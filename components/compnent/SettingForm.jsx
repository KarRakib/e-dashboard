'use client'
import * as z from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from 'react';
import Heading from './Heading';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import AlertModal from "../modals/alert-modal";
import ApiAlert from "@/components/ui/apiAlert";


const SettingForm = ({ initialData }) => {
  const params = useParams();
  const route = useRouter()
    // console.log('init', initialData);
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const formSchema = z.object({
        name: z.string().min(1),
      });
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
      });
      const onSubmit = async (data) => {
        console.log(data);
        try {
            await axios.patch(`/api/stores/${params.storeId}`, data);
            route.refresh();
            toast.success('Store updated');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    const onDelete = async () =>{
      try {
        setLoading(true)
        await  axios.delete(`/api/stores/${params.storeId}`)
        route.refresh()
        route.push('/')
        toast.success('delete success')
        
      } catch (error) {
        console.log(error);
        toast.error(error.message)
        
      }finally{
        setOpen(false)
        setLoading(false)
      }
    }
    return (
        <>
        <AlertModal
        isOpen={open}
        onClose={()=> setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
        />
        <div className='flex items-center justify-between'>
            <Heading
                title='Settings'
                description="Manage store preferences"
            />
            <Button
                variant="destructive"
                size='icon'
                onClick={() => setOpen(true)}
            >
                <Trash className='w-4 h-4' />
            </Button>
        </div>
        <Separator/>
        <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input disabled={loading}  placeholder="store name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                  <Button  disabled={loading} className='ml-auto' type='submit'>
                   Save Changes
                  </Button>
              
              
              </form>
            </Form>
            <Separator/>
            <ApiAlert title='NEXT_PUBLIC_API_URL'description={`${origin}/api/${params.storeId}`} variant='public' />
        </>
    );
}

export default SettingForm;
 