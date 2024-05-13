import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects-mobile',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './projects-mobile.component.html',
  styleUrl: './projects-mobile.component.scss',
})
export class ProjectsMobileComponent {
  faLinkedin=faLinkedin
  faGithub=faGithub
  faEnvelope=faEnvelope
  faChevronUp=faChevronUp

  show: boolean = false;

  dismissDisclaimer() {
    this.show = true;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Opcional: desplazamiento suave
    });
  }
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
