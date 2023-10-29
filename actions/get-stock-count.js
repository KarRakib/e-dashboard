import prisma from "@/lib/prismabd";


export const getStockCount = async (storeId) => {
  const stockCount = await prisma.product.count({
    where: {
      storeId,
      isArchived: false,
    }
  });

  return stockCount;
};
