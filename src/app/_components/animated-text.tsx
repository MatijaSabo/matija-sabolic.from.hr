'use client'

import { Typewriter } from 'react-simple-typewriter'

export const AnimatedText = () => {
  return (
    <div className='h-content text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>
        <Typewriter
            cursor={true}
            cursorBlinking={true}
            loop={true}
            words={[
                "Hello!",
                "My name is Matija Sabolić", 
                "Everyone calls me 'Sabo'",
                "Welcome to my site"
            ]} 
        />
    </div>
  )
}