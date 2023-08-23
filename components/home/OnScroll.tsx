import React, {useEffect, useRef} from "react";
import {motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const RightSide = ( { children, width = "fit-content" }: Props) => {

    return (
        <div >
            <motion.div 
                
                initial={{opacity:0, scale:0, x: 500}}
                whileInView={{opacity: 1, scale: 1, x: 0}}
                transition={{duration: 0.6}}
            >
                {children}
            </motion.div>

            
        </div>
    );
};


export const LeftSide = ( { children, width = "fit-content" }: Props) => {

    return (
        <div >
            <motion.div 
                
                initial={{opacity:0, scale:0, x: 500}}
                whileInView={{opacity: 1, scale: 1, x: 0}}
                transition={{duration: 0.6}}
            >
                {children}
            </motion.div>

            
        </div>
    );
};