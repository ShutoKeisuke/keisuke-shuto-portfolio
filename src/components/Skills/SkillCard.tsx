import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  index: number;
}

export const SkillCard = ({ icon: Icon, name, description, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-[#121629] rounded-lg p-6 relative group transition-all duration-300
                hover:bg-[#121629]/80 hover:shadow-lg hover:shadow-[#eebbc3]/5"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#eebbc3]/5 to-[#b8c1ec]/5 rounded-lg opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />

      <div className="flex items-start gap-4 relative">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="bg-[#eebbc3]/10 p-3 rounded-lg group-hover:bg-[#eebbc3]/20 transition-colors"
        >
          <Icon className="w-6 h-6 text-[#eebbc3]" />
        </motion.div>

        <div className="flex-1">
          <h3 className="text-lg font-medium mb-2 text-[#fffffe] group-hover:text-[#eebbc3] transition-colors">
            {name}
          </h3>
          <p className="text-sm text-[#b8c1ec] mb-4">{description}</p>

          <div className="relative h-1.5 bg-[#121629] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#eebbc3] to-[#b8c1ec] rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};