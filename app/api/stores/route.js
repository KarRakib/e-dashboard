import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import prisma from '@/lib/prismabd';

export async function POST( req) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;
    console.log('id ', userId);
    console.log('name ' ,name);

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const store = await prisma.store.create({
      data: {
        name,
        userId,
      }
    });
  
    return NextResponse.json('store');
  } catch (error) {
    console.log('[STORES_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};