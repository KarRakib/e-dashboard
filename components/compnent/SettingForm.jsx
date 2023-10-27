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


const SettingForm = ({ initialData }) => {
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
const onSubmit = async (data)=>{
    console.log(data);
}
    return (
        <>
        <div className='flex items-center justify-between'>
            <Heading
                title='Settings'
                description="Manage store preferences"
            />
            <Button
                variant="destructive"
                size='icon'
                onClick={() => {}}
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
        </>
    );
}

export default SettingForm;
