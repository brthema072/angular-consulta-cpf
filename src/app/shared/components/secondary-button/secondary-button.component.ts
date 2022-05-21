import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'als-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.css']
})
export class SecondaryButtonComponent implements OnInit {

  @Input() text: string = "";
  @Input() rounded: boolean = false;
  @Input() width: number = 134;
  @Input() height: number = 32;
   
  dimensions: {};

  constructor() { }

  ngOnInit(): void {
    this.dimensions = {
      'height': this.height + 'px',
      'width': this.width.toString().indexOf('%') > -1 ? this.width : this.width + 'px'
    };
  }

}
