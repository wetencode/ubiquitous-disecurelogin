import React, { useState, useEffect } from "react";
import Appp from './App';
import { createPortal } from "react-dom";
import Preloader from "./Preloader/Preloader";
// import FastSpin from './fastspin/fastspin'

 const Transfer = ()=>{

    const [a, b] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            b(true);
        }, 4000);
    }, []);

    const kungfu_panda = createPortal(<div><Appp /></div>, document.querySelector('.t__ree'));

    return(<>
        { !a ? <Preloader /> : kungfu_panda }
    </>)
};

export default Transfer;