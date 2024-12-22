import { Code2, Database, Globe, Palette } from 'lucide-react';
import type { Skill } from './types';

export const skills: Skill[] = [
  {
    icon: Code2,
    name: 'フロントエンド開発',
    description: 'React, TypeScript, Next.jsを用いたモダンな開発。パフォーマンスとユーザビリティを重視したUI/UX設計。'
  },
  {
    icon: Database,
    name: 'バックエンド開発',
    description: 'Node.js, Python, マイクロサービスアーキテクチャによるスケーラブルなシステム設計。'
  },
  {
    icon: Globe,
    name: 'クラウドインフラ',
    description: 'AWS, GCP, Kubernetesを活用した堅牢なインフラ構築と運用自動化。'
  },
  {
    icon: Palette,
    name: 'UIデザイン',
    description: 'Figmaでのデザイン設計、アニメーション実装、インタラクションデザインの実現。'
  }
];