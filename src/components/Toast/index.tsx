import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast = ({ message, isVisible, onClose }: ToastProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-[#121629] border border-[#97c1a9]/20 text-[#fffffe] 
                     p-6 rounded-lg shadow-xl backdrop-blur-sm 
                     relative overflow-hidden max-w-md w-full"
          >
            {/* Background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#97c1a9]/10 to-[#b8c1ec]/10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative flex items-start gap-4">
              <div className="flex-shrink-0 bg-[#97c1a9]/20 p-2 rounded-full">
                <CheckCircle className="w-6 h-6 text-[#97c1a9]" />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg font-medium mb-1 flex items-center gap-2">
                  送信完了
                </h3>
                <p className="text-[#b8c1ec]">{message}</p>
              </div>

              <button
                onClick={onClose}
                className="flex-shrink-0 text-[#b8c1ec] hover:text-[#97c1a9] 
                         transition-colors p-1 hover:bg-[#97c1a9]/10 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-[#97c1a9]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};