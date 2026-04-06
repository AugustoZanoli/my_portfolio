import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();

  links = [
    { label: 'GitHub',   url: 'https://github.com/AugustoZanoli', icon: 'devicon-github-plain' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/augusto-de-camargos-zanoli-9728b12a6/', icon: 'devicon-linkedin-plain' },
  ];
}