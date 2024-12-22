import { Work } from './types';

export const works: Work[] = [
  {
    id: 1,
    title: 'エンタープライズクラウドネイティブ基盤',
    description: `大規模エンタープライズシステムのためのクラウドネイティブ基盤を開発。Kubernetes上のマイクロサービスをサービスメッシュで統合し、高可用性とスケーラビリティを実現。監視システムとログ集約基盤による可観測性の確保、GitOpsによる継続的デリバリー、セキュリティ自動化を実装。`,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    demoUrl: '#',
    tags: ['Kubernetes', 'Istio', 'Docker', 'Prometheus', 'Grafana', 'ElasticSearch', 'ArgoCD', 'Terraform', 'Go', 'gRPC']
  },
  {
    id: 2,
    title: 'AIパワードeコマースプラットフォーム',
    description: 'AIを活用した次世代eコマースプラットフォーム。パーソナライズされた商品レコメンド、画像認識による商品検索、チャットボットによるカスタマーサポート、需要予測による在庫最適化を実現。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    demoUrl: '#',
    tags: ['React', 'Python', 'TensorFlow', 'FastAPI', 'Redis', 'PostgreSQL']
  },
  {
    id: 3,
    title: 'リアルタイムコラボレーションツール',
    description: 'WebRTCを活用したリアルタイムコラボレーションプラットフォーム。ビデオ会議、画面共有、ドキュメント共同編集、チャット機能を統合。エンドツーエンドの暗号化でセキュアな通信を実現。',
    image: 'https://images.unsplash.com/photo-1600267185393-e158a98703de?auto=format&fit=crop&q=80',
    demoUrl: '#',
    tags: ['WebRTC', 'Socket.io', 'React', 'Node.js', 'MongoDB']
  },
  {
    id: 4,
    title: 'ブロックチェーンベースの資産管理システム',
    description: 'イーサリアムブロックチェーンを活用したデジタル資産管理システム。スマートコントラクトによる自動取引、マルチシグウォレット、KYC/AML対応、リアルタイム価格追跡機能を実装。',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80',
    demoUrl: '#',
    tags: ['Ethereum', 'Solidity', 'Web3.js', 'React', 'Node.js']
  },
  {
    id: 5,
    title: 'IoTデバイス管理プラットフォーム',
    description: 'エッジコンピューティングとクラウドを統合したIoTデバイス管理プラットフォーム。リアルタイムデータ処理、機械学習による異常検知、OTA更新、デバイスフリート管理を実現。',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80',
    demoUrl: '#',
    tags: ['AWS IoT', 'Python', 'React', 'GraphQL', 'TensorFlow']
  },
  {
    id: 6,
    title: '次世代CMS開発プラットフォーム',
    description: 'ヘッドレスCMSとJamstackアーキテクチャを採用した次世代コンテンツ管理システム。GraphQLによるコンテンツAPI、リアルタイムプレビュー、バージョン管理、ワークフロー管理を実装。',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80',
    demoUrl: '#',
    tags: ['Next.js', 'GraphQL', 'Node.js', 'PostgreSQL']
  },
  {
    id: 7,
    title: 'AR/VRエデュケーションプラットフォーム',
    description: '拡張現実と仮想現実を活用した教育プラットフォーム。3Dモデルのインタラクティブな操作、没入型学習体験、進捗トラッキング、協調学習機能を実装。',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80',
    demoUrl: '#',
    tags: ['Unity', 'WebXR', 'Three.js', 'React', 'Node.js']
  },
  {
    id: 8,
    title: 'AIドリブン医療診断支援システム',
    description: '深層学習を活用した医療画像診断支援システム。画像セグメンテーション、異常検出、レポート自動生成、DICOM規格対応、医療データの匿名化処理を実装。',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    demoUrl: '#',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'PostgreSQL']
  },
  {
    id: 9,
    title: 'スマートシティ管理プラットフォーム',
    description: 'IoTセンサーとAIを統合したスマートシティ管理システム。交通流最適化、エネルギー消費監視、環境モニタリング、緊急対応システムの連携を実現。',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80',
    demoUrl: '#',
    tags: ['Python', 'Kafka', 'Spark', 'React', 'MongoDB']
  },
  {
    id: 10,
    title: 'マルチクラウドオーケストレーション',
    description: '複数のクラウドプロバイダーを統合管理するプラットフォーム。リソース最適化、コスト管理、セキュリティコンプライアンス、障害自動復旧を実装。',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    demoUrl: '#',
    tags: ['Terraform', 'Ansible', 'Go', 'React', 'GraphQL']
  }
];