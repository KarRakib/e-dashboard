import { BillboardClient } from "@/components/compnent/billboardClient";
;



const BillboardsPage = async ({
  params
}) => {
//   const billboards = await prismadb.billboard.findMany({
//     where: {
//       storeId: params.storeId
//     },
//     orderBy: {
//       createdAt: 'desc'
//     }
//   });

//   const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
//     id: item.id,
//     label: item.label,
//     createdAt: format(item.createdAt, 'MMMM do, yyyy'),
//   }));
const formattedBillboards = []
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;