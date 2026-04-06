import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/core/services/blog.service';

export interface Post {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  url: string;
  source: {
    name: 'LinkedIn' | 'Dev.to' | 'Medium' | 'Outro';
    icon: string;
  };
  readTime: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];
  activeTag = 'Todos';

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  get allTags(): string[] {
    const tags = this.posts.flatMap((p) => p.tags);
    return ['Todos', ...Array.from(new Set(tags))];
  }

  get filteredPosts(): Post[] {
    if (this.activeTag === 'Todos') return this.posts;
    return this.posts.filter((p) => p.tags.includes(this.activeTag));
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
