'use client'
import React from 'react';

import { Copy, Server } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './alert';
import { Badge } from './badge';
import { Button } from './button';
import toast from 'react-hot-toast';
const textMap ={
    public:'public',
    admin:'admin'
}
const variantMap ={
    public:'secondary',
    admin:'destructive'
}
const onCopy =(description)=>{
    navigator.clipboard.writeText(description)
    toast.success('API Route Copied to the clipboard')
}
const ApiAlert = ({title, description ,variant}) => {
    return (
        <Alert>
            <Server className='w-4 h-4'/>
            <AlertTitle className="flex items-center gap-x-2">
             {title}   
             <Badge variant={variantMap[variant]}>
                {textMap[variant]}
             </Badge>
            </AlertTitle>
            <AlertDescription className='mt-4 items-center justify-between'>
                <code className='text-sm  font-semibold relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono'>
                    {description}
                </code>
                <Button variant='outline' size='icon' onClick={()=>onCopy(description)}>
                    <Copy className='h-4 w-4'/>
                </Button>
            </AlertDescription>
        </Alert>
    );
};

export default ApiAlert;