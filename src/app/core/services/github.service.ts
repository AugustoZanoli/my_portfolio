import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

@Injectable({ providedIn: 'root' })
export class GithubService {
  private baseUrl = 'https://api.github.com/users/AugustoZanoli';

  constructor(private http: HttpClient) {}

  getRepos(): Observable<Repo[]> {
    return this.http
      .get<Repo[]>(`${this.baseUrl}/repos?per_page=100&sort=updated`)
      .pipe(
        map((repos) => repos.filter((r) => !r.name.includes('AugustoZanoli')))
      );
  }
}