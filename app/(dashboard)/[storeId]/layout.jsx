import prisma from '@/lib/prismabd';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

const DashboardLayout = async({children, params}) => {
    const {userId} = auth()
    if(!userId){
        redirect('sign-in')
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
    return (
        <div>
            nav 
            {children}
        </div>
    );
}

export default DashboardLayout;
