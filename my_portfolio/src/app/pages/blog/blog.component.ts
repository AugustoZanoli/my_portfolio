import { Component } from '@angular/core';

export interface Post {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  url: string;
  source: 'LinkedIn' | 'Dev.to' | 'Medium' | 'Outro';
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  activeTag = 'Todos';

  posts: Post[] = [
    {
      title: 'Boas práticas com Spring Boot e arquitetura REST',
      summary: 'Como estruturar APIs robustas e escaláveis usando Spring Boot, seguindo boas práticas de design e organização de código.',
      date: '2024-03-01',
      tags: ['Java', 'Spring Boot', 'Backend'],
      url: 'https://www.linkedin.com/in/augusto-de-camargos-zanoli-9728b12a6/',
      source: 'LinkedIn',
    },
    {
      title: 'Angular na prática: componentes reutilizáveis',
      summary: 'Estratégias para criar componentes Angular modulares, reutilizáveis e fáceis de manter em projetos de longo prazo.',
      date: '2024-02-10',
      tags: ['Angular', 'Frontend', 'TypeScript'],
      url: 'https://www.linkedin.com/in/augusto-de-camargos-zanoli-9728b12a6/',
      source: 'LinkedIn',
    },
    {
      title: 'PostgreSQL vs MongoDB: quando usar cada um',
      summary: 'Uma análise prática das diferenças entre bancos relacionais e não relacionais, com exemplos reais de uso.',
      date: '2024-01-20',
      tags: ['PostgreSQL', 'MongoDB', 'Backend'],
      url: 'https://www.linkedin.com/in/augusto-de-camargos-zanoli-9728b12a6/',
      source: 'LinkedIn',
    },
  ];

  get allTags(): string[] {
    const tags = this.posts.flatMap(p => p.tags);
    return ['Todos', ...Array.from(new Set(tags))];
  }

  get filteredPosts(): Post[] {
    if (this.activeTag === 'Todos') return this.posts;
    return this.posts.filter(p => p.tags.includes(this.activeTag));
  }

  setTag(tag: string) {
    this.activeTag = tag;
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  }
}