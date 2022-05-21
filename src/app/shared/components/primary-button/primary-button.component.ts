import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'als-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent implements OnInit {

  @Input() text: string = "";
  @Input() disabled: boolean = false;
  @Input() width: number = 134;
  @Input() height: number = 32;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  dimensions: {};

  constructor() { }

  ngOnInit(): void {
    this.dimensions = {
      'height': this.height + 'px',
      'width': this.width.toString().indexOf('%') > -1 ? this.width : this.width + 'px'
    };
  }

  emitClick() {
    if(!this.disabled){
      this.clicked.emit()
    }
  }

}
