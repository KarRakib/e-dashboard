import prisma from "@/lib/prismabd";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
    console.log('router', req.body, params.storeId);
    try {
        const { userId } = auth();
        const body = await req.json();
        const { name } = body;
        console.log('name',name);
        if(!userId){
            return new NextResponse.json({message:'Unauthorized', status:401})
        }
        if(!name){
            return new NextResponse.json({message:'Name is Required', status:400})
        }
        if(!params.storeId){
            return new NextResponse.json({message:'Store is Required', status:400})
        }
    
        const store = await prisma.store.updateMany({
            where: {
                id: params.storeId,
                userId,
            },
            data: {
                name,
            },
        });
        return new NextResponse.json({store, status:201})
    } catch (error) {
        console.log('Patch', error);
        return new NextResponse.json({message:error.message, status:501})
    }
};

export const DELETE = async(req,{params})=>{
    try {
        const {userId} = auth();
        
        if(!userId){
            return new NextResponse.json({message:'Unauthorized', status:401})
        }
       
        if(!params.storeId){
            return new NextResponse.json({message:'Store is Required', status:400})
        }
        const store = await prisma.store.deleteMany({
            where:{
                id: params.storeId,
                userId
            }
        });
        return new NextResponse.json({store, status:201})
    } catch (error) {
        console.log('Patch',error);
        return new NextResponse.json({message:error.message, status:501})
        
    }
    }