declare const lucide: any;

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  techs = [
    { category: 'Backend',   items: ['Java', 'Spring Boot', 'Python', 'Kotlin', 'PHP'] },
    { category: 'Frontend',  items: ['Angular', 'TypeScript', 'Next.js', 'Flutter', 'React Native', 'HTML', 'CSS'] },
    { category: 'Banco de Dados', items: ['PostgreSQL', 'MongoDB', 'Firebase'] },
    { category: 'Outros',    items: ['Git', 'REST APIs', 'Docker'] },
  ];

  awards = [
    {
      short: 'OBI',
      title: 'Olimpíada Brasileira de Informática',
      description: 'Medalha nacional — competição que fortaleceu minha lógica de programação e capacidade de resolver problemas complexos.',
    },
    {
      short: 'OBR',
      title: 'Olimpíada Brasileira de Robótica',
      description: 'Medalha nacional — desafio envolvendo automação, lógica e trabalho em equipe.',
    },
  ];

  ngAfterViewInit() {
    lucide.createIcons();
  }
}