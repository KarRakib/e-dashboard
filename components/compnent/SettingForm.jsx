import prisma from '@/lib/prismabd';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

const SettingForm =async ({initialData}) => {
    console.log('init',initialData);
   
    return (
        <div>
            Form
        </div>
    );
}

export default SettingForm;
