import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ContactTextAreaProps {
  label: string;
  name: string;
  value: string;
  error?: string;
  isValid?: boolean;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const ContactTextArea = ({
  label,
  name,
  value,
  error,
  isValid,
  required,
  onChange
}: ContactTextAreaProps) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-[#b8c1ec] mb-2">
        {label} {required && <span className="text-[#eebbc3]">*</span>}
      </label>
      <div className="relative">
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={5}
          className={`w-full px-4 py-2.5 bg-[#121629] border rounded-lg
            text-[#fffffe] placeholder-[#b8c1ec]/50
            focus:outline-none focus:ring-1
            transition-all duration-200 resize-none
            ${error
              ? 'border-[#eebbc3] ring-1 ring-[#eebbc3]/50'
              : isValid
              ? 'border-[#97c1a9] ring-1 ring-[#97c1a9]/50'
              : 'border-[#b8c1ec]/20 focus:border-[#eebbc3] focus:ring-[#eebbc3]'
            }`
          }
        />
        {isValid && (
          <div className="absolute right-3 top-3">
            <Check className="w-5 h-5 text-[#97c1a9]" />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-[#eebbc3]">{error}</p>
      )}
    </div>
  );
};