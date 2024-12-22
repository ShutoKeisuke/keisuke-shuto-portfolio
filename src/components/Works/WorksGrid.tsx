import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WorkCard } from './WorkCard';
import { Work } from './types';
import { useWindowSize } from '../../hooks/useWindowSize';

interface WorksGridProps {
  works: Work[];
  currentPage: number;
  itemsPerPage: number;
}

export const WorksGrid = ({ works, currentPage, itemsPerPage }: WorksGridProps) => {
  const { width } = useWindowSize();
  const isTablet = width >= 768 && width < 1024;
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedWorks = works.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isTablet ? 'grid-rows-2' : ''}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="contents"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {selectedWorks.map((work) => (
            <motion.div
              key={work.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut"
                  }
                }
              }}
            >
              <WorkCard work={work} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};