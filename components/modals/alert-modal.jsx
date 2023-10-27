import React, { useEffect, useState } from 'react';
import Modal from '@/components/ui/modal';
import { Button } from '@/components/ui/button';

const AlertModal = ({isOpen, onClose, onConfirm, loading}) => {
    const [isMounted, setisMounted] = useState(false)
    useEffect(()=>{
        setisMounted(true)
    },[])
    if(!isMounted){
        return null
    }
    return (
        <Modal title='Are you sure'
        description="This actions cannot be undone"
        isOpen={isOpen}
        onClose={onClose}
        >
            <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
            <Button disabled={loading} variant='outline' onClick={onClose}> Cancel </Button>
            <Button disabled={loading} variant='destructive' onClick={onConfirm}> Continue </Button>
            </div>
            </Modal>
    );
}

export default AlertModal;
