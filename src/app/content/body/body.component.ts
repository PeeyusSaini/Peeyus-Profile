import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

declare var Typed: any;
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [
   
      trigger('typingAnimation', [
        state('typing', style({
          opacity: 1
        })),
        state('blink', style({
          opacity: 0
        })),
        transition('typing => blink', [
          animate('0.5s ease-in-out')
        ]),
        transition('blink => typing', [
          animate('0s')
        ])
      ])
    
  ]
})
export class BodyComponent implements OnInit {
  typingState = 'typing';
  currentText = '';
  texts = ['Web-Developer', 'Programmer', 'Web-Designer'];
  index = 0;

url:any
profileImage:string="https://peeyussaini.github.io/My_Profile/assets/images/my photo-min.jpg" ;
  constructor() { }

  ngOnInit(): void {
    this.animateText();
    this.scrollToTop();
  }
  animateText() {
    setInterval(() => {
      this.typingState = 'blink';
      setTimeout(() => {
        this.typingState = 'typing';
        this.currentText = this.texts[this.index];
        this.index = (this.index + 1) % this.texts.length;
      }, 500);
    }, 3000);
  }
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
