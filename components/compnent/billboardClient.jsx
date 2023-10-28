"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import Heading from "./Heading";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";


// import { DataTable } from "@/components/ui/data-table";

// import { ApiList } from "@/components/ui/api-list";

// import { columns, BillboardColumn } from "./columns";



export const BillboardClient= ({
  data
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Billboards (${data.length})`} description="Manage billboards for your store" />
        <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      {/* <DataTable searchKey="label" columns={columns} data={data} /> */}
      <Heading title="API" description="API Calls for Billboards" />
      <Separator />
      {/* <ApiList entityName="billboards" entityIdName="billboardId" /> */}
    </>
  );
};