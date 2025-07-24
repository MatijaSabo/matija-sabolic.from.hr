'use client'

import React from 'react'
import { motion, useAnimationControls } from 'motion/react'

export const AnimationControll = () => {
    const flipControlls = useAnimationControls();

    const handleClick = () => {
        flipControlls.start("flip")
    }

    return (
        <div
            style={{
                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: "0.8rem"
            }}
        >
            <button 
                className='example-button'
                onClick={handleClick}
            >
                Flip it!
            </button>
            <motion.div
                style={{
                    width: 150,
                    height: 150,
                    backgroundColor: 'black'
                }}
                variants={{
                    initial: {
                        rotate: "0deg"
                    },
                    flip: {
                        rotate: "360deg"
                    }
                }}
                initial="initial"
                animate={flipControlls}
            >
            </motion.div>
        </div>
    )
}