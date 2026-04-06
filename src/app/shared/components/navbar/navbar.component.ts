import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuOpen = false;

  links = [
    { label: 'Início', path: '/'},
    { label: 'Projetos', path: '/projects'},
    { label: 'Blog', path: '/blog'},
    { label: 'Sobre', path: '/about'},
  ];

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}