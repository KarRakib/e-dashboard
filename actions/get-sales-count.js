import prisma from "@/lib/prismabd";


export const getSalesCount = async (storeId) => {
  const salesCount = await prisma.order.count({
    where: {
      storeId,
      isPaid: true
    },
  });

  return salesCount;
};
