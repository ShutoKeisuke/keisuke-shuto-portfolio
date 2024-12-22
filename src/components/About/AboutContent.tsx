import { motion } from 'framer-motion';
import { Code2, Palette, Globe } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "フロントエンド開発",
    description: "React, TypeScript, Tailwind CSSを使用した最新のWeb開発"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UIデザイン",
    description: "ユーザビリティを考慮したモダンなインターフェースデザイン"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "レスポンシブ対応",
    description: "あらゆるデバイスで最適な表示を実現するレスポンシブデザイン"
  }
];

export const AboutContent = () => {
  return (
    <div className="space-y-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-[120px] sm:w-[140px] md:w-[160px] aspect-square mx-auto sm:mx-0 flex-shrink-0"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800&h=800&crop=entropy"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#232946]/50 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-[#eebbc3]/20 rounded-2xl" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-[#eebbc3]/20 to-[#b8c1ec]/20 rounded-[28px] blur-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center sm:text-left"
          >
            <p className="text-base sm:text-lg leading-relaxed text-[#b8c1ec]">
              5年以上のWeb開発経験を通じて、モダンなフレームワークやツールを駆使した
              効率的な開発プロセスを確立。パフォーマンスとアクセシビリティを重視し、
              ユーザーにとって使いやすく、目的に適したウェブサイトを提供することを心がけています。
            </p>
          </motion.div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className="bg-[#121629] p-6 rounded-lg cursor-pointer group"
          >
            <div className="text-[#eebbc3] mb-4 transform group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <h3 className="text-xl font-medium mb-2 group-hover:text-[#eebbc3] transition-colors">
              {skill.title}
            </h3>
            <p className="text-[#b8c1ec]">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};