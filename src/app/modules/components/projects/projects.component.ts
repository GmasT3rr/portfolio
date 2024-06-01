import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowUpRightDots,
  faChevronRight,
  faDisplay,
  faMobileScreen,
} from '@fortawesome/free-solid-svg-icons';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, SafeUrlPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @ViewChildren('items') items!: QueryList<ElementRef>;
  coffeeShop: string = 'https://gmast3rr.github.io/coffee-shop/';
  foodApp: string = 'https://gmast3rr.github.io/food-app-fe/api/foods/search';
  RDR2: string = 'https://gmast3rr.github.io/RDR2-Page/';
  itemsList = [
    {
      title: 'FOOD APP',
      description:
        "As a gym bro, I sure need an app for registering my meals and keep track of my macros, so why wouldn't I write code to solve my need? Also, I made a Backend for this project which uses FatSecret API.",
      techs: [
        { name: 'Angular', iconPath: 'assets/svgs/angular.svg' },
        { name: 'NodeJs', iconPath: 'assets/svgs/nodejs-alt.svg' },
        { name: 'RxJs', iconPath: 'assets/svgs/rxjs.svg' },
        { name: 'Typescript', iconPath: 'assets/svgs/typescript.svg' },
        { name: 'SCSS', iconPath: 'assets/svgs/sass.svg' },
      ],
      responsive: true,
      page: this.foodApp,
    },
    {
      title: 'COFFEE SHOP',
      description:
        "This is a huge project that consists of an online store for selling coffee. It's not finished yet, but you can check the progress made anytime you want!",
      techs: [
        { name: 'Angular', iconPath: 'assets/svgs/angular.svg' },
        { name: 'Typescript', iconPath: 'assets/svgs/typescript.svg' },
        { name: 'SCSS', iconPath: 'assets/svgs/sass.svg' },
        { name: 'RxJs', iconPath: 'assets/svgs/rxjs.svg' },
      ],
      responsive: true,
      page: this.coffeeShop,
    },
    {
      title: 'FANPAGE RDR 2',
      description:
        'I made this project to show my love for this game and also try some animations.',
      techs: [
        { name: 'Angular', iconPath: 'assets/svgs/angular.svg' },
        { name: 'Typescript', iconPath: 'assets/svgs/typescript.svg' },
        { name: 'SCSS', iconPath: 'assets/svgs/sass.svg' },
      ],
      responsive: true,
      page: this.RDR2,
    },
    {
      title: 'COMING SOON...',
      description: 'Yet to come.',
      techs: [],
      responsive: false,
      page: '',
    },
  ];

  faChevronRight = faChevronRight;
  faArrowUpRightDots = faArrowUpRightDots;
  faMobileScreen = faMobileScreen;
  faDisplay = faDisplay;

  constructor(private renderer: Renderer2) {}

  destroy(event: Event, clickedItem: any): void {
    event.stopPropagation();
    this.items.forEach((element: ElementRef) => {
      const item = element.nativeElement;
      this.renderer.removeClass(item, 'otherWasClicked');
      this.renderer.removeClass(item, 'clicked');
      this.renderer.removeStyle(item, 'margin-top');
    });
  }

  handleClick(clickedItem: any, index: number) {
    let totalHeight = 0;

    this.items
      .toArray()
      .slice(0, index)
      .forEach((itemRef) => {
        totalHeight += itemRef.nativeElement.offsetHeight;
      });

    this.items.forEach((element: ElementRef) => {
      const item = element.nativeElement;
      this.renderer.removeClass(item, 'rotatedYAnimationFromStart');
      if (item === clickedItem) {
        this.renderer.addClass(item, 'clicked');
        this.renderer.removeClass(item, 'otherWasClicked');
        this.renderer.setStyle(item, 'margin-top', `-${totalHeight}px`);
      } else {
        this.renderer.addClass(item, 'otherWasClicked');
      }
    });
  }

  goToPage(link: string) {
    window.open(link, '_blank');
  }
}
