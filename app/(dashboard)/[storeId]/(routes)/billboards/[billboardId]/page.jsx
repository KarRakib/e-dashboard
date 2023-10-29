import BillboardForm from '@/components/compnent/BillboardForm';
import prisma from '@/lib/prismabd';
import React from 'react';

const BillBoardPage = async ({ params }) => {
    console.log(params);
    const billboard = await prisma.billboard.findUnique({
        where: {
            id: params.billboardId
        }
    })
    return (
        <div className='flex-col '>
            <div className='flex-1 space-x-4 p-8 pt-6'>
                <BillboardForm initialData={billboard} />
            </div>
        </div>
    );
};

export default BillBoardPage;