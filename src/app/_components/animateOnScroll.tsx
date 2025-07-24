'use client'

import React, { ReactNode, useRef } from 'react';
import { domAnimation, LazyMotion, motion, useInView } from 'motion/react';

type Direction = 'top' | 'bottom' | 'left' | 'right';

interface Props {
  children: ReactNode;
  direction?: Direction;
  slideDistance?: number;
}

const getOffset = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'right':
      return { x: distance, y: 0 };
    case 'left':
      return { x: -distance, y: 0 };
    case 'top':
      return { x: 0, y: -distance };
    case 'bottom':
    default:
      return { x: 0, y: distance };
  }
};

/**
 * Props:
 * - children: React nodes
 * - direction: 'bottom' | 'right' | 'left' | 'top'
 * - slideDistance: pixels to slide from
 */
const FadeIn: React.FC<Props> = ({
  children,
  direction = 'bottom',
  slideDistance = 200
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const offset = getOffset(direction, slideDistance);

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        ref={ref}
        variants={{
          hidden: {
            opacity: 0,
            x: offset.x,
            y: offset.y,
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              duration: 0.5
            },
          }
        }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {children}
      </motion.div>
    </LazyMotion>
  );
};

export default FadeIn;