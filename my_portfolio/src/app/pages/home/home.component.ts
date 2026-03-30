import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  techs = [
    'Java', 'Spring Boot', 'Angular', 'TypeScript',
    'PostgreSQL', 'MongoDB', 'Node.js', 'PHP', 'Next.js', 'Python', 'Kotlin'
  ];

  awards = [
    {
      title: 'Medalha — Olimpíada Brasileira de Informática',
      short: 'OBI',
      description: 'Reconhecimento nacional em lógica de programação e algoritmos.',
    },
    {
      title: 'Medalha — Olimpíada Brasileira de Robótica',
      short: 'OBR',
      description: 'Competição nacional envolvendo automação, lógica e trabalho em equipe.',
    },
  ];
}