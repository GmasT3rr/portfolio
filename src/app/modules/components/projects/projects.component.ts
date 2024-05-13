import { CommonModule } from '@angular/common';
import {
  ApplicationRef,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowUpRightDots,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @ViewChildren('items') items!: QueryList<ElementRef>;
  @ViewChild('main') main!: ElementRef;
  @Output() destroyComponent: EventEmitter<void> = new EventEmitter<void>();

  faChevronRight = faChevronRight;
  faArrowUpRightDots = faArrowUpRightDots;

  coffeeShop:string = 'https://gmast3rr.github.io/coffee-shop/'
  RDR2:string = 'https://gmast3rr.github.io/RDR2-Page/'

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  reloadComp() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute,
    });
  }

  destroy(): void {
    this.destroyComponent.emit();
  }

  handleClick(clickedItem: any) {
    this.renderer.setStyle(this.main.nativeElement, 'z-index', '3');

    this.items.forEach((element: ElementRef) => {
      const item = element.nativeElement;
      if (item === clickedItem) {
        this.renderer.addClass(item, 'clicked');
        this.renderer.removeClass(item, 'otherWasClicked');
      } else {
        this.renderer.addClass(item, 'otherWasClicked');
      }
    });
  }

  goToPage(link: string) {
    window.open(link, '_blank');
  }
}
