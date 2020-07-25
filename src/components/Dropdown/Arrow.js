import React, { useContext, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import { Context } from './Provider';

const refDuration = 0.22;

export function DropdownArrow({ isFirstInteraction }) {
  const { options, cachedId, getOptionById, targetId } = useContext(Context);

  const cachedOption = useMemo(() => getOptionById(cachedId), [cachedId, getOptionById]);

  const x = cachedId ? cachedOption.optionCenterX : 0;
  
  return (
    <motion.div
      className="dropdown-backgroud"
      initial={{
        opacity: 0,
      }}
      animate={{
        x,
        pointerEvents: 'none',
        opacity: x > 0 ? 1 : 0,
      }}
      transition={{
        ease: 'easeOut',
        x: { duration: isFirstInteraction ? 0 : refDuration}
      }}
    />
  )
}