import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Work } from './types';
import { useWindowSize } from '../../hooks/useWindowSize';

interface WorkCardProps {
  work: Work;
}

export const WorkCard = ({ work }: WorkCardProps) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  return (
    <motion.a
      href={work.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-[#121629] rounded-lg overflow-hidden flex flex-col h-full"
    >
      <div className="relative w-full pt-[56.25%] overflow-hidden">
        <img
          src={work.image}
          alt={work.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#121629]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-3 right-3">
            <div className="rounded-full bg-[#eebbc3] p-2.5">
              <ExternalLink className="w-5 h-5 text-[#232946]" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 flex flex-wrap gap-1.5 justify-end max-w-[80%] z-10">
          {work.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full bg-[#121629]/80 text-[#b8c1ec] whitespace-nowrap backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className={`text-[15px] font-medium mb-2.5 truncate group-hover:text-[#eebbc3] transition-colors duration-300
          ${isMobile ? 'leading-snug' : isTablet ? 'leading-relaxed' : 'leading-normal'}`}
        >
          {work.title}
        </h3>
        <p className={`text-sm text-[#b8c1ec] line-clamp-3 mb-3
          ${isMobile ? 'leading-normal' : 'leading-relaxed'}`}
        >
          {work.description}
        </p>
      </div>
    </motion.a>
  );
};