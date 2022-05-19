import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'als-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.css']
})
export class SecondaryButtonComponent implements OnInit {

  @Input() text: string = "";
  @Input() icon: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
