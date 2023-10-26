import prisma from '@/lib/prismabd';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

const SetupLayout = async({children}) => {
    const {userId} = auth()
    if(!userId){
        redirect('sign-in')
    }
    const store = await prisma.store.findFirst({
        where:{
            userId,
        }
    });
    if(store){
        redirect(`/${store.id}`)
    }
    return (
        <div>
            {children}
        </div>
    );
}

export default SetupLayout;
