import React, { useEffect, useState } from 'react';

const UseOrigin = () => {
    const [mounted, setMounted] = useState(false)
    const origin = window!== 'undefined' && window.location.origin? window.location.origin:'';
    useEffect(()=>{
        setMounted(false)
    },[])
    if(!mounted){
        return '';
    }
    return origin
}

export default UseOrigin;
