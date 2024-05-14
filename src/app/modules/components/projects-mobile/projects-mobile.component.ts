import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronUp,
  faDisplay,
  faMobileScreen,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects-mobile',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './projects-mobile.component.html',
  styleUrl: './projects-mobile.component.scss',
})
export class ProjectsMobileComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faChevronUp = faChevronUp;

  faMobileScreen = faMobileScreen;
  faDisplay = faDisplay;

  show: boolean = false;
  coffeeShop: string = 'https://gmast3rr.github.io/coffee-shop/';
  RDR2: string = 'https://gmast3rr.github.io/RDR2-Page/';
  linkedIn: string = 'https://www.linkedin.com/in/lucas-ramallo-ab24a2218/';
  github: string = 'https://github.com/GmasT3rr';
  gmail: string = 'mailto:lucramallo14@gmail.com';

  dismissDisclaimer() {
    this.show = true;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Opcional: desplazamiento suave
    });
  }
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
