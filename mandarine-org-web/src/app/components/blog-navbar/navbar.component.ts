import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'mandarine-blog-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class BlogNavbarHeader {

  @ViewChild('ResponsiveMenuContainer')
  private responsiveMenuContainer: ElementRef;

  @ViewChild('sidenav')
  private sidenav: any;


  public toggleResponsiveMenu() {
    this.sidenav.toggle();
    if(this.responsiveMenuContainer.nativeElement.classList.contains('hide-el')) {
      this.responsiveMenuContainer.nativeElement.classList.remove('hide-el');
      this.responsiveMenuContainer.nativeElement.classList.add('show-el');
    } else {
      this.responsiveMenuContainer.nativeElement.classList.remove('show-el');
      this.responsiveMenuContainer.nativeElement.classList.add('hide-el');
    }
  }

}
