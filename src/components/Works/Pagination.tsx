import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg bg-[#121629] text-[#b8c1ec] disabled:opacity-50 disabled:cursor-not-allowed hover:text-[#eebbc3] transition-colors"
      >
        <ChevronLeft size={20} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-lg ${
            currentPage === page
              ? 'bg-[#eebbc3] text-[#232946]'
              : 'bg-[#121629] text-[#b8c1ec] hover:text-[#eebbc3]'
          } transition-colors`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg bg-[#121629] text-[#b8c1ec] disabled:opacity-50 disabled:cursor-not-allowed hover:text-[#eebbc3] transition-colors"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};