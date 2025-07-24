'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export const ViewBasedControlls = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true
    });

    return (
        <>
            <div 
                style={{
                    height: '200vh'
                }}
            ></div>
            <motion.div
                style={{
                    height: '100vh',
                    backgroundColor: 'black'
                }}
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 2
                }}
            >
                
            </motion.div>
            <div 
                ref={ref} 
                style={{
                    height: '100vh',
                    backgroundColor: isInView ? "blue" : "red",
                    transition: "1s background"
                }}
            >
            </div>
        </>
    )
}