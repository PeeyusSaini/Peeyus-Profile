import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'MyPortfolioAng';
  
    constructor(private elementRef: ElementRef) { }
  
    ngAfterViewInit(): void {
      // After 3 seconds, hide the loader
      setTimeout(() => {
        const loader = this.elementRef.nativeElement.querySelector('#ftco-loader');
        if (loader) {
          loader.classList.remove('show');
        }
      }, 3000); // 3000 milliseconds = 3 seconds
    }

}
