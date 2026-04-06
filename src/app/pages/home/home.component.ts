declare const lucide: any;

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  techs = [
    { name: 'Java', icon: 'devicon-java-plain', color: '#bb6809' },
    { name: 'Spring Boot', icon: 'devicon-spring-plain', color: '#6DB33F' },
    { name: 'PHP', icon: 'devicon-php-plain', color: '#777BB4' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6' },
    { name: 'Python', icon: 'devicon-python-plain', color: '#3776AB' },
    { name: 'Angular', icon: 'devicon-angularjs-plain', color: '#DD0031' },
    { name: 'Flutter', icon: 'devicon-flutter-plain', color: '#00C6FB' },
    { name: 'React Native', icon: 'devicon-react-plain', color: '#61DAFB' },
    { name: 'Next.js', icon: 'devicon-nextjs-plain', color: '#385017' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#336791' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: '#47A248' },
    { name: 'Firebase', icon: 'devicon-firebase-plain', color: '#FFCA28' },
    { name: 'Git', icon: 'devicon-git-plain', color: '#F05032' },
    { name: 'Docker', icon: 'devicon-docker-plain', color: '#2496ED' },
  ];

  awards = [
    {
      title: 'Medalha — Olimpíada Brasileira de Informática',
      short: 'OBI',
      description:
        'Reconhecimento nacional em lógica de programação e algoritmos.',
    },
    {
      title: 'Medalha — Olimpíada Brasileira de Robótica',
      short: 'OBR',
      description:
        'Competição nacional envolvendo automação, lógica e trabalho em equipe.',
    },
  ];

  ngAfterViewInit() {
    lucide.createIcons();
  }
}
