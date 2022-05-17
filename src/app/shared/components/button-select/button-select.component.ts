import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-select',
  templateUrl: './button-select.component.html',
  styleUrls: ['./button-select.component.css']
})
export class ButtonSelectComponent implements OnInit {

  @Input() text: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
