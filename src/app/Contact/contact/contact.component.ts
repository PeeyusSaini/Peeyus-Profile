import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.scrollToTop();
  }
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  ngAfterViewInit(): void {
    // After 3 seconds, hide the loader
    setTimeout(() => {
      const loader = this.elementRef.nativeElement.querySelector('#ftco-loader');
      if (loader) {
        loader.classList.remove('show');
      }
    }, 3000);
  }
}
