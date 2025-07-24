'use client'

import { motion } from 'motion/react'

type Props = {
    title?: string;
    description: string;
}

export function Card({title, description} : Props) {
    return (
        <motion.div 
            className="static section-beige-light border-2 border-r-8 border-b-8 rounded-3xl shadow-sm p-6 xl:p-8"
            whileHover={{
                scale: 1.025
            }}
            whileFocus={{
                scale: 1.025
            }}
            whileTap={{
                scale: 1.025
            }}
            transition={{
                duration: 0.25,
                ease: "easeIn"
            }}
        >
            {title && <h3 className="text-lg xl:text-xl font-bold pb-4">{title}</h3> }
            <div className="text-sm xl:text-base " dangerouslySetInnerHTML={{__html: description}}></div>
        </motion.div>
    )
}