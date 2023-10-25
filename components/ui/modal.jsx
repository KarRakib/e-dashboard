'use client'
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';


const Modal = ({title, description, isOpen, onClose, children}) => {
    const onChange = (open)=>{
        if(!open){
            onClose()
        }
    }
    return (
      
         <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title} </DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <>{children}</>
            </DialogContent>
        </Dialog>
    
    );
}

export default Modal;
