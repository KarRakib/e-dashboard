"use client"

import { format } from "date-fns";
import { SizesClient } from "./components/client";
import prisma from "@/lib/prismabd";

// Remove the type annotation for the parameter
async function SizesPage({  params}) {
  const sizes = await prisma.size.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  // Remove the type annotation for the variable
  const formattedSizes = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizesClient data={formattedSizes} />
      </div>
    </div>
  );
};

// Remove the export keyword
// export default SizesPage;
