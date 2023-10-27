import prisma from '@/lib/prismabd';
import React from 'react';


const DashboardPage = async({params}) => {
    console.log('check', params );
    const store = await prisma.store.findFirst({
        where:{
            id:params.storeId,
            
        }
    });
    console.log('check store',store);
    return (
        <div>
          Active Store  {store?.name}
        </div>
    );
}

export default DashboardPage;
