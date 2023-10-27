import SettingForm from '@/components/compnent/SettingForm';
import prisma from '@/lib/prismabd';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

const Page = async({params}) => {
    const {userId} = auth()
    if(!userId){
        redirect('/sign-in')
    }
    const store = await prisma.store.findFirst({
        where:{
            id:params.storeId,
            userId
        }
    })
    if(!store){
        redirect('/')
    }
    return (
        <div className='flex-col'>
            <div className='flex-1 space-y-4 p-8 pt-6'>
            <SettingForm initialData={store} />
            </div>
        </div>
    );
}

export default Page;
