import Navbar from '@/components/Navbar/Navbar';
import prisma from '@/lib/prismabd';
import { auth } from '@clerk/nextjs';
import { redirect, useParams } from 'next/navigation';
import React from 'react';

const DashboardLayout = async({ children,params}) => {
   
    console.log('parms',params);
    const {userId} = auth()
    if(!userId){
        redirect('/sign-in')
    }
    const store = await prisma.store.findFirst({
        where:{
            id:params.storeId,
            userId,
        }
    });
    if(!store){
        redirect('/')
    }
    console.log('layout store', store);
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
}

export default DashboardLayout;
