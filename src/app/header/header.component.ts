import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(){}
  ngOnInit(){
  }

  // isScratched: boolean = false;

  // scratchCoupon() {
  //   this.isScratched = true;
  //   // Add logic for handling scratched coupon (e.g., show a message, reveal content, etc.)
  // }

}
