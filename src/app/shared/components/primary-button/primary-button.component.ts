import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'als-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent implements OnInit {

  @Input() text: string = "";
  @Input() disabled: boolean = false;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitClick() {
    if(!this.disabled){
      this.clicked.emit()
    }
  }

}
