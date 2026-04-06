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
  selectedRepo: Repo | null = null;

  categories: Category[] = [
    { label: 'Todos', filter: () => true },
    { label: 'Java/Kotlin', filter: (r) => ['Java', 'Kotlin'].includes(r.language ?? '') },
    { label: 'TypeScript/JavaScript', filter: (r) => ['TypeScript', 'JavaScript'].includes(r.language ?? '') },
    { label: 'Python', filter: (r) => r.language === 'Python' },
    { label: 'PHP', filter: (r) => r.language === 'PHP' },
    { label: 'Flutter', filter: (r) => ['Dart'].includes(r.language ?? '') },
  ];

  constructor(private github: GithubService) {}

  ngOnInit() {
    this.github.getRepos().subscribe({
      next: (repos) => { this.repos = repos; this.loading = false; },
      error: () => { this.error = true; this.loading = false; }
    });
  }

  get filteredRepos(): Repo[] {
    const cat = this.categories.find(c => c.label === this.activeCategory);
    return cat ? this.repos.filter(cat.filter) : this.repos;
  }

  setCategory(label: string) { this.activeCategory = label; }
  openModal(repo: Repo) { this.selectedRepo = repo; document.body.style.overflow = 'hidden'; }
  closeModal() { this.selectedRepo = null; document.body.style.overflow = ''; }

  getLanguageColor(lang: string | null): string {
    const colors: Record<string, string> = {
      'Java': '#f89820', 'TypeScript': '#3178c6', 'JavaScript': '#f7df1e',
      'Python': '#3572A5', 'PHP': '#777bb4', 'Kotlin': '#A97BFF',
      'HTML': '#e34c26', 'CSS': '#563d7c',
    };
    return colors[lang ?? ''] ?? '#7D8FA3';
  }
}