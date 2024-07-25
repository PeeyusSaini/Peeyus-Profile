import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
 
  ngOnInit(){
  }
  constructor(private elementRef: ElementRef) { }

  closeNavbar(): void {
    this.elementRef.nativeElement.querySelector('#navbarSupportedContent').classList.remove('show');
  }
  // isScratched: boolean = false;

  // scratchCoupon() {
  //   this.isScratched = true;
  //   // Add logic for handling scratched coupon (e.g., show a message, reveal content, etc.)
  // }

}
