import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StarsBackgroundComponent } from '../../components/stars-background/stars-background.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { PersonalInfoComponent } from '../../components/personal-info/personal-info.component';
import { ProjectsMobileComponent } from '../../components/projects-mobile/projects-mobile.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    StarsBackgroundComponent,
    ProjectsComponent,
    PersonalInfoComponent,
    ProjectsMobileComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
}
