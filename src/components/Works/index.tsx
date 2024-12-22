import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { WorksGrid } from './WorksGrid';
import { Pagination } from './Pagination';
import { works } from './data';
import { useWindowSize } from '../../hooks/useWindowSize';

const ITEMS_PER_PAGE = {
  mobile: 3,
  tablet: 4,
  desktop: 6
};

const Works = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const worksRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  const itemsPerPage = isMobile
    ? ITEMS_PER_PAGE.mobile
    : isTablet
    ? ITEMS_PER_PAGE.tablet
    : ITEMS_PER_PAGE.desktop;

  const totalPages = Math.ceil(works.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (isMobile && worksRef.current) {
      worksRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="works"
      ref={worksRef}
      className="relative py-16 bg-gradient-to-b from-[#121629] to-[#232946]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#232946] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#232946] to-transparent" />
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#eebbc3]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#b8c1ec]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-light mb-4">Works</h2>
          <p className="text-[#b8c1ec] max-w-2xl mx-auto">
            これまでに手がけた主なプロジェクトをご紹介します。
            各プロジェクトの詳細は、デモサイトやGitHubリポジトリでご確認いただけます。
          </p>
        </motion.div>

        <div className="mb-8">
          <WorksGrid
            works={works}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
        </div>

        <div className="pb-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default Works;