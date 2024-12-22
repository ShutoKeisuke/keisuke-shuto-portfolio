export interface Work {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
}