import { Component, OnInit } from '@angular/core';
import { GithubService, Repo } from '../../core/services/github.service';

export interface Category {
  label: string;
  filter: (repo: Repo) => boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  repos: Repo[] = [];
  loading = true;
  error = false;
  activeCategory = 'Todos';

  categories: Category[] = [
    { label: 'Todos',     filter: () => true },
    { label: 'Backend',   filter: (r) => ['Java', 'Kotlin', 'Python', 'PHP'].includes(r.language ?? '') },
    { label: 'Frontend',  filter: (r) => ['TypeScript', 'JavaScript', 'HTML', 'CSS'].includes(r.language ?? '') },
    { label: 'FullStack', filter: (r) => r.topics?.includes('fullstack') },
  ];

  constructor(private github: GithubService) {}

  ngOnInit() {
    this.github.getRepos().subscribe({
      next: (repos) => {
        this.repos = repos;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  get filteredRepos(): Repo[] {
    const cat = this.categories.find(c => c.label === this.activeCategory);
    return cat ? this.repos.filter(cat.filter) : this.repos;
  }

  setCategory(label: string) {
    this.activeCategory = label;
  }

  getLanguageColor(lang: string | null): string {
    const colors: Record<string, string> = {
      'Java':       '#f89820',
      'TypeScript': '#3178c6',
      'JavaScript': '#f7df1e',
      'Python':     '#3572A5',
      'PHP':        '#777bb4',
      'Kotlin':     '#A97BFF',
      'HTML':       '#e34c26',
      'CSS':        '#563d7c',
    };
    return colors[lang ?? ''] ?? '#6B6860';
  }
}